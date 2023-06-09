"use client"

import React from "react"
import styles from "./Navigation.module.css"
import { Button } from "@/Components/Button/Button"
import Image from "next/image"
import { UserConfig } from "@/lib/config/UserConfig"
import { UseMediaQuery } from "@/Components/hooks/useMediaQuery"
import { HamburgerMenu } from "@/Components/Navigation/Hamburger"

const getIsDesktop = (): boolean => {
    return UseMediaQuery(650)
}

export const Navigation: React.FC = () => {
    const isDesktop = getIsDesktop()

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <a href="/">
                        <Image src="/priceMates.png" alt="Pricemates logo" fill={true} />
                    </a>
                </div>
                {isDesktop ? (
                    <div className={styles.buttonContainer}>
                        {UserConfig.ITEMS_ACTIVE && <Button content="Items" path={"/items"} />}
                        <Button content="About" path={"/about"} />
                        <Button content="Contact Us" path={"/contact-us"} />
                        <Button content="Home" path={"/"} />
                    </div>
                ) : (
                    <div>
                        <HamburgerMenu />
                    </div>
                )}
            </div>
        </div>
    )
}
