'use client'
import Button from "@/shared/ui/Button";
import ProductCardInCart from "@/entities/producInCart/ui/ProductCardInCart";
import {useRouter} from "next/navigation";
import TotalSum from "@/entities/order-summury/ui/TotalSum";
export default function CartPage() {
    const router = useRouter();
    return (
        <div className='flex my-[112px] mx-[160px] xl:h-[656px]'>

                <div className='xl:w-[536px] xl:h-[100%] mr-[40px]'>
                    <p className='font-bold text-[20px] mb-[40px]'>Shopping Cart</p>
                    <ProductCardInCart/>
                </div>

                <div className='border border-[#EDEDED] xl:w-[536px] xl:py-[56px] xl:px-[64px] xl:h-[100%]'>
                    <form className='w-[100%] h-[90%]'>
                        <p className='mb-[40px] font-bold text-[20px]'>Order Summery</p>
                        <div className='mb-[24px]'>
                            <p>Discount code/Promo code</p>
                            <div className='h-[64px] pl-[16px] flex items-center rounded-[7px] border border-[#9F9F9F]'>
                                <input placeholder='Code' className='w-[100%] h-[100%] focus:outline-none'/>
                            </div>
                        </div>
                        <div className='mb-[24px]'>
                            <p>Your bonus card number</p>
                            <div className='h-[64px] px-[16px] flex items-center rounded-[7px] border border-[#9F9F9F]'>
                                <input placeholder='Enter Card Number' className='w-[100%] h-[100%] focus:outline-none'/>
                                <button className='border border-[#000000] p-[8px] rounded-[6px] w-[77px]'>Apply</button>
                            </div>
                        </div>
                        <div>
                            <TotalSum/>
                        </div>
                    </form>
                    <Button text={'Checkout'} width={408} textColor={'white'} backgroundColor={'black'} onClick={() => router.push('select-address')}/>
                </div>

        </div>
    )
}