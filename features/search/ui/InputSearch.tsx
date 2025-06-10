import MagGlass from '../../../public/magGlass.svg'
import Image from "next/image";

export default function InputSearch() {
    return (
        <div className='hidden w-[372px] h-[56px] rounded-lg bg-[#F5F5F5] lg:flex items-center justify-around'>
            <Image src={MagGlass} alt={'magGlass'} className='w-[24px] h-[24px]'/>
            <input className='h-[inherit] w-[80%] hover:outline-none focus:outline-none text-lg' placeholder='Search'/>
        </div>

    )
}