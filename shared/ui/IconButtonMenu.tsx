import WishListButton from "@/features/open-wishlist/WishListButton";
import CartIconButton from "@/features/toogle-card/ui/CartIconButton";
import UserAccess from "@/features/user-access/ui/UserAccess";
import UserIcon from "@/features/user-access/ui/UserIcon";
import {useSession} from "next-auth/react";
import defaultAvatar from '@/public/img/defaultAvatart.jpg'
import Image from "next/image";

export default function IconButtonMenu({onClick}: {onClick: () => void}) {
    const {status, data} = useSession();
    console.log(data)
    return (
        <div className='w-[100%] md:w-[144px] mt-[30px] md:mt-[0px] flex justify-around items-center'>
            <WishListButton/>
            <CartIconButton/>
            {status === "authenticated" ?
                <UserIcon img={data?.user?.image || defaultAvatar}/>
                :
                <UserAccess onClick={onClick}/>
            }
        </div>
    )
}