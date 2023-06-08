import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import { MailchimpForm } from "@/Components/Forms/MailChimpForm"

export const metadata = {
    title: "Contact Us - Price Mates",
    description: "find out how you can get in contact with our team",
}

export default function About(): JSX.Element {
    return (
        <PageContent>
            <div className="xl:w-3/4 space-y-4 sm:w-full">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p>
                    You can sign up below for alerts when we go live, if you would like to reach us directly you can
                    <a href="mailto: jj.pricemates@gmail.com"> email</a> us.
                </p>
                <p>
                    If you wish to sign up for early access or just help us build this program you can become a{" "}
                    <a href="https://www.patreon.com/PriceMates"> Patreon</a> member. You dont need to do this we will
                    always offer a free version but it will help us get off the ground and will have access to limited
                    features and offers.
                </p>
            </div>
            <br />
            <MailchimpForm />
        </PageContent>
    )
}
