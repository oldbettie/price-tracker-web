import React from "react";
import {PageContent} from "@/Components/page/PageContent";

export const metadata = {
    title: "Price Mates",
    description: "find and compare prices on camping and 4wd equipment"
}

export default function Home() {
  return (
    <PageContent>
        <h2>Find the best deals on 4wd parts and camping equipment.</h2>
        <p>
            The goal of this site is to provide a place for people to find the best deals on 4wd parts and camping equipment.
            With the increased cost of living more and more people are waiting patiently for a good sale to come along before
            purchasing the parts they need. This site will allow you to track the price of the parts you need and notify you
            when the price drops below a certain threshold.
        </p>
        <br/>
    </PageContent>
  )
}
