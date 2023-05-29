import NextHead from 'next/head';

interface MetaProps {
    title: string
    content?: string;
}

export function MetaInfo({ title, content }: MetaProps): JSX.Element {
    return (
        <NextHead>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
            <meta name="description" content={content} />
            <meta property="og:description" content={content} key="description" />
        </NextHead>
    );
}


export function MetaRobots({ content = '' }: MetaProps): JSX.Element {
    if (!content.length) return (<></>);
    return (
        <NextHead>
            <meta name="robots" content={content} />
        </NextHead>
    );
}
