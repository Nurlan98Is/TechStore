import Image from "next/image";
import AirPodsPro from '../../public/appleAriPodsProHalf.png'

export default function PromoCardWhite() {
    return (
        <div className='w-full h-full bg-[#EDEDED] flex  justify-between items-center'>
            <div>
                <Image src={AirPodsPro} alt={'airPodsPro'} />
            </div>
            <div className='w-[160px] mr-[100px]'>
                <p className='font-light text-[29px]'>Apple AirPods <span className='font-medium text-[29px]'>Pro</span></p>
                <p className='text-[#909090] text-sm font-medium'>Computational audio. Listen, it's powerful</p>
            </div>
        </div>
    )
}