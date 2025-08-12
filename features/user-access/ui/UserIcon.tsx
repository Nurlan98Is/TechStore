import Link from "next/link";
import {ReactNode} from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface UserIconProps {
    img: string | StaticImport;
}
export default function UserIcon({img} : UserIconProps) {
    return (
        <Link href={'/personal'}>
            <Image src={img} alt={'avatar'} width={40} height={40} className='rounded-[50%]' />
        </Link>
    )
}