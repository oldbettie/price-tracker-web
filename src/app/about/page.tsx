import React from "react"
import { PageContent } from "@/Components/page/PageContent"

export const metadata = {
    title: "About - Pricemates",
    description: "find out more about why we wanted to save you money on camping equipment and parts",
}

export default function About(): JSX.Element {
    return (
        <PageContent>
            <div className="xl:w-3/4 space-y-4 sm:w-full">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p>
                    I started to realize with the increased cost of living, there were more and more people online
                    looking for a good deal on 4wd parts and camping equipment. While looking for parts myself I used to
                    have two thought patterns. First, it was to look for the parts second hand at the best price and not
                    worry about a warranty. The second was to buy brand new equipment and pay a premium for the warranty
                    along with the peace of mind.
                </p>
                <p>
                    I found second hand parts are not as cheap as they once were and sometimes are the same or quite
                    often marked higher than brand new prices (dang covid tax). So, I started to wait patiently for a
                    good sale to come along before making my desired purchase.
                </p>
                <p>
                    This site allows you to track the price of the equipment you need and will notify you when the price
                    drops below a certain threshold. This will allow you to get the best deals on the parts you need and
                    want, while taking the guesswork out for you on when the best time to buy is. Once I have collected
                    enough data for a product I am able to predict when the perfect time to buy is and notify you when
                    the price is at its lowest.
                </p>
                <br />
                <hr />
                <br />
                <h2 className="text-3xl">Launch Roadmap</h2>

                <div className="pl-3">
                    <h3 className="font-bold text-lg">Alpha launch ( 20th june )</h3>
                    <ul className="ml-3">
                        <li>- Track a handful of highly requested parts showing simple price charts.</li>
                        <li>- Allow users to sign up for early offers and discounts.</li>
                    </ul>
                </div>

                <div className="pl-3">
                    <h3 className="font-bold text-lg">V0 MVP ( ETA Dec/23 )</h3>
                    <ul className="ml-3">
                        <li>- Track a large range of products over a larger time frame.</li>
                        <li>- User specific profiles with product alerts and prediction integration.</li>
                    </ul>
                </div>
                <div className="pl-3">
                    <h3 className="font-bold text-lg">V1 ( TBD )</h3>
                    <ul className="ml-3">
                        <li>- Track thousands of products across many industries and brands.</li>
                        <li>- Integrate price reviews compare the price others think are a good deal.</li>
                        <li>- Full integration will realtime ai price predictions.</li>
                    </ul>
                </div>
            </div>
        </PageContent>
    )
}
