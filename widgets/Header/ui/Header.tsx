'use client'
import InputSearch from "@/features/search/ui/InputSearch";
import NavLinkMenu from "@/shared/ui/NavLinkMenu";
import IconButtonMenu from "@/shared/ui/IconButtonMenu";
import ButtonBurgerSvg from '../../../public/svg/Buttons/buttonBurger.svg'
import Image from "next/image";
import AuthToolTip from "@/entities/user/auth/AuthToolTip";
import {useState} from "react";
import {useSession} from "next-auth/react";
import HeaderBurgerMenu from "@/widgets/Header/ui/HeaderBurgerMenu";
import ButtonCloseSvg from '../../../public/svg/Buttons/buttonClose.svg'

export default function Header() {
    const [isOpenAuthToolTip, setIsOpenAuthToolTip] = useState<boolean>(false);
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);
    const handleOpenAuthToolTip = () => setIsOpenAuthToolTip(!isOpenAuthToolTip);
    const session = useSession();
    console.log('session',session);
    return (
        <div className='w-[100wv] h-[88px] border flex items-center justify-between px-[10px] lg:px-[0px] lg:justify-around'>
            <h2>TechStore</h2>
            <InputSearch/>
            <div className='hidden md:flex justify-between w-[50%]'>
                <NavLinkMenu/>
                <IconButtonMenu onClick={handleOpenAuthToolTip}/>
            </div>
            {isOpenBurgerMenu
                ?
                <button className='block md:hidden' onClick={() => setIsOpenBurgerMenu(false)}>
                    <Image src={ButtonCloseSvg} alt={'buttonBurger'} width={40}/>
                </button>
                :
                <button className='block md:hidden' onClick={() => setIsOpenBurgerMenu(true)}>
                    <Image src={ButtonBurgerSvg} alt={'buttonBurger'}  />
                </button>

            }
            {isOpenBurgerMenu && (<HeaderBurgerMenu onClick={handleOpenAuthToolTip}/>)}
            <AuthToolTip isOpenAuthToolTip={isOpenAuthToolTip}/>
        </div>
    )
}