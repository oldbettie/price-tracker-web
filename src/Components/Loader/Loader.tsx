"use client"

import styles from "./Loader.module.css"
export function Loader(): JSX.Element {
    return (
        <div className={styles.loader}>
            <div className={`${styles.duo} ${styles.duo1}`}>
                <div className={`${styles.dot} ${styles.dotA}`}></div>
                <div className={`${styles.dot} ${styles.dotB}`}></div>
            </div>
            <div className={`${styles.duo} ${styles.duo2}`}>
                <div className={`${styles.dot} ${styles.dotA}`}></div>
                <div className={`${styles.dot} ${styles.dotB}`}></div>
            </div>
        </div>
    )
}
