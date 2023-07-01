import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import { Table, TableData } from "@/Components/ui/Table"

export const metadata = {
    title: "Why Pricemates",
    description: "How can Pricemates help you save money.",
}

const table: TableData[] = [
    {
        product: "270 Free-Standing Awning",
        salePrice: "$499",
        regularPrice: "$799",
    },
    {
        product: "30L Drawer Fridge Freezer",
        salePrice: "$349",
        regularPrice: "$599",
    },
    {
        product: "200Ah Lithium LiFePO4 Battery",
        salePrice: "$789",
        regularPrice: "$999",
    },
    {
        product: "Big Daddy Deluxe Double Swag",
        salePrice: "$149",
        regularPrice: "$199",
    },
    {
        product: "40A DCDC Charger",
        salePrice: "$299",
        regularPrice: "$429",
    },
]

export default function Page(): JSX.Element {
    const priceDif = {
        saleTotal: "$2085",
        normalTotal: "$3025",
        totalSaved: "$940",
    }

    return (
        <PageContent>
            <div className="flex flex-col gap-10 lg:w-3/4 m-auto">
                <h2 className="text-center font-bold text-2xl">How Pricemates Can Help You Save Big?</h2>
                <div>
                    <h3 className="font-bold text-xl mb-2">Introduction:</h3>
                    <p>
                        Embarking on a journey across America a few years ago, I was captivated by the #vanlife trend
                        and decided to build my own customized van. My quest for adventure led me to purchase an old
                        e350 decommissioned ambulance, equipped with a powerful 7.3L V8 turbo diesel engine and a
                        spacious aluminum box. As I delved into the van conversion process, I encountered the challenge
                        of finding the best deals for the required parts. Little did I know that my experience would
                        inspire the creation of a revolutionary tool: Pricemates.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">The Van Conversion Journey:</h3>
                    <p>
                        The entire van conversion project demanded around 3-4 months of dedicated work. During this
                        time, I meticulously stripped the van down to its metal skeleton and tackled essential tasks
                        like insulation and wiring. Simultaneously, I scoured the internet for the necessary components,
                        investing weeks in researching various brands and comparing prices. While popular brands caught
                        my attention, I struggled to determine if the prices were truly competitive. Ultimately, I
                        decided to purchase most of the items from Amazon, taking advantage of the affordable prices and
                        convenient next-day delivery in the US.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">The Uncertainty of Savings:</h3>
                    <p>
                        As I wrapped up the van conversion, the accumulated expenses on my credit card reached
                        approximately $13,000 over a span of six weeks. Evaluating the totals, I couldn't help but
                        question whether I had secured good deals or unknowingly overspent. With no reliable way to
                        gauge the value of my purchases, uncertainty loomed over the financial aspect of my project.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">A New Chapter: Setting up a 4WD in Australia:</h3>
                    <p>
                        Two years later, back in Australia and preparing to hit the dirt road, I found myself facing a
                        similar scenario. However, this time, I stumbled upon remarkable discounts of up to 50% on
                        comparable parts. The realization dawned on me that exercising patience and waiting for sales
                        could yield significant savings. Nevertheless, the absence of a tangible reference point
                        hindered my ability to truly quantify these potential benefits.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Introducing Pricemates: Making Savings Tangible:</h3>
                    <p>
                        Imagine a world where you could effortlessly determine the historical prices of the items you
                        desire. Picture having the power to visualize price trends and estimate potential savings. Now,
                        Pricemates brings that vision to life. Let me illustrate with a quick example.
                    </p>
                    <br />
                    <p>
                        Let's compare the prices of the parts I desire, both at regular prices and during a sale. By
                        visualizing the price differences and recognizing the potential for even greater savings through
                        strategic ordering, I managed to save a staggering $940 on just five components.
                    </p>
                </div>
                <Table data={table} />
                <div>
                    <h3 className="font-bold text-xl mb-2">The Impact of Smart Shopping:</h3>
                    <p>
                        Saving nearly <span className="text-lg text-primary">$1,000</span> on a
                        <span className="text-lg text-primary"> $3,000 </span>
                        list of items is undoubtedly a remarkable feat. Considering that I ordered approximately 30
                        parts for the vehicle, with an overall expenditure of around
                        <span className="text-lg text-primary"> $6,000</span>, it becomes evident that uninformed
                        purchases would have cost me an additional 50%, totaling
                        <span className="text-lg text-primary"> $9,000</span>. These astounding savings highlight the
                        significant impact of shopping with Pricemates.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Conclusion:</h3>
                    <p>
                        Until now, the challenge of quantifying potential savings on desired items remained an enigma.
                        Pricemates presents a revolutionary solution, enabling users to unveil the price histories of
                        products and make informed purchasing decisions. With Pricemates, you can unlock remarkable
                        savings and ensure every dollar spent contributes to a more fulfilling and budget-friendly
                        experience. Embrace the power of smart shopping and embark on your next adventure with
                        Pricemates by your side.
                    </p>
                </div>
                <a className="hover:text-backup" href="/">
                    Pricemates.net
                </a>
            </div>
        </PageContent>
    )
}
