'use client'

import styles from './page.module.css'
import {Navigation} from "@/Components/Navigation/Navigation";
import React from "react";
import {MailchimpForm} from "@/Components/Forms/MailChimpForm";

export default function Home() {
  return (
    <main>
        <div className={styles.backgroundImage}></div>
        <div className={styles.backgroundFilter}></div>
        <Navigation/>
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h2>Find the best deals on 4wd parts and camping equipment.</h2>
                <p>
                    The goal of this site is to provide a place for people to find the best deals on 4wd parts and camping equipment.
                    With the increased cost of living more and more people are waiting patiently for a good sale to come along before
                    purchasing the parts they need. This site will allow you to track the price of the parts you need and notify you
                    when the price drops below a certain threshold.
                </p>
                <br/>
                <p>We are currently building this platform, join the wait list and get access to exclusive early sign up offers.</p>
                <MailchimpForm />
            </div>
        </div>
    </main>
  )
}
