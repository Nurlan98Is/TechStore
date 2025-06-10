import Image from "next/image";
import PlayStationHalf from '../../../public/PlayStationHalf.png'
import PlayStation from '../../../public/playStaion.png'

export default function PromoCardHorizontal() {
    return (
        <div className='w-full h-full flex flex-col md:flex-row justify-between items-center md:items-end bg-white rounded-lg'>
            <div>
                <Image
                    src={PlayStationHalf}
                    alt={'PlayStation 5'}
                    className='hidden md:block'
                />
                <Image
                    src={PlayStation}
                    alt={'PlayStation 5'}
                    className='md:hidden'
                />
            </div>
            <div className='w-[100%] md:w-[60%] p-8 flex flex-col justify-center bg-white text-center md:text-left'>
                <h2 className='text-[32px] md:text-[49px] font-medium leading-tight mb-4'>PlayStation 5</h2>
                <p className='text-[16px] md:text-[14px] font-medium text-[#909090]'>
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                </p>
            </div>
        </div>
    )
}