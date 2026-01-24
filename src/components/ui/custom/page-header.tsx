"use client"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "../button"

const PageHeader = ({title, description, length, showBack}: {title: string, description: string, length?: number, showBack?: boolean}) => {
    const navigate = useNavigate()
    return (
        <div className="grid gap-1">
            <div className="flex items-center gap-4">
                {showBack && (
                    <Button 
                        variant="outline" 
                        size="icon-sm" 
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft />
                    </Button>
                )}
                <h1 className="text-2xl font-bold">{title}</h1>
                {length && <Badge className="rounded-full gradient-button">{length}</Badge>}
            </div>
            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
    )
}

export default PageHeader