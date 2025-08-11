import EMVchipCreditCardSvgFn from "@/entities/SvgFn/EMVchipCreditCardSvgFn";
import {MasterCardSvgFn} from "@/entities/SvgFn/EMVchipCreditCardSvgFn";
export default function CreditCard() {
    return (
        <div className='w-[337px] h-[188px] rounded-[16px] bg-[#000000] p-[23px] flex flex-col justify-between'>
            <div>
                <EMVchipCreditCardSvgFn/>
            </div>
            <p className='text-white text-[18px] font-semibold w-[100%]'>4086 1235 4756 2211</p>
            <div className='flex justify-between'>
                <p className='text-[#AEAEAE]'>Iskakov Nurlan</p>
                <MasterCardSvgFn/>
            </div>
        </div>
    )
}