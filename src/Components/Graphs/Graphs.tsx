"use client"

import styles from "./Graph.module.css"
import React from "react"
import { ResponsiveLine, Serie } from "@nivo/line"

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

export function LineGraph({ productData }: lineProps): JSX.Element {
    const data = productData.map((product: Product, i: number) => {
        return {
            x: `${product.date.split(",")[0]} - ${i}`,
            y: product.currentPrice,
        }
    })
    const minPrice = Math.min(...data.map((i) => i.y)) - 10
    const maxPrice = Math.max(...data.map((i) => i.y)) + 30

    const asSerie: Serie[] = [
        {
            id: productData[0].name,
            color: "hsl(257, 70%, 50%)",
            data: [...data],
        },
    ]

    return (
        <div className={styles.lineChart}>
            <ResponsiveLine
                data={asSerie}
                margin={{
                    top: 50,
                    right: 90,
                    bottom: 80,
                    left: 60,
                }}
                xScale={{ type: "point" }}
                yScale={{ type: "linear", min: minPrice, max: maxPrice }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 30,
                    legend: "date",
                    legendOffset: 56,
                    legendPosition: "middle",
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "price",
                    legendOffset: -40,
                    legendPosition: "middle",
                }}
                pointSize={12}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                curve={"linear"}
                lineWidth={4}
                colors={["#ADD8E6FF", "#97e3d5", "#aeff00", "#AEFF00FF"]}
            />
        </div>
    )
}
