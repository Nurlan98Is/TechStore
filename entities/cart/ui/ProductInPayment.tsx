'use client'
import Image from "next/image";
import {ProductInPaymentTypes} from "@/entities/cart/modul/types/ProductInPaymentTypes";
export default function ProductInPayment({name, price, img}: ProductInPaymentTypes) {

    return (
        <div className='lx:w-[464px] h-[72px] bg-[#F6F6F6] rounded-[13px] flex items-center pl-[16px] mb-[16px]'>
            <Image src={img} alt='iphone' width={40} height={40}/>
            <div className='w-[100%] flex justify-around items-center h-[100%]'>
                <p className='text-[16px] w-[80%]'>{name}</p>
                <p className='text-[16px] font-bold'>${price}</p>
            </div>
        </div>
    )
}