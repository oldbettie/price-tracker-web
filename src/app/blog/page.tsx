import React from "react"
import { PageContent } from "@/Components/page/PageContent"

export const metadata = {
    title: "Blog - Pricemates",
    description: "Want to know what we are upto? Check out our blog for the latest developer news.",
}

export type FeatureArticle = {
    title: string
    description: string
    image: string
    link: string
}

export default function Blog(): JSX.Element {
    const currentFeature: FeatureArticle = {
        title: "Why Pricemates?",
        description: "How can Pricemates help you save money.",
        image: "/images/blog.png",
        link: "/blog/articles/why-pricemates",
    }

    return (
        <PageContent>
            <h2 className="text-4xl font-bold flex items-center p-12 rounded-xl bg-backupOpacity90 h-20 w-fit m-auto">Pricemates Blog</h2>
        </PageContent>
    )
}
