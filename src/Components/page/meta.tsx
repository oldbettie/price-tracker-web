import Head from 'next/head'

interface MetaProps {
  content?: string
}

export function MetaTitle({content}: MetaProps) {
    return (
        <Head>
            <title>{content}</title>
            <meta property="og:title" content={content} key="title" />
        </Head>
    )
}

export function MetaDescription({content = ''}: MetaProps) {
    if (!content.length) return null
    return (
        <Head>
            <meta name="description" content={content} />
            <meta property="og:description" content={content} key="description" />
        </Head>
    )
}

export function MetaRobots({content = ''}: MetaProps) {
    if (!content.length) return null
    return (
        <Head>
            <meta name="robots" content={content} />
        </Head>
    )
}
