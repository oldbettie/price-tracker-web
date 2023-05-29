import React from "react";
import {Graph} from "@/Components/Graphs/Graph";
import {PageContent} from "@/Components/page/PageContent";

export const metadata = {
    title: "Items - Price Mates",
    description: "find and compare prices on camping and 4wd equipment"
}

export default function Items(): JSX.Element {
    return (
        <PageContent>
            <Graph inName="270_Free-Standing_Awning" />
        </PageContent>
    );
}
