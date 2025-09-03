'use client'
import CreditCard from "@/entities/creditCard/CreditCard";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setCreditCards} from "@/features/user-access/modal/userSlice";
import Button from "@/shared/ui/Button";
import {useState} from "react";
import {UserCardFormDataTypes} from "@/entities/user/userCardForm/types/UserCardFormDataTypes";
export default function AddUserCardForm () {
    const {register, handleSubmit} = useForm<UserCardFormDataTypes>();
    const dispatch = useDispatch();

    const [isCardHolder, setCardHolder] = useState('')
    const [isCardNumber, setCardNumber] = useState('')

    const onSubmit = (data: UserCardFormDataTypes) => {
        dispatch(setCreditCards({
            cardNumber: data.cardNumber,
            cardHolder: data.cardHolder,
            dateExp: data.dateExp,
            cvv: data.cvv
        }));
    };
    return (
        <div>
            <div className='py-[40px]'>
                <CreditCard cardHolder={isCardHolder} cardNumber={isCardNumber}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[16px]'>
                <input
                    placeholder='CardholderName'
                    className='xl:w-[512px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                    {...register('cardHolder')}
                    onChange={(e) => setCardHolder(e.target.value)}
                />
                <input
                    placeholder='Card Number'
                    className='xl:w-[512px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                    {...register('cardNumber')}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <div className='flex justify-between'>
                    <input
                        placeholder='Exp.Date'
                        className='xl:w-[248px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                        {...register('dateExp')}
                    />
                    <input
                        placeholder='CVV'
                        className='xl:w-[248px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                        {...register('cvv')}
                    />
                </div>
                <Button borderColor={'black'} textColor={'white'} backgroundColor={'black'} type='submit'>Add Card</Button>
            </form>
        </div>
    )
}