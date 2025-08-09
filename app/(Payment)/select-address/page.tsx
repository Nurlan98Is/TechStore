'use client'
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";
export default function SelectAddressPage() {
    const router = useRouter();
    return (
        <div>
            <p>select address</p>
            <Button onClick={() => router.push('/cart')}>Back</Button>
            <Button onClick={() => router.push('/shipping')}>next</Button>
        </div>
    )
}