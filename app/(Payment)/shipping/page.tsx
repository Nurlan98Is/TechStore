'use client'
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";
import SelectShippingMethod from "@/features/address/ui/SelectShippingMethod";
export default function ShippingPage() {
    const router = useRouter();
    return (
        <div className='flex flex-col items-center justify-center pb-[48px] md:mt-[0px]'>
            <div className='mb-[30px] xl:mb-[224px]'>
                <p className='pb-[32px] font-semibold text-[20px]'>Shipment Method</p>
                <SelectShippingMethod/>
            </div>

            <div className='flex flex-col items-center justify-center md:flex-row gap-[10px]'>
                <Button borderColor={'black'} width={207} onClick={() => router.push('/cart')}>Back</Button>
                <Button className='lg:ml-[23px]' width={207} borderColor='black' backgroundColor={'black'} textColor={'white'} onClick={() => router.push('/payment')}>next</Button>
            </div>
        </div>
    )
}