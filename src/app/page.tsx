import React from "react";
import {PageContent} from "@/Components/page/PageContent";
import Image from "next/image"
import styles from "./home.module.css"
export const metadata = {
    title: "Price Mates",
    description: "find and compare prices on camping and 4wd equipment"
}

export default function Home() {
  return (
    <PageContent>
        <h2>Find the best deals on 4wd parts and camping equipment.</h2>
        <p>
            Price Mates is currently under development. to sign up for early offers sign up for our newsletter <a
            href="/contact-us">here.</a>
        </p>
        <p>
            The goal of this site is to provide a place for people to find the best deals on 4wd parts and camping equipment.
        </p>
        <p>
            With the increased cost of living more and more people are waiting patiently for a good sale to come along before
            purchasing the parts they need. This site will allow you to track the price of the parts you need and notify you
            when the price drops below a certain threshold.
        </p>
        <br/>
        <p>Early PROTOTYPES look something like this.</p>
        <br/>
        <div className={styles.imageContainer}>
            <Image src="/item-prices.png" alt="graph sample photo" fill={true} />
        </div>
        <p>My main focus is to provide easy to understand price history and the most useful data to that goes with it.</p>
        <br/>
        <p>
            Future iterations will go into more detail and you will be able to check out more product info, these things take time,
            it also takes time to collect a large dataset to use.
        </p>
    </PageContent>
  )
}
