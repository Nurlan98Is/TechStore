import Image from "next/image";
import AppleVisionPro from '../../public/appleVisionProHalf.png'

export default function PromoCardBlack() {
    return (
        <div className='bw-full h-full bg-[#353535] flex justify-between items-center'>
            <div>
                <Image src={AppleVisionPro} alt={'appleVisionPro'}/>
            </div>
            <div className='w-[160px] mr-[100px]'>
                <p className='text-[#FFFFFF] text-[29px] font-light'>Apple Vision <span className='font-medium'>Pro</span></p>
                <p className='text-[#909090] font-medium text-sm'>Am immersive way to experience entertainment</p>
            </div>
        </div>
    )
}