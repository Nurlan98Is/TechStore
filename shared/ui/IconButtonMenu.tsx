import WishListButton from "@/features/open-wishlist/WishListButton";
import CardIconButton from "@/features/toogle-card/ui/CardIconButton";
import UserAccess from "@/features/user-access/ui/UserAccess";

export default function IconButtonMenu() {
    return (
        <div className='w-[144px] flex justify-around items-center'>
            <WishListButton/>
            <CardIconButton/>
            <UserAccess/>
        </div>
    )
}