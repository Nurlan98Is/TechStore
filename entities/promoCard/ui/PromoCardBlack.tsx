import Image from "next/image";
import AppleVisionProHalf from '../../../public/appleVisionProHalf.png'
import AppleVisionPro from '../../../public/appleVisionPro.png'

export default function PromoCardBlack() {
    return (
        <div className='bw-full h-full bg-[#353535] flex flex-col md:flex-row justify-around md:justify-between items-center'>
            <div>
                <Image src={AppleVisionProHalf} alt={'appleVisionPro'} className='hidden md:block'/>
                <Image src={AppleVisionPro} alt={'appleVisionPro'} className='md:hidden'/>
            </div>
            <div className='w-[160px] md:mr-[100px]'>
                <p className='text-[#FFFFFF] text-[34px] md:text-[29px] font-light'>Apple Vision <span className='font-medium'>Pro</span></p>
                <p className='text-[#909090] font-medium text-[16px] md:text-sm'>Am immersive way to experience entertainment</p>
            </div>
        </div>
    )
}