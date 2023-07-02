import React from "react"
import { ArticleList } from "@/app/blog/articles/articles"

type ListProps = {
    articleList: ArticleList[]
}

export function ArticleList({ articleList }: ListProps): JSX.Element {
    return (
        <div className="lg:w-2/5">
            <h3 className="text-3xl font-bold mt-8 p-3 bg-black w-fit rounded-t-xl">All Articles</h3>
            <div className="p-3 bg-black rounded-b-xl rounded-tr-xl">
                <ul className="bg-secondary flex flex-col gap-3 p-1">
                    {articleList.map((e) => {
                        return (
                            <li key={e.title}>
                                <a className="hover:text-backup" href={e.url}>
                                    {e.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
