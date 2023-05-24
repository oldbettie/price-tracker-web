import styles from "./Graph.module.css"
import {useEffect, useState} from "react";

export interface GraphProps {
    name: string
    onClick?: () => void
    sampleCount?: number
}

export function Graph({ name }: GraphProps): JSX.Element {
    const [productInfo, setProductInfo] = useState<Product[]>([])
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getProductData(){
            try {
                const res: Response = await fetch('http://localhost:8080/item/270_Free-Standing_Awning')
                const data = await res.json();
                const productArray: Product[] = []
                data.forEach((item: any) => {
                    productArray.push({
                        name: item.product_name,
                        price: item.price,
                        date: item.insert_date,
                        discount: item.product_discount
                    })
                })
                if (!res.ok) {
                    const error = (data && data.message) || res.statusText;
                    return Promise.reject(error);
                }
                console.log(data)
                setProductInfo(productArray)
            } catch (error: any) {
                setError(error.message)
                console.error('There was an error!', error);
            }
        }

        getProductData()
    }, [])

    return (

        <div>
            <h2>{name}</h2>
            { productInfo.map((product: Product, i) => {
                return (
                    <div key={i}>
                        <p>{product.price}</p>
                        <p>{product.discount}</p>
                        <p>{product.date}</p>
                    </div>
                )
            }) }
        </div>
    )
}

interface Product {
    name: string
    price: number,
    date: string,
    discount?: string,
}