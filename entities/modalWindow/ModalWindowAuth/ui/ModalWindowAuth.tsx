'use client'
import Button from "@/shared/ui/Button";
import {black} from "next/dist/lib/picocolors";
import Image from "next/image";
import ButtonClose from '../../../../public/svg/Buttons/buttonClose.svg'
import {useState, useEffect} from "react";

interface ModalWindowAuthProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function ModalWindowAuth( { isOpen, onClick} : ModalWindowAuthProps ) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    if ( !isOpen  ) return null;
    return (
        <div className='w-[500px] h-[300px] bg-white rounded-[8px] absolute z-[10] top-[100%] right-[200%] flex flex-col justify-around px-[16px] py-[16px] '>
            <div className='flex justify-between items-center'>
                <p className='text-lg font-bold'>Sign in or registration</p>
                <button onClick={ onClick } className='hover:cursor-pointer'>
                    <Image src={ButtonClose} alt={'Close'} />
                </button>
            </div>
                <form className='flex flex-col justify-around items-center'>
                    <input placeholder='Phone' className='w-[70%] h-[40px] bg-gray-200 rounded-[8px] text-[16px] mb-[30px] p-[10px]'/>
                    <Button
                        borderColor='black'
                        backgroundColor={'black'}
                        className=' text-white text-[18px]'
                        width={'330'}
                    >
                        Sign in
                    </Button>
                </form>
            <button className='hover:cursor-pointer'>Sign in by email</button>
            <p>By clicking ‘Log in’, you agree to the Privacy Policy, Terms of Service, and consent to the processing of personal data.</p>
        </div>
    )
}