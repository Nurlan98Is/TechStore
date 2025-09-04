'use client'
import Button from "@/shared/ui/Button";
import ProductCardInCart from "@/entities/producInCart/ui/ProductCardInCart";
import {useRouter} from "next/navigation";
import TotalSum from "@/entities/order-summury/ui/TotalSum";
export default function CartPage() {
    const router = useRouter();
    return (
        <div className='flex flex-col xl:flex-row mx-[10px] my-[30px] md:my-[112px] md:mx-[160px] xl:h-[656px]'>

                <div className='xl:w-[536px] mb-[30px] md:mb-[30px] xl:mb-[0px] xl:h-[100%] mr-[40px]'>
                    <p className='font-bold text-[20px] mb-[40px]'>Shopping Cart</p>
                    <ProductCardInCart/>
                </div>

                <div className='border flex flex-col items-center border-[#EDEDED] w-[100%] xl:w-[536px] xl:pb-[56px] xl:px-[64px] xl:h-[100%]'>
                    <form className='w-[100%] md:w-[100%] h-[90%] px-[16px] py-[56px]'>
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
                    <Button text={'Checkout'} className='mb-[10px] md:mb-[30px] xl:mb-[0px]' width={354} textColor={'white'} backgroundColor={'black'} onClick={() => router.push('select-address')}/>
                </div>

        </div>
    )
}