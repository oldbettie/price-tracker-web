// log the pageview with their URL

declare const window: any;
export const pageview = (url: string) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

// log specific events happening.
// @ts-ignore
export const analyticsEvent = ({ action, params }) => {
    window.gtag('event', action, params)
}
