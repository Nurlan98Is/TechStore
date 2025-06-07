import Image from "next/image";
import ButtonArrowLeftIcon from '../../public/svg/ButtonArrows/buttonLeftArrow.svg'

export default function ButtonArrowLeft() {
    return (
        <button>
            <Image src={ButtonArrowLeftIcon} alt={'buttonArrowLeft'} />
        </button>
    )
}