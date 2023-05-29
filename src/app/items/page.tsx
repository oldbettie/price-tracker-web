'use client'

import React from "react";
import genericStyles from "@/app/page.module.css";
import {Graph} from "@/Components/Graphs/Graph";
import {Navigation} from "@/Components/Navigation/Navigation";

export default function Items(): JSX.Element {
    return (
        <main>
            <div className={genericStyles.backgroundImage} />
            <div className={genericStyles.backgroundFilter} />
            <Navigation/>
            <div className={genericStyles.container}>
                <div className={genericStyles.contentContainer}>
                    <Graph inName="270_Free-Standing_Awning" />
                </div>
            </div>
        </main>
    );
}
