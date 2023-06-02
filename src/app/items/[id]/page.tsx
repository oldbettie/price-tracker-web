import {Graph} from "@/Components/Graphs/Graph";
import {PageContent} from "@/Components/page/PageContent";
import React from "react";

export default function Item({ params }: { params: { id: string } }): JSX.Element {
    return (
        <PageContent>
            <Graph inName={params.id} />
        </PageContent>
    )
}
