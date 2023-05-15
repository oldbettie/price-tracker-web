import styles from "./Graph.module.css"
import {useEffect, useState} from "react";

export interface GraphProps {
    name: string
    onClick?: () => void
    sampleCount?: number
}

export function Graph({ name }: GraphProps): JSX.Element {
    const [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        async function getProductData(){
            try {
                const res: Response = await fetch('http://localhost:8080/item/270_Free-Standing_Awning')
                const data = await res.json();

                if (!res.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || res.statusText;
                    return Promise.reject(error);
                }
                console.log(data)
                setProductInfo(data)
            } catch (error: any) {
                setProductInfo( {errorMessage: error.toString()});
                console.error('There was an error!', error);
            }
        }

        getProductData()
    }, [])

    return (

        <div>
            <h2>{name}</h2>
        </div>
    )
}