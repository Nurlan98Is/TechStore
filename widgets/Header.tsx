
import InputSearch from "@/features/search/ui/InputSearch";
import NavLinkMenu from "@/shared/ui/NavLinkMenu";
import CardIconButton from "@/features/toogle-card/ui/CardIconButton";

export default function Header() {
    return (
        <div className='w-[100wv] h-[88px] border border-black flex items-center justify-around'>
            <h2>TechStore</h2>
            <InputSearch/>
            <NavLinkMenu/>
            <CardIconButton/>
        </div>
    )
}