import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Button } from "@/Components/Button/Button"
import styles from "./hamburger.module.css"
import { UserConfig } from "@/lib/config/UserConfig"

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(true)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            {isOpen ? (
                <div className={`absolute right-3 top-2 hover:text-backup hover:border-backup text-primary`}>
                    <FiMenu size={35} onClick={toggleMenu} className="hover:cursor-pointer" />
                </div>
            ) : (
                <div className="absolute w-1/2 h-auto p-4 pb-8 rounded-xl top-12 right-1/4 z-10 bg-backupOpacity90">
                    <FiX
                        size={45}
                        onClick={toggleMenu}
                        className="hover:text-backup hover:border-backup text-primary hover:cursor-pointer"
                    />
                    <div className={styles.buttonContainer}>
                        <Button content="Home" path={"/"} click={toggleMenu} />
                        {UserConfig.ITEMS_ACTIVE && <Button content="Items" path={"/items"} click={toggleMenu} />}
                        <Button content="About" path={"/about"} click={toggleMenu} />
                        <Button content="Contact Us" path={"/contact-us"} click={toggleMenu} />
                    </div>
                </div>
            )}
        </div>
    )
}
