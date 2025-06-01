import Image from "next/image";
import Link from "next/link";
import WishListIcon from '../../public/wishlist.svg'

export default function WishListButton() {
    return (
        <Link href='/wishlist'>
            <Image src={WishListIcon} alt='wishlistIcon' className='w-[32px] h-[32px]'/>
        </Link>
    )
}