"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"

export interface valueProps {
    title: string
    value?: string
    description?: string
}

export const ValueContainer = ({ title, value, description }: valueProps): JSX.Element => {
    return (
        <Card className="border-2 border-primary bg-secondary bg-opacity-60">
            <CardHeader>
                <CardTitle className="text-primary">{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <CardTitle className="text-primary">{value}</CardTitle>
            </CardContent>
        </Card>
    )
}
