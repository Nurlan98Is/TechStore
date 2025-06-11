import Image from "next/image";
import ButtonArrowLeftIcon from '@/public/svg/Buttons/buttonLeftArrow.svg'

export default function ButtonArrowLeft() {
    return (
        <button className='hover:cursor-pointer'>
            <Image src={ButtonArrowLeftIcon} alt={'buttonArrowLeft'} />
        </button>
    )
}