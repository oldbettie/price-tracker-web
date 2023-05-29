import React from "react";
import styles from './Navigation.module.css'
import {Button} from "@/Components/Button/Button";
import Image from "next/image";

export function Navigation(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/priceMates.png" alt="Price Mates logo" width={220} height={60} className={styles.logo}/>
            </div>
            <div className={styles.buttonContainer}>
                <Button content="About" path={"/about"} />
                <Button content="Contact Us" path={"/contact-us"}/>
                <Button content="Home" path={"/"} />
            </div>
        </div>
    )
}
