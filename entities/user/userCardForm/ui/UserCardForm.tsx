import CreditCard from "@/entities/creditCard/CreditCard";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setCreditCards} from "@/features/user-access/modal/userSlice";
import Button from "@/shared/ui/Button";
export default function UserCardForm () {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setCreditCards({
            cardNumber: data.cardNumber,
            cardHolder: data.cardholderName,
            dateExp: data.cardDateExp,
            cvv: data.cvv
        }));
    };
    return (
        <div>
            <div className='py-[40px]'>
                <CreditCard/>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[16px]'>
                    <input
                        placeholder='CardholderName'
                        className='xl:w-[512px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                        {...register('cardholderName')}
                    />
                    <input
                        placeholder='Card Number'
                        className='xl:w-[512px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                        {...register('cardNumber')}
                    />
                    <div className='flex justify-between'>
                        <input
                            placeholder='Exp.Date'
                            className='xl:w-[248px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                            {...register('cardDateExp')}
                        />
                        <input
                            placeholder='CVV'
                            className='xl:w-[248px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'
                            {...register('cvv')}
                        />
                    </div>
                    <Button borderColor={'black'} textColor={'white'} backgroundColor={'black'} type='submit'>Update</Button>
                </form>
            </div>
    )
}