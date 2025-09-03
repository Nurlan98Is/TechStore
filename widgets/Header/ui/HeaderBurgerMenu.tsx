import NavLinkMenu from "@/shared/ui/NavLinkMenu";
import IconButtonMenu from "@/shared/ui/IconButtonMenu";
import {HeaderBurgerMenuPropsType} from "@/widgets/Header/modul/types/HeaderTypes";

export default function HeaderBurgerMenu({onClick}: HeaderBurgerMenuPropsType) {
    return (
        <div className='absolute z-30 top-[87px] w-[95%] h-[250px] rounded-b-[8px] bg-white flex flex-col justify-center items-center border-[1px]'>
                <NavLinkMenu/>
                <IconButtonMenu onClick={onClick}/>
        </div>
    )
}