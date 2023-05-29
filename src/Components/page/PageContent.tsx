import React, {ReactNode} from "react";
import styles from "./pageContent.module.css";
import {Navigation} from "@/Components/Navigation/Navigation";
import {Analytics} from "@/Components/GA/Analytics";
import {MetaDescription, MetaTitle} from "@/Components/page/meta";

interface PageProps {
    title?: string
    description?: string
    children: ReactNode
}

export function PageContent({title, description, children}: PageProps): JSX.Element {
    const name = "Price Mates"
//     do page stuff for analytics

    return (
        <div>
            <Analytics />
            <MetaTitle content={title ? `${title} - ${name}` : name} />
            <MetaDescription content={description} />

            <div className={styles.backgroundImage}></div>
            <div className={styles.backgroundFilter}></div>
            <Navigation/>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </div>
        </div>
    )
}