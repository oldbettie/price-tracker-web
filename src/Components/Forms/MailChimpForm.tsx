import {useState} from "react";
import {toQueryString} from "@/helpers/toQueryString";
import {Button} from "@/Components/Button/Button";
import styles from "@/Components/Forms/Form.module.css";

export const MailchimpForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const getAjaxUrl = (url: any) => url.replace("/post?", "/post-json?");

    async function submitForm(e: any) {
        e.preventDefault()
        const data = {
            EMAIL: email,
            FNAME: name,
        }

        const params = toQueryString(data);
        const url = `${getAjaxUrl(process.env.NEXT_PUBLIC_EMAIL_URL)}&${params}`;

        try {
            // @ts-ignore
            const req= await fetch(url, {
                mode: "no-cors",
            })

            const result = await req.json()
            console.log(result)
        } catch (error) {
            console.log(`${error} you have subscribed but there is an error with the formatting`)
        }
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitForm}>
                <h2 className={styles.formHeader}>Subscribe To Keep Up To Date</h2>
                <div className={styles.inputContent}>
                    <label htmlFor="mce-EMAIL">
                        Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                        placeholder="Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputContent}>
                    <label htmlFor="mce-FNAME">First Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span
                        id="mce-FNAME-HELPERTEXT"
                        className="helper_text"
                    >
                        We don't need your name but it helps us make it more personal.
                    </span>
                </div>

                 {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                >
                    <input
                        onChange={() => {new Error("You are a bot")}}
                        type="text"
                        tabIndex={-1}
                        value=""
                    />
                </div>
                <Button content={"Subscribe"} />
            </form>
        </div>
    );
};