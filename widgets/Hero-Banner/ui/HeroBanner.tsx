import Link from "next/link";
import image from "next/image";
import Image from "next/image";
import IphoneBanner from '../../../public/iphoneHalf.png'
import Button from "@/shared/ui/Button";
import IphoneBannerMobile from '../../../public/IphoneMobileBanner.png'

export default function HeroBanner() {
    return (
        <div className='flex flex-col lg:flex-row justify-between lg:justify-center items-center w-[100%] h-[769px] lg:h-[632px] bg-[#211C24]'>
            <div className='flex flex-col items-center lg:items-start justify-between w-[343px] lg:w-[724px] h-[256px] text-left'>
                <p className='text-[#FFFFFF] text-2xl pt-[30px] lg:pt-[0px] '>Pro.Beyond</p>
                <p className='text-white text-[72px] lg:text-[96px] text-center font-extralight'>Iphone 14 <span>Pro</span></p>
                <p className='text-[#909090] text-[19px] lg:text-lg pb-[20px] text-center'>Create to change everything for the better. For everyone</p>
                <Link href='/'>
                    <Button text={'Shop Now'} borderColor={'#FFFFFF'} textColor={'#FFFFFF'} width={184}/>
                </Link>
            </div>
            <div className='mt-[100px]'>
                <Image src={IphoneBanner} alt={'iphoneBanner'} className="w-[406px] h-[632px] hidden lg:block"/>
                <Image src={IphoneBannerMobile} alt={'iphoneBannerMobile'} className='lg:hidden'/>
            </div>
        </div>
    )
}