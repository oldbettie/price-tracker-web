import {localConfig, productionConfig} from "@/lib/config/FeatureConfig";

export const UserConfig = (() => {
    if (process.env.NODE_ENV === "development") {
        return {
            ...localConfig
        }
    } else if (process.env.NODE_ENV === "production") {
        return {
            ...productionConfig
        }
    } else {throw Error}
})()
