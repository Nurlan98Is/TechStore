import EMVchipCreditCardSvgFn from "@/entities/SvgFn/EMVchipCreditCardSvgFn";
import {MasterCardSvgFn} from "@/entities/SvgFn/EMVchipCreditCardSvgFn";
import {useSession} from "next-auth/react";
export default function CreditCard() {
    const session = useSession();
    return (
        <div className='w-[337px] h-[188px] rounded-[16px] bg-[#000000] p-[23px] flex flex-col justify-between'>
            <div>
                <EMVchipCreditCardSvgFn/>
            </div>
            <p className='text-white text-[18px] font-semibold w-[100%]'>4086 1235 4756 2211</p>
            <div className='flex justify-between'>
                <p className='text-[#AEAEAE]'>{session?.data?.user?.name}</p>
                <MasterCardSvgFn/>
            </div>
        </div>
    )
}