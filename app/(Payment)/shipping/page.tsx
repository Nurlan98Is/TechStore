'use client'
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";
import SelectShippingMethod from "@/features/address/ui/SelectShippingMethod";
export default function ShippingPage() {
    const router = useRouter();
    return (
        <div className='flex flex-col items-center justify-center pb-[48px]'>
            <div className='mb-[224px]'>
                <p className='pb-[32px] font-semibold text-[20px]'>Shipment Method</p>
                <SelectShippingMethod/>
            </div>

            <div>
                <Button borderColor={'black'} onClick={() => router.push('/cart')}>Back</Button>
                <Button className='ml-[23px]' borderColor='black' backgroundColor={'black'} textColor={'white'} onClick={() => router.push('/payment')}>next</Button>
            </div>
        </div>
    )
}