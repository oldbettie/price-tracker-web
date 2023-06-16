export interface FeatureConfigI {
    ITEMS_FEATURE: boolean
    API_URL: string
    SUPABASE_URL: string
}

export const localConfig: FeatureConfigI = {
    API_URL: "http://localhost:8080",
    ITEMS_FEATURE: true,
    SUPABASE_URL: "http://localhost:54321"
}

export const productionConfig: FeatureConfigI = {
    API_URL: process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:8080",
    ITEMS_FEATURE: false,
    SUPABASE_URL: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`
}


