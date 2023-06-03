'use client'

import styles from "./Graph.module.css"
import React, {useEffect, useState} from "react";
import {ResponsiveLine, Serie} from "@nivo/line";
import {UserConfig} from "@/lib/config/UserConfig";

export interface GraphProps {
    inData: string
    onClick?: () => void
    sampleCount?: number
}

export interface InLastDays {
    inLastDays: number
    averagePrice: number
}

export function Graph({ inData }: GraphProps): JSX.Element {
    const [productInfo, setProductInfo] = useState<Product[]>([])
    const [inLastDays, setInLastDays] = useState<InLastDays>({averagePrice: 0, inLastDays: 0})
    const lastIndex = productInfo.length - 1

    async function getProductData(id: string) {
        const url = UserConfig.API_URL
        try {
            const res: Response = await fetch(`${url}/product/${id}/`, {
                next: { revalidate: 60 }
            })
            const data = await res.json();
            if (!res.ok) {
                const error = (data && data.message) || res.statusText;
                return Promise.reject(error);
            }
            return data
        } catch (error: any) {
            console.error('There was an error!', error);
        }
    }

    function updateProductInfo(data: []) {
        const productArray: Product[] = []
        data.forEach((item: any) => {
            const price = Number(item.price.replace('$', ''))
            let discountPercentage
            let discountAmount
            if (item.product_discount !== null) {
                discountPercentage = Number(item.product_discount.split('%')[0])
                discountAmount = Number(item.product_discount.split('$')[1])
            } else {
                discountPercentage = 0
                discountAmount = null
            }
            const fullPrice = discountAmount ? discountAmount + price : price

            const date =  new Date(item.insert_date)
            const aestTimeString = date.toLocaleString('en-AU', {
                timeZone: 'Australia/Sydney',
                timeZoneName: 'short',
            });

            productArray.push({
                name: item.product_name,
                currentPrice: price,
                date: aestTimeString,
                discountAmount: discountAmount,
                discountPercentage: discountPercentage,
                fullPrice: fullPrice,
                url: item.product_url,
            })
        })

        setInLastDays({inLastDays: Math.floor(productArray.length / 3), averagePrice: Math.floor(productArray.reduce((a, b) => a + b.currentPrice, 0) / productArray.length)})
        setProductInfo(productArray)
    }

    useEffect(() => {
        getProductData(inData).then((data) => {
            updateProductInfo(data)
        })
    }, [inData])

    return (
        <div className={styles.contentContainer}>
            <div className={styles.productContainer}>
                {productInfo.length > 0 ?
                    <>
                        <div className={styles.productInfo}>
                            <h1 className={styles.productName}><a href={productInfo[0].url}>{productInfo[0].name}</a></h1>
                            <p className={styles.productNormalPrice}>The normal price is - ${productInfo[lastIndex].fullPrice}</p>
                            <p className={styles.productCurrentPrice}>The current price is - ${productInfo[lastIndex].currentPrice}</p>
                            { productInfo[lastIndex].discountAmount &&
                                <p className={styles.productDiscount}>The current discount is - ${productInfo[lastIndex].discountAmount} for a total {productInfo[lastIndex].discountPercentage}% off</p>
                            }
                            <p className={styles.productDate}>This was last checked on - {productInfo[lastIndex].date}</p>
                            <p className={styles.productAverage}>The average price in the last {inLastDays.inLastDays} days is - ${inLastDays.averagePrice}</p>
                            <h3>Checkout the price of this product over the last 2 weeks.</h3>
                            <p>
                                Currently the price is checked 3 times per day future iterations will check regularly for price changes and only track when that happens.
                            </p>

                        </div>
                        <LineGraph productData={productInfo}/>
                    </>
                        : "product loading"}
            </div>
        </div>
    )
}

interface Product {
    name: string
    currentPrice: number,
    date: string,
    discountAmount: number | null,
    discountPercentage?: number,
    fullPrice?: number,
    url?: string,
}

interface lineProps {
    productData: Product[]
}

function LineGraph({ productData }: lineProps): JSX.Element {
    const data = productData.map((product: Product, i: number) => {
        return {
                x: `${product.date.split(',')[0]} - ${i}`,
                y: product.currentPrice,
            }

    })
    const minPrice = (Math.min(...data.map(i => i.y))) - 10
    const maxPrice = Math.max(...data.map(i => i.y)) + 30

    const asSerie: Serie[] = [{
            id: productData[0].name,
            color: "hsl(257, 70%, 50%)",
            data: [...data]
        }]

    return (
        <div className={styles.lineChart}>
            <ResponsiveLine
                data={asSerie}
                margin={{
                    "top": 50,
                    "right": 90,
                    "bottom": 80,
                    "left": 60
                }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: minPrice, max: maxPrice }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 30,
                    legend: 'date',
                    legendOffset: 56,
                    legendPosition: 'middle',
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'price',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={12}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                curve={'linear'}
                lineWidth={4}
                colors={['#ADD8E6FF', '#97e3d5', '#aeff00', '#AEFF00FF']}
            />
        </div>
    )
}
