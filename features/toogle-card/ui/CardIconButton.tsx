import Link from "next/link";
import Image from "next/image";
import CardIcon from '../../../public/cardIcon.svg'

export default function CardIconButton() {
    return (
        <Link href='/card'>
            <Image src={CardIcon} alt='cardIcon' className='w-[32px] h-[32px]'/>
        </Link>
    )
}