import Link from "next/link";
import Image from "next/image";
import UserIcon from '../../../public/userIcon.svg'
import AuthToolTip from "@/entities/user/auth/AuthToolTip";

export default function UserAccess() {
    const isAuth = false
    return (
        <>
           <Image
               src={UserIcon}
               alt='userIcon'
               width={24}
               height={24}
               className='hover:cursor-pointer'
           />
        </>
    )
        }
