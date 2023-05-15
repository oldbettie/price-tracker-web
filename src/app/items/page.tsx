'use client'

import {Navigation} from "@/Components/Navigation/Navigation";
import React from "react";
import genericStyles from "@/app/page.module.css";
import {Graph} from "@/Components/Graphs/Graph";

export default function Items(): JSX.Element {
    return (
        <main>
            <div className={genericStyles.backgroundImage}>
                <div className={genericStyles.backgroundFilter}>
                    <div className={genericStyles.container}>
                        <Navigation/>
                        <Graph name="270 awning" />
                    </div>
                </div>
            </div>
        </main>
    );
}