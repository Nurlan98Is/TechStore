import Link from "next/link";
import Image from "next/image";
import UserIcon from '../../../public/userIcon.svg'

export default function UserAccess() {
    return (
        <Link href={'/user'}>
            <Image src={UserIcon} alt='userIcon' className='w-[32px] h-[32px]'/>
        </Link>
    )
}