import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Button } from "@/Components/Button/Button"
import styles from "./hamburger.module.css"
import { UserConfig } from "@/lib/config/UserConfig"

export const HamburgerMenu = () => {
    const [ isOpen, setIsOpen ] = useState(true)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            {isOpen ? (
                <div className={`${styles.hamburgerIcon} hover:text-backup hover:border-backup text-primary`}>
                    <FiMenu size={35} onClick={toggleMenu}/>
                </div>
            ) : (
                <div className={styles.hamburgerContent}>
                    <FiX size={45} onClick={toggleMenu} className="hover:text-backup hover:border-backup text-primary"/>
                    <div className={styles.buttonContainer}>
                        <Button content="Home" path={"/"} click={toggleMenu}/>
                        {UserConfig.ITEMS_FEATURE && <Button content="Items" path={"/items"} click={toggleMenu}/>}
                        <Button content="About" path={"/about"} click={toggleMenu}/>
                        <Button content="Contact Us" path={"/contact-us"} click={toggleMenu}/>
                    </div>
                </div>
            )}
        </div>
    )
}
