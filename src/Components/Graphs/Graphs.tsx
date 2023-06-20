"use client"

import styles from "./Graph.module.css"
import React, { useEffect, useState } from "react"
import { ResponsiveLine, Serie } from "@nivo/line"
import { Button } from "@/Components/Button/Button"

export interface Product {
    name: string
    currentPrice: number
    date: Date
    discountAmount: number | null
    discountPercentage?: number
    fullPrice?: number
    url?: string
}

interface lineProps {
    productData: Product[]
}

type ProdData = {
    x: string
    y: number
}
const MILLIS_IN_DAY = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
const WEEK = 7
const FORTNIGHT = 14
const MONTH = 39

export function LineGraph({ productData }: lineProps): JSX.Element {
    const [prodData, setProdData] = useState<ProdData[]>([])
    const minPrice = Math.min(...productData.map((i) => i.currentPrice)) - 10
    const maxPrice = Math.max(...productData.map((i) => i.currentPrice)) + 30

    const asSerie: Serie[] = [
        {
            id: productData[0].name,
            color: "hsl(257, 70%, 50%)",
            data: [...prodData],
        },
    ]

    /*
     * adding this filter method here allows us to add more filters later. it also ensures if the price has not changed
     * in a while it will still show the last price as long as there is a date point within n days
     * this also means we can add the option to use a text input to allow users to pick a time frame
     */
    function setDataFilter(filter: number) {
        setProdData(
            asTimeFrame(productData).filter((e, i) => {
                return i > asTimeFrame(productData).length - filter
            })
        )
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setDataFilter(WEEK)
        } else {
            setDataFilter(MONTH)
        }
    }, [productData])

    return (
        <div>
            <div className="flex w-fit hover:cursor-pointer gap-2 m-auto md:m-0 pb-2">
                <Button content="Last 7 days" click={() => setDataFilter(WEEK)} />
                <Button content="Last 14 days" click={() => setDataFilter(FORTNIGHT)} />
                <Button content="Last 30 days" click={() => setDataFilter(MONTH)} />
            </div>
            <div className={styles.lineChart}>
                <ResponsiveLine
                    data={asSerie}
                    margin={{
                        top: 20,
                        right: 30,
                        bottom: 50,
                        left: 50,
                    }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: minPrice, max: maxPrice }}
                    yFormat=" >-$"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 30,
                        legend: "date",
                        legendOffset: 36,
                        legendPosition: "middle",
                    }}
                    axisLeft={{
                        tickSize: 6,
                        tickPadding: 2,
                        tickRotation: 0,
                        legend: "price",
                        legendOffset: -40,
                        legendPosition: "middle",
                    }}
                    pointSize={12}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-8}
                    useMesh={true}
                    curve={"linear"}
                    lineWidth={4}
                    colors={["#ADD8E6FF", "#97e3d5", "#aeff00", "#AEFF00FF"]}
                />
            </div>
        </div>
    )
}

function asTimeFrame(data: Product[]) {
    const daysTotal = (new Date().setHours(0, 0, 0, 0) - data[1].date.setHours(0, 0, 0, 0)) / MILLIS_IN_DAY
    const daysArray: Date[] = []
    const priceArray: number[] = []

    // Generate the array of dates
    for (let i = daysTotal - 1; i >= 0; i--) {
        const currentDate = new Date(new Date().setHours(0, 0, 0, 0) - i * MILLIS_IN_DAY)
        daysArray.push(currentDate)
    }

    // Assign prices to each date
    for (const date of daysArray) {
        let price: number | undefined

        // Find the price for the current date or the nearest previous date with a price
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].date.setHours(0, 0, 0, 0) === date.getTime()) {
                price = data[i].currentPrice
                break
            }
        }

        // If no price is found, assign the price of the previous day saved in priceArray
        if (price === undefined && priceArray.length > 0) {
            price = priceArray[priceArray.length - 1]
        }

        priceArray.push(price || 0)
    }

    return daysArray.map((date, index) => ({
        x: date.toLocaleDateString("en-AU", { day: "numeric", month: "numeric" }),
        y: priceArray[index],
    }))
}
