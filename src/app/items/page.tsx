'use client'

import React from "react";
import {Graph} from "@/Components/Graphs/Graph";
import {PageContent} from "@/Components/page/PageContent";

export default function Items(): JSX.Element {
    return (
        <PageContent>
            <Graph inName="270_Free-Standing_Awning" />
        </PageContent>
    );
}
