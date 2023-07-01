import { FeatureArticle } from "@/app/blog/page"
import React from "react"

export type FeatureCardProps = {
    articleType: string
    article: FeatureArticle
}

export function ArticleCard({ articleType, article }: FeatureCardProps): JSX.Element {
    return (
        <div>
            <h3 className="text-3xl font-bold mt-8 p-3 bg-black w-fit rounded-t-xl">{articleType}</h3>
            <div className="p-3 bg-black rounded-b-xl rounded-tr-xl">
                <div className="border-primary bg-secondary border-2 md:max-h-80 rounded-md p-6 flex flex-col md:flex-row gap-4">
                    <div className="space-y-4 md:w-1/2">
                        <h2 className="text-3xl font-bold text-center md:text-left">{article.title}</h2>
                        <p className="text-md">{article.description}</p>
                        <p className="text-sm">
                            Find out more{" "}
                            <a className="underline hover:cursor-pointer hover:text-backup" href={article.link}>
                                here!
                            </a>
                        </p>
                    </div>
                    <div className="md:w-1/2 h-full flex justify-center">
                        <img className="rounded-xl max-h-60" src={article.image} alt="Why pricemates?" />
                    </div>
                </div>
            </div>
        </div>
    )
}
