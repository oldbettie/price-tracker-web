import { PageContent } from "@/Components/page/PageContent"
import React from "react"
import { productRoutes } from "@/app/items/[id]/products"
import { ProductContainer } from "@/Components/Products/ProductContainer"

export function generateStaticParams() {
    return productRoutes.map((p) => {
        return { id: p.link }
    })
}

/**
 * @description this interface is the required layout for generating static props
 */
export interface IProps {
    params: {
        id: string
    }
    searchParams: {}
}

export const metadata = {
    title: "Item - Price Mates",
    description: "track the price of the current selected item.",
}

export default async function Page({ params }: IProps) {
    return (
        <PageContent>
            <ProductContainer selectedItem={params.id}/>
        </PageContent>
    )
}
