import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import { SimpleEmailForm } from "@/Components/Forms/SimpleEmailForm"
import { Button } from "@/Components/Button/Button"

export const metadata = {
    title: "Price Mates",
    description: "find and compare prices on camping and 4wd equipment",
}

export default function Home() {
    return (
        <PageContent>
            <div className="space-y-4">
                <h2 className="text-center m-5">
                    <span className="font-bold text-xl">Price mates</span> finds the best deals on 4wd parts and camping
                    equipment.
                </h2>
                <p className="max-w-2xl m-auto text-center">
                    With the increased cost of living, more and more people are waiting patiently for a good sale to
                    come along before purchasing the parts they want. This site will allow you to track the price of the
                    equipment you need and notify you when the price drops below a certain threshold.
                </p>
                <br />
                <br />
                <div>
                    <h1 className="text-center text-3xl font-bold text-primary uppercase">
                        We are currently under development.
                    </h1>
                    <p className="text-center text-sm">Everything is subject to change.</p>
                </div>
                <br />
                <h2 className="text-center text-2xl">Checkout the early prototype.</h2>
                <Button content="HERE!" path={"/items"} />
                <br />
                <p className="text-center">Sign up for special early offers.</p>
                <SimpleEmailForm />
            </div>
        </PageContent>
    )
}
