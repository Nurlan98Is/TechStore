'use client'
import Button from "@/shared/ui/Button";
import {black} from "next/dist/lib/picocolors";
import Image from "next/image";
import ButtonClose from '../../../../public/svg/Buttons/buttonClose.svg'
import {useState, useEffect} from "react";

interface ModalWindowAuthProps {
    isOpen: boolean;
    onClick?: () => void;
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
        <>
            {/* Затемненный оверлей */}
            <div
                className="fixed inset-0 bg-black/30  z-[5]"
            />

            {/* Модальное окно */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white rounded-[8px] z-[10] flex flex-col justify-around px-[16px] py-[16px]">
                <div className='flex justify-between items-center'>
                    <p className='text-lg font-bold'>Sign in or registration</p>
                    <button onClick={onClick} className='hover:cursor-pointer'>
                        <Image src={ButtonClose} alt={'Close'} />
                    </button>
                </div>
                <form className='flex flex-col justify-around items-center'>
                    <input
                        placeholder='Phone'
                        className='w-[70%] h-[40px] bg-gray-200 rounded-[8px] text-[16px] mb-[30px] p-[10px]'
                    />
                    <Button
                        borderColor='black'
                        backgroundColor={'black'}
                        className='text-white text-[18px]'
                        width={'330'}
                    >
                        Sign in
                    </Button>
                </form>
                <button className='hover:cursor-pointer'>Sign in by email</button>
                <p className='text-xs text-gray-500'>
                    By clicking 'Log in', you agree to the Privacy Policy, Terms of Service, and consent to the processing of personal data.
                </p>
            </div>
        </>
    );
}