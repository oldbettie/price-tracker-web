"use client"

import React, { useEffect, useState } from "react"
import { UserConfig } from "@/lib/config/UserConfig"
import { ValueContainer } from "@/Components/Products/ValueContainer"
import { LineGraph, Product } from "@/Components/Graphs/Graphs"
import axios from "axios"
import { Loader } from "@/Components/Loader/Loader"

export interface ProductContainerPropsI {
    selectedItem: string
    onClick?: () => void
    sampleCount?: number
}

export interface InLastDays {
    inLastDays: number
    averagePrice: number
}

export function ProductContainer({ selectedItem }: ProductContainerPropsI): JSX.Element {
    const [productInfo, setProductInfo] = useState<Product[]>([])
    const [inLastDays, setInLastDays] = useState<InLastDays>({ averagePrice: 0, inLastDays: 0 })
    const lastIndex = productInfo.length - 1

    async function getProductData(id: string) {
        const url = UserConfig.SUPABASE_URL
        const headers = {
            "Content-Type": "application/json",
            "Authorization": UserConfig.SUPABASE_KEY,
        }
        try {
            const res = await axios.post(`${url}/functions/v1/getProductClient`, { productName: id }, { headers })
            return await res.data["productData"]
        } catch (error: any) {
            console.error("There was an error requesting the data!", error)
        }
    }

    function updateProductInfo(data: []) {
        const productArray: Product[] = []
        data.forEach((item: any) => {
            const price = Number(item.price.replace("$", ""))
            let discountPercentage
            let discountAmount
            if (item.product_discount !== null) {
                discountPercentage = Number(item.product_discount.split("%")[0])
                discountAmount = Number(item.product_discount.split("$")[1])
            } else {
                discountPercentage = 0
                discountAmount = null
            }
            const fullPrice = discountAmount ? discountAmount + price : price

            productArray.push({
                name: item.product_name,
                currentPrice: price,
                date: new Date(item.insert_date),
                discountAmount: discountAmount,
                discountPercentage: discountPercentage,
                fullPrice: fullPrice,
                url: item.product_url,
            })
        })

        const millisecondsPerDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
        const daysTotal =
            (new Date().setHours(0, 0, 0, 0) - new Date(productArray[1].date).setHours(0, 0, 0, 0)) / millisecondsPerDay

        setInLastDays({
            inLastDays: daysTotal,
            averagePrice: Math.floor(productArray.reduce((a, b) => a + b.currentPrice, 0) / productArray.length),
        })
        setProductInfo(productArray)
    }

    useEffect(() => {
        getProductData(selectedItem).then((data) => {
            updateProductInfo(data)
        })
    }, [selectedItem])

    return (
        <div className="space-y-3">
            {productInfo.length > 0 ? (
                <>
                    <h1>
                        <a className="hover:text-backup font-bold text-4xl" href={productInfo[0].url}>
                            {productInfo[0].name}
                        </a>
                    </h1>
                    {productInfo[lastIndex].discountAmount && (
                        <h3 className="text-xl text-yellow-400 pt-2">This product is currently on sale!</h3>
                    )}
                    <br />
                    <div className=" grid md:grid-cols-3 md:gap-3 gap-1">
                        <ValueContainer title="Normal Price:" value={`$${productInfo[lastIndex].fullPrice}`} />
                        <ValueContainer title="Current Price:" value={`$${productInfo[lastIndex].currentPrice}`} />

                        {productInfo[lastIndex].discountAmount && (
                            <>
                                <ValueContainer
                                    title="Current Savings:"
                                    value={`$${productInfo[lastIndex].discountAmount}`}
                                />
                                <ValueContainer
                                    title="Percent Saved:"
                                    value={`${productInfo[lastIndex].discountPercentage}%`}
                                />
                            </>
                        )}
                        <ValueContainer
                            title="Last Updated:"
                            value={productInfo[lastIndex].date.toLocaleString("en-AU", {
                                timeZone: "Australia/Sydney",
                                timeZoneName: "short",
                            })}
                        />
                        <ValueContainer title="Days tracked:" value={`${inLastDays.inLastDays}`} />
                        <ValueContainer title="Average Price:" value={`$${inLastDays.averagePrice}`} />
                    </div>
                    <br />
                    <h3 className="text-center md:text-left">Checkout the price history of this product.</h3>
                    <LineGraph productData={productInfo} />
                    <p>
                        Remember to join our mailing list for a chance to win a free subscription{" "}
                        <a href="/contact-us">HERE.</a>
                    </p>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <Loader />
                    <h2 className="text-xl">Loading Product Data</h2>
                </div>
            )}
        </div>
    )
}
