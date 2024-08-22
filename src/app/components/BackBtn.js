"use client"
import { useRouter } from "next/navigation"
 
export default function BackBtn() {
    const router = useRouter();

    return <button className="inline-block" onClick={() => router.back()}>&lt;</button>
}