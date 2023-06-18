"use client"

import styles from "./Graph.module.css"
import React, { useEffect, useState } from "react"
import { ResponsiveLine, Serie } from "@nivo/line"
import { Button } from "@/Components/Button/Button"

export interface Product {
    name: string
    currentPrice: number
    date: string
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

export function LineGraph({ productData }: lineProps): JSX.Element {
    const [prodData, setProdData] = useState<ProdData[]>([])
    const asDates = productData.map((product: Product) => {
        return {
            x: new Date(product.date),
            y: product.currentPrice
        }
    })

    const minPrice = Math.min(...asDates.map((i) => i.y)) - 10
    const maxPrice = Math.max(...asDates.map((i) => i.y)) + 30

    const asSerie: Serie[] = [
        {
            id: productData[0].name,
            color: "hsl(257, 70%, 50%)",
            data: [...prodData],
        },
    ]

    useEffect(() => {
        setProdData(asSetTimeFrame(30, asDates))
    }, [productData])

    return (
        <div>
            <div className="flex w-fit hover:cursor-pointer gap-2">
                <Button content="Last 7 days" click={() => setProdData(asSetTimeFrame(7, asDates))} />
                <Button content="Last 14 days" click={() => setProdData(asSetTimeFrame(14, asDates))} />
                <Button content="Last 30 days" click={() => setProdData(asSetTimeFrame(30, asDates))} />
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

function asSetTimeFrame(days: number, data: { x: Date; y: number }[]) {
    const daysArray: Date[] = []
    const millisecondsPerDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
    const priceArray: number[] = []

    // Generate the array of dates
    for (let i = days - 1; i >= 0; i--) {
        const currentDate = new Date(data[data.length -1].x.setHours(0,0,0,0) - i * millisecondsPerDay)
        daysArray.push(currentDate)
    }

    // Assign prices to each date
    for (const date of daysArray) {
        let price: number | undefined

        // Find the price for the current date or the nearest previous date with a price
        for (let i = data.length -1; i >= 0; i--) {
            if (data[i].x.setHours(0,0,0,0) === date.getTime()) {
                price = data[i].y
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
