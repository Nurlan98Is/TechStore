'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {AddressIcon} from "@/entities/SvgFn/NavigationInPaymentSvgFn";
import {ShippingIcon} from "@/entities/SvgFn/NavigationInPaymentSvgFn";
import {PaymentIcon} from "@/entities/SvgFn/NavigationInPaymentSvgFn";

export default function NavigationInPaymentPages() {
    const pathname = usePathname()

    // Определяем активный шаг на основе текущего пути
    const getActiveStep = () => {
        if (pathname.includes('/select-address')) return 1
        if (pathname.includes('/shipping')) return 2
        if (pathname.includes('/payment')) return 3
        return 1 // По умолчанию
    }

    const activeStep = getActiveStep()

    // Функция для определения цвета в зависимости от активности шага
    const getStepColor = (step: number) =>
        step === activeStep ? 'text-black' : 'text-[#B2B2B2]'


    return (
        <div className='w-full flex justify-around h-[112px] xl:h-[184px]'>
            {/* Шаг 1: Адрес */}
            <div className='flex items-center justify-center'>
                <AddressIcon isActive={activeStep === 1}/>
                <div className={`h-[40px] pl-[8px] ${getStepColor(1)}`}>
                    <p className='text-[14px]'>Step 1</p>
                    <p className='text-[19px]'>Address</p>
                </div>
            </div>

            {/* Шаг 2: Доставка */}
            <div className='flex items-center justify-center'>
                <ShippingIcon isActive={activeStep == 2}/>
                <div className={`h-[40px] pl-[8px] ${getStepColor(2)}`}>
                    <p className='text-[14px]'>Step 2</p>
                    <p className='text-[19px]'>Shipping</p>
                </div>
            </div>

            {/* Шаг 3: Оплата */}
            <div className='flex items-center justify-center'>
                <PaymentIcon isActive={activeStep === 3}/>
                <div className={`h-[40px] pl-[8px] ${getStepColor(3)}`}>
                    <p className='text-[14px]'>Step 3</p>
                    <p className='text-[19px]'>Payment</p>
                </div>
            </div>
        </div>
    )
}