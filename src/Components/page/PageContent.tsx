import React, {ReactNode} from "react";
import styles from "@/app/page.module.css";
import {Navigation} from "@/Components/Navigation/Navigation";
import {Analytics} from "@/Components/GA/Analytics";

interface PageProps {
    title?: string
    description?: string
    children: ReactNode
}

export function PageContent({title, description, children}: PageProps): JSX.Element {
    const name = "Price Mates"
//     do page stuff for analytics

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