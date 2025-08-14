'use client'
import Image from "next/image";
import ButtonClose from '../../../../public/svg/Buttons/buttonClose.svg'
import {useState, useEffect} from "react";
import { signIn } from "next-auth/react";
import SignInWithPhone from "@/entities/modalWindow/ModalWindowAuth/ui/SignInWithPhone";
import SignInWithEmail from "@/entities/modalWindow/ModalWindowAuth/ui/SignInWithEmail";
import GoogleLogo from '../../../../public/img/Google__G__logo.svg.png'
import LogoApple from '../../../../public/img/Apple_logo_black.svg.png'
interface ModalWindowAuthProps {
    isOpen: boolean;
    onClick?: () => void;
}

export default function ModalWindowAuth( { isOpen, onClick} : ModalWindowAuthProps ) {
    const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);
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
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-white rounded-[8px] z-[10] flex flex-col justify-around px-[16px] py-[16px]">
                <div className='flex justify-between items-center'>
                    <p className='text-lg font-bold'>Sign in or registration</p>
                    <button onClick={onClick} className='hover:cursor-pointer'>
                        <Image src={ButtonClose} alt={'Close'} />
                    </button>
                </div>
                {isSignInWithEmail ?
                    <SignInWithEmail signInByPhone={() => setIsSignInWithEmail(false)} />
                    :
                    <SignInWithPhone signInByEmail={() => setIsSignInWithEmail(true)} />
                }
                <div>
                    <button
                        className='hover:cursor-pointer' onClick={() => signIn('google')}
                    >
                        <Image src={GoogleLogo} alt={'google'} width={50} height={40}/>
                    </button>
                    <button
                        className='hover:cursor-pointer' onClick={() => signIn('apple')}
                    >
                        <Image src={LogoApple} alt={'apple'} width={50} height={40}/>
                    </button>
                </div>
                <p className='text-xs text-gray-500'>
                    By clicking 'Log in', you agree to the Privacy Policy, Terms of Service, and consent to the processing of personal data.
                </p>
            </div>
        </>
    );
}