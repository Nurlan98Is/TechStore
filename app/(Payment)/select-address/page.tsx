'use client'
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";
import SelectAddressForm from "@/features/address/ui/SelectAddressForm";
import AddAddress from "@/features/address/ui/AddAddress";
export default function SelectAddressPage() {
    const router = useRouter();
    return (
        <div className='py-[48px] px-[16px] xl:px-[160px] xl:mb-[48px] flex flex-col xl:items-end'>
            <div>
                <p className='text-[20px] font-semibold pb-[32px]'>Select Address</p>
                <div className='flex flex-col items-center justify-center'>
                    <SelectAddressForm/>
                    <SelectAddressForm/>
                    <div>
                        <AddAddress/>
                    </div>
                </div>
            </div>

            <div>
                <Button borderColor='black' width={156} onClick={() => router.push('/cart')}>Back</Button>
                <Button className='ml-[24px]' width={156} textColor='white' backgroundColor='black' borderColor='black' onClick={() => router.push('/shipping')}>Next</Button>
            </div>
        </div>
    )
}