import Image from "next/image";
import PlayStation from '../../public/PlayStationHalf.png'

export default function PromoCardHorizontal() {
    return (
        <div className='w-full h-full flex justify-between items-end bg-white rounded-lg'>
            <div>
                <Image
                    src={PlayStation}
                    alt={'PlayStation 5'}
                />
            </div>
            <div className='w-[60%] p-8 flex flex-col justify-center relative z-10 bg-white'>
                <h2 className='text-[49px] font-medium leading-tight mb-4'>PlayStation 5</h2>
                <p className='text-[14px] font-medium text-[#909090]'>
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                </p>
            </div>
        </div>
    )
}