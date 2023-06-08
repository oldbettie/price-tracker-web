import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import Image from "next/image"
import styles from "./home.module.css"

export const metadata = {
    title: "Price Mates",
    description: "find and compare prices on camping and 4wd equipment",
}

export default function Home() {
    return (
        <PageContent>
            <div className="space-y-4">
                <h2 className="text-center m-5"><span className="font-bold text-xl">Price mates</span> finds the best
                    deals
                    on 4wd parts and camping equipment.
                </h2>
                <h1 className="text-center text-3xl font-bold text-primary uppercase">
                    We are currently under development.
                </h1>
                <p className="text-center">
                    Sign up for early offers via our newsletter <a
                    href="/contact-us">here</a>.
                </p>
                <br/>
                <div className="xl:w-3/4 space-y-4 sm:w-full">
                    <p>
                        The goal of this site is to provide a place for people to find the best deals on 4wd parts and
                        camping equipment.
                    </p>
                    <p>
                        With the increased cost of living more and more people are waiting patiently for a good sale to
                        come along before purchasing the parts they need. This site will allow you to track the price of
                        the parts you need and notify you when the price drops below a certain threshold.
                    </p>
                    <p>
                        My main focus right now is to provide an easy to understand price history chart and the most
                        useful data that goes with it and a link directly to the product.
                    </p>
                    <p>
                        Future iterations will go into more detail and you will be able to check out more product info,
                        these things take time, it also takes time to collect a large dataset to use.
                    </p>
                    <p>Early PROTOTYPES look something like this.</p>
                </div>
                <br/>
                <div className={styles.imageContainer}>
                    <Image src="/item-prices.png" alt="graph sample photo" fill={true}/>
                </div>
            </div>
        </PageContent>
    )
}
