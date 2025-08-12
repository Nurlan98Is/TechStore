import WishListButton from "@/features/open-wishlist/WishListButton";
import CartIconButton from "@/features/toogle-card/ui/CartIconButton";
import UserAccess from "@/features/user-access/ui/UserAccess";

export default function IconButtonMenu({onClick}: {onClick: () => void}) {
    return (
        <div className='hidden w-[144px] lg:flex justify-around items-center'>
            <WishListButton/>
            <CartIconButton/>
            <UserAccess onClick={onClick}/>
        </div>
    )
}