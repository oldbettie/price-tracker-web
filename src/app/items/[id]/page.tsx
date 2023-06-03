import {Graph} from "@/Components/Graphs/Graph";
import {PageContent} from "@/Components/page/PageContent";
import React from "react";
import {productRoutes} from "@/app/items/[id]/products";
import {UserConfig} from "@/lib/config/UserConfig";

export function generateStaticParams() {
    return productRoutes.map((p) => {
        return { id: p.link }
    })
}

/**
 * @description this interface is the required layout for generating static props
 * for a s3 hosted next app
 */
export interface IProps {
    params: {
        id: string;
    };
    searchParams: {};
}

export const metadata = {
    title: "Item - Price Mates",
    description: "track the price of the current selected item."
}

async function getProductData(id: string){
    const url = UserConfig.API_URL
    try {
        const res: Response = await fetch(`${url}/product/${id}/`, {
            next: { revalidate: 60 }
        })
        const data = await res.json();
        if (!res.ok) {
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
        }
        return data
    } catch (error: any) {
        console.error('There was an error!', error);
    }
}

export default async function Page({ params }: IProps){
    const data = await getProductData(params.id)

    return (
        <PageContent>
            <Graph inData={data} />
        </PageContent>
    )
}
