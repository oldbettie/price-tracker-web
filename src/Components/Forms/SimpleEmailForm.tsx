"use client"

import { useState } from "react"
import { Button } from "@/Components/Button/Button"
import styles from "@/Components/Forms/Form.module.css"
import { UserConfig } from "@/lib/config/UserConfig"
import axios from "axios"

enum SuccessStates {
    inactive = "",
    success = `Thank-you we will email you when we have updates, or it's time to go live!`,
    failed = `Sorry we could not process that request, maybe we already have you on file`,
    exists = `Looks like that user already exists!`,
}

export const SimpleEmailForm = () => {
    const [feedback, setFeedback] = useState("")
    const [email, setEmail] = useState("")
    const [successState, setSuccessState] = useState<SuccessStates>(SuccessStates.inactive)

    async function submitForm(e: any) {
        e.preventDefault()
        const data = {
            email: email,
            data: feedback,
        }
        await addEmail(data)
    }

    async function addEmail(data: { email: string; data: string }) {
        const url = UserConfig.SUPABASE_URL
        const headers = {
            "Content-Type": "application/json",
            "Authorization": UserConfig.SUPABASE_KEY,
        }
        try {
            await axios.post(
                `${url}/functions/v1/saveEmailClient`,
                { userEmail: data.email, userData: data.data },
                { headers }
            )
            return setSuccessState(SuccessStates.success)
        } catch (e: any) {
            console.log(e)
            if (e.response.status === 409) setSuccessState(SuccessStates.exists) // 409 = conflict
            if (e.response.status === 500) setSuccessState(SuccessStates.failed)
            return
        }
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitForm}>
                <div className={styles.inputContent}>
                    <label>
                        Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                        placeholder="Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-1"
                    />
                </div>
                <div className={styles.inputContent}>
                    <label>Feedback</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Feedback"
                        className="p-1 h-20"
                    />
                    <span className="helper_text">Give us your feedback for a chance to win a free subscription!</span>
                </div>

                {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                    <input
                        onChange={() => {
                            new Error("You are a bot")
                        }}
                        type="text"
                        tabIndex={-1}
                        value=""
                    />
                </div>
                <h3 className="m-auto w-fill text-center">{successState}</h3>
                <Button content={"Subscribe"} />
            </form>
        </div>
    )
}
