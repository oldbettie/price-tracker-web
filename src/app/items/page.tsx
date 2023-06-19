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
                <h2>
                    All alpha products we currently tracked and listed here. We plan to add thousands in the final
                    product.
                </h2>
                <p>
                    Remember to let us know what you think about our product
                    <Link href={"/contact-us"}> HERE!</Link> for a chance to win a free subscription
                </p>
                <br />
                <ul className="space-y-2 w-15">
                    {routes.map((link, index) => {
                        if (link.name !== "Domin8r X 12,000lb Winch | 5.7hp Motor") {
                            return (
                                <li key={index}>
                                    <Link href={`/items/${link.link}`}>
                                        <h2 className="hover:text-backup w-fit">{link.name}</h2>
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </PageContent>
    )
}
