import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import Link from "next/link"
import { productRoutes } from "@/app/items/[id]/products"
import { notFound } from "next/navigation"

export const metadata = {
    title: "Items - Price Mates",
    description: "find and compare prices on camping and 4wd equipment",
}

export default function Items(): JSX.Element {
    const routes = productRoutes

    if (!routes) notFound()

    return (
        <PageContent>
            <div className="xl:w-3/4 space-y-4 sm:w-full">
                <h2 className="font-bold w-80">All products we currently track</h2>
                <p>
                    If a product you are looking for is not on the list below, please let us know
                    <Link href={"/contact-us"}> here!</Link>
                </p>
                <br />
                <ul className="space-y-2 w-15">
                    {routes.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/items/${link.link}`}>
                                    <h2 className="hover:text-backup w-fit">{link.name}</h2>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </PageContent>
    )
}
