import {Graph} from "@/Components/Graphs/Graph";
import {PageContent} from "@/Components/page/PageContent";
import React from "react";
import {UserConfig} from "@/lib/config/UserConfig";

{/* @ts-expect-error Async Server Component */}
export default async function Item({ params }: { params: { id: string } }): JSX.Element {
    const data = await getProductData()
    async function getProductData(){
        const url = UserConfig.API_URL
        try {
            const res: Response = await fetch(`${url}/product/${params.id}/`)
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

    return (
        <PageContent>
            <Graph inData={data} />
        </PageContent>
    )
}
