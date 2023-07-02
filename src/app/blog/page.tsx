import React from "react"
import { PageContent } from "@/Components/page/PageContent"
import { ArticleCard } from "@/Components/ui/ArticleCard"
import { ArticleList } from "@/Components/ui/ArticleList"
import { articles } from "@/app/blog/articles/articles"

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
        description: "With the increased cost of living, lets learn how Pricemates can help you save money today!",
        image: "/muddy-cruiser.jpg",
        link: "/blog/articles/how-pricemates-can-help-you-save-big",
    }

    const latestArticle: FeatureArticle = {
        title: "Pricemates Development Roadmap",
        description: "Here is what we have in store for the platform.",
        image: "/priceMates.png",
        link: "/blog/articles/development-roadmap",
    }

    return (
        <PageContent>
            <h2 className="text-4xl font-bold  flex items-center p-12 rounded-xl bg-backupOpacity90 h-20 w-fit m-auto">
                Pricemates Blog
            </h2>
            <div className="flex gap-5 flex-col lg:flex-row">
                <div className="w-fit">
                    <ArticleCard article={currentFeature} articleType="Featured" />
                    <ArticleCard article={latestArticle} articleType="Latest" />
                </div>
                <ArticleList articleList={articles} />
            </div>
        </PageContent>
    )
}
