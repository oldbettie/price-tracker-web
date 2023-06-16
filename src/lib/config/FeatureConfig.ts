export interface FeatureConfigI {
    ITEMS_ACTIVE: boolean // allows for easy show hide of items button if we want it active
    API_URL: string
    SUPABASE_URL: string | undefined
    SUPABASE_KEY: string | undefined
}

export const localConfig: FeatureConfigI = {
    API_URL: "http://localhost:8080",
    ITEMS_ACTIVE: true,
    SUPABASE_URL: "http://localhost:54321",
    SUPABASE_KEY: process.env.NEXT_PUBLIC_LOCAL_SUPABASE_TOKEN,
}

export const productionConfig: FeatureConfigI = {
    API_URL: process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:8080",
    ITEMS_ACTIVE: true,
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_TOKEN,
}
