import React from "react"
import { PageContent } from "@/Components/page/PageContent"

export const metadata = {
    title: "Development roadmap",
    description: "Find out what we have in store for the platform.",
}

export default function Page(): JSX.Element {
    return (
        <PageContent>
            <div className="flex flex-col gap-10 lg:w-3/4 m-auto">
                <h2 className="text-center font-bold text-2xl">Development Roadmap</h2>
                <div>
                    <h3 className="font-bold text-xl mb-2">Introduction:</h3>
                    <p>
                        At its core, Pricemates began as a personal project—a quest to uncover the best online deals for
                        the equipment I needed. As I delved deeper into tracking various parts, a realization struck me:
                        there was an untapped market waiting to be served. And so, the journey to develop a
                        customer-facing product took flight.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">The Prototype: Building for Validation:</h3>
                    <p>
                        To validate the viability of my idea, I set three clear goals for the prototype: rapid
                        development, hands-on customer engagement, and early feedback. Ultimately, I needed to ensure
                        that the product would resonate with others.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Data, the Lifeblood of the Platform:</h3>
                    <p>
                        For a platform like Pricemates, data is paramount. Without it, there would be no visualization
                        of price trends. Thus, my initial focus was on collecting sufficient data to showcase the
                        platform's potential. However, I faced the challenge of some products having regular sales,
                        while others saw occasional discounts throughout their product lifetime.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Discovering a Brand: 4WD Supacentre</h3>
                    <p>
                        In my quest to find a brand that ran consistent sales, I came across{" "}
                        <a className="hover:text-backup" href="https://4wdsupacenter.com.au">4wdsupacenter</a> This company, known for its
                        volume-based pricing model, surprised many by offering some of the lowest prices in the industry
                        without compromising on quality. With their regular and predictable sale patterns, I swiftly
                        validated my idea.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">The Platform: A Prototype in Progress:</h3>
                    <p>
                        Prototypes prioritize idea validation over polished aesthetics. While the website may not have a
                        refined look, it aims to perform a single task exceptionally well, showcasing the end goal.
                        After all, revealing all the secrets prematurely would not be advantageous.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Silent Launch: Testing the Waters:</h3>
                    <p>
                        Silent launches provide an opportunity to test a production site without risking user faith in
                        the product. With minimal features but a clear vision, I launched the site with a simple landing
                        page. The objective was to have a complete prototype built within a few weeks.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Validation through Feedback and Metrics:</h3>
                    <p>
                        To obtain valuable user feedback, I initiated light promotion through inexpensive Facebook ads.
                        With a conversion goal of 5%, I surpassed expectations, achieving over 6% within just four days
                        and $70 worth of ads. Although these numbers may seem modest on the vast internet landscape, the
                        goal was validation, not mass exposure. The feedback received from customers during this phase
                        proved invaluable.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">The MVP: A Glimpse into the Future:</h3>
                    <p>
                        In the startup world, an MVP (Minimal Viable Product) represents the core offering for
                        customers. For Pricemates, the MVP encompasses a comprehensive dataset rather than a refined
                        user experience. One crucial feedback point highlighted the need for "more brands and products."
                        Recognizing this before the prototype launch, I was working to expand the product range, adding
                        coverage for around 300 products across three brands, with ongoing internal testing these
                        products will be added soon. This is just the beginning, as we plan to continuously increase the
                        number of brands and products available on the platform.
                    </p>
                    <br />
                    <p>
                        Another key piece of feedback was "comparing parts." While this is a feature I want to include,
                        it is currently outside the scope of the MVP. Personally, I understand the importance of
                        researching all the options on the market before comparing prices. When ordering a 12V fridge,
                        for example, I would assess factors like quality, features, and warranty. Once I have determined
                        the important features, I can then focus on comparing prices. Rest assured, this is a feature
                        that we are committed to providing. We understand that customers value getting good value for
                        their money, not just saving on their wallets.
                    </p>
                    <br />
                    <p>
                        The final recurring feedback that emerged was "price alerts and notifications," which I consider
                        to be of utmost importance to our brand. After all, what good does it do to wait for weeks or
                        months for a great deal only to miss it because you didn't check the price every day? This is
                        where the platform takes a significant turn. While all the current features will always be free,
                        the setting up of price alerts will be a restricted feature. Every user account will receive
                        access to a limited number of alerts, such as two products, free of charge. If users wish to
                        track more products, they will need to subscribe to the paid version, which will come with
                        numerous additional benefits that we aren't ready to disclose just yet.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Setting Timelines: Striving for Continuous Improvement</h3>
                    <p>
                        As a one-person team, I acknowledge that building new features and collecting data takes time.
                        Nonetheless, I aim to release new features to early adopters as they become ready. Although
                        challenging, I am committed to delivering a fully functional MVP before the year concludes—an
                        ambitious yet attainable goal.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-2">Conclusion: Towards an Enhanced Shopping Experience</h3>
                    <p>
                        Over the coming months, Pricemates will undergo significant enhancements. With the addition of
                        300 new products and improved page formats, the platform will offer an optimized browsing
                        experience. While stability is a priority, it's important to embrace change, and user feedback
                        remains a driving force behind Pricemates' evolution. If you stumble upon something you love or
                        dislike, please share your thoughts and contribute to our mission.
                    </p>
                </div>
                <a className="hover:text-backup font-bold text-xl underline w-fit" href="/">
                    Pricemates.net
                </a>
            </div>
        </PageContent>
    )
}
