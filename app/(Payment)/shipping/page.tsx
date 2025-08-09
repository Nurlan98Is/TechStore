'use client'
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";
export default function ShippingPage() {
    const router = useRouter();
    return (
        <div>
            <p>shopping</p>
            <Button onClick={() => router.push('/cart')}>Back</Button>
            <Button onClick={() => router.push('/payment')}>next</Button>
        </div>
    )
}