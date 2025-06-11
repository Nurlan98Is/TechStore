import Image from "next/image";
import ButtonArrowRightIcon from '@/public/svg/Buttons/buttonRightArrow.svg'

export default function ButtonArrowRight() {
    return (
        <button className='hover:cursor-pointer'>
            <Image src={ButtonArrowRightIcon} alt={'buttonArrowRight'} />
        </button>
    )
}