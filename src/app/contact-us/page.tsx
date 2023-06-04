import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import { MailchimpForm } from "@/Components/Forms/MailChimpForm"

export const metadata = {
    title: "Contact Us - Price Mates",
    description: "find and compare prices on camping and 4wd equipment",
}

export default function About(): JSX.Element {
    return (
        <PageContent>
            <h2>- Contact Us -</h2>
            <p>
                Once I am closer to releasing the first version of the site I will add a contact form here. Right now I
                am focused on getting the site up and running. You can always join the wait list for updates and early
                trials.
            </p>
            <MailchimpForm />
        </PageContent>
    )
}
