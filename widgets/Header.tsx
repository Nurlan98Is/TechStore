
import InputSearch from "@/features/search/ui/InputSearch";
import NavLinkMenu from "@/shared/ui/NavLinkMenu";
import IconButtonMenu from "@/shared/ui/IconButtonMenu";
import ButtonBurgerSvg from '../public/svg/buttonBurger/buttonBurger.svg'
import Image from "next/image";

export default function Header() {
    return (
        <div className='w-[100wv] h-[88px] border flex items-center justify-between px-[10px] lg:px-[0px] lg:justify-around'>
            <h2>TechStore</h2>
                <InputSearch/>
                <NavLinkMenu/>
                <IconButtonMenu/>
            <button className='block md:hidden'>
                <Image src={ButtonBurgerSvg} alt={'buttonBurger'} />
            </button>
        </div>
    )
}