import React from "react";
import styles from './Navigation.module.css'
import {Button} from "@/Components/Button/Button";

export function Navigation(): JSX.Element {
    return (
        <div className={styles.container}>
            <h1>Price Mates</h1>
            <div className={styles.buttonContainer}>
                <Button content="About" path={"/about"} />
                <Button content="Contact Us" path={"/contact-us"}/>
                <Button content="Home" path={"/"} />
            </div>
        </div>
    )
}
