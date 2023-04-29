'use client'

import {Navigation} from "@/Components/Navigation/Navigation";
import React from "react";
import styles from "@/app/page.module.css";

export default function About(): JSX.Element {
    return (
        <main>
            <div className={styles.backgroundImage}>
                <div className={styles.backgroundFilter}>
                    <div className={styles.container}>
                        <Navigation/>
                        <div className={styles.contentContainer}>
                            <h2>- Contact Us -</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
