import React from "react";
import {PageContent} from "@/Components/page/PageContent";
import Link from "next/link";
import {productRoutes} from "@/app/items/[id]/products";

export const metadata = {
    title: "Items - Price Mates",
    description: "find and compare prices on camping and 4wd equipment"
}

export default function Items(): JSX.Element {
    debugger
    return (
        <PageContent>
            <h2>All products we currently track</h2>
            <p>If a product you like is not on the list below, please let us know <Link href={"/contact-us"}>here!</Link></p>
            <br/>
            {productRoutes.map((link, index) => {
                return (
                    <div key={index}>
                        <Link href={`/items/${link.link}`}><h2>{link.name}</h2></Link>
                    </div>
                    )}
            )}
        </PageContent>
    );
}
