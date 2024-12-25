'use client'

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 2000);
    }, [])
    

    return (
        <>
            <div>{params.slug}</div>
            <button type="button" onClick={() => router.push('/')}>Dashboard</button>
        </>
    )
}