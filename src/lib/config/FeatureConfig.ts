export interface FeatureConfigI {
    ITEMS_FEATURE: boolean
    API_URL: string
}

export const localConfig: FeatureConfigI = {
    API_URL: "http://localhost:8080",
    ITEMS_FEATURE: true,
}

export const productionConfig: FeatureConfigI = {
    API_URL: `${process.env.NEXT_PUBLIC_API_URL}`,
    ITEMS_FEATURE: false,
}
