import EMVchipCreditCardSvgFn from "@/entities/SvgFn/EMVchipCreditCardSvgFn";
import {MasterCardSvgFn} from "@/entities/SvgFn/EMVchipCreditCardSvgFn";
import {useSession} from "next-auth/react";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {CreditCardTypes} from "@/entities/creditCard/types/CreditCardTypes";
export default function CreditCard({cardNumber, cardHolder}: CreditCardTypes) {
    const session = useSession();
    const state = useSelector((state: RootState) => state.user.creditCards);
    console.log('state in card', state)
    return (
        <div className='w-[337px] h-[188px] rounded-[16px] bg-[#000000] p-[23px] flex flex-col justify-between'>
            <div>
                <EMVchipCreditCardSvgFn/>
            </div>
            <p className='text-white text-[18px] font-semibold w-[100%]'>{cardNumber}</p>
            <div className='flex justify-between'>
                <p className='text-[#AEAEAE]'>{cardHolder}</p>
                <MasterCardSvgFn/>
            </div>
        </div>
    )
}