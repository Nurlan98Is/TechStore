'use client'
import Button from "@/shared/ui/Button";
import { useState } from "react";
import ModalWindowAuth from "@/entities/modalWindow/ModalWindowAuth/ui/ModalWindowAuth";

export default function AuthToolTip({isOpenAuthToolTip}:{ isOpenAuthToolTip: boolean}) {
   if (!isOpenAuthToolTip) {
       return null
   }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=' w-[300px] h-[200px] px-[20px] rounded-lg absolute z-[10] top-[14%] right-[5%] bg-white flex flex-col items-center justify-around'>
             <p className='text-lg font-normal'>
                 Sign in or register to get personalized discounts, make purchases, and earn referral points for your friends.
             </p>
                <Button
                    borderColor='black'
                    backgroundColor='black'
                    textColor='white'
                    width={280}
                    className='text-[18px]'
                    onClick={() => setIsOpen(true)}
                >
                    Sing in or registration
                </Button>
                <ModalWindowAuth isOpen={isOpen}  onClick={()=>{setIsOpen(false)}}/>
        </div>
    )
}