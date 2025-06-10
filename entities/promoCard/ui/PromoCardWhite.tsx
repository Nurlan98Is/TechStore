import Image from "next/image";
import AirPodsProHalf from '../../../public/appleAriPodsProHalf.png'
import AirPodsPro from '../../../public/ariPods-pro.png'

export default function PromoCardWhite() {
    return (
        <div className='w-full h-[376px] md:h-full bg-[#EDEDED] flex flex-col md:flex-row justify-between items-center'>
            <div>
                <Image src={AirPodsProHalf} alt={'airPodsPro'} className='hidden md:block' />
                <Image src={AirPodsPro} alt={'airPodsPro'} className='md:hidden w-[192px] h-[200px]' />
            </div>
            <div className='w-[160px] mr-[100px]'>
                <p className='font-light text-[29px]'>Apple AirPods <span className='font-medium text-[29px]'>Pro</span></p>
                <p className='text-[#909090] text-sm font-medium'>Computational audio. Listen, it's powerful</p>
            </div>
        </div>
    )
}