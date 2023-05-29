import React, {ReactNode} from "react";
import styles from "./pageContent.module.css";
import {Navigation} from "@/Components/Navigation/Navigation";
import {Analytics} from "@/Components/GA/Analytics";

interface PageProps {
    children: ReactNode
}


export function PageContent({children}: PageProps): JSX.Element {
    return (
        <main>
            <Analytics />

            <div className={styles.backgroundImage}></div>
            <div className={styles.backgroundFilter}></div>
            <Navigation/>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </div>
        </main>
    )
}
