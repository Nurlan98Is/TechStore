import Link from "next/link";
import image from "next/image";
import Image from "next/image";
import IphoneBanner from '../../../public/iphoneHalf.png'
import Button from "@/shared/ui/Button";

export default function HeroBanner() {
    return (
        <div className='flex justify-center items-center w-[100%] h-[632px] bg-[#211C24]'>
            <div className='flet flex-col items-start w-[724px] h-[256px] text-left gap-[24px]'>
                <p className='text-[#FFFFFF] text-2xl '>Pro.Beyond</p>
                <h1 className='text-white text-[96px]'>Iphone 14 <span>Pro</span></h1>
                <p className='text-[#909090] text-lg'>Create to change everything for the better. For everyone</p>
                <Link href='/'>
                    <Button text={'Shop Now'} borderColor={'#FFFFFF'} textColor={'#FFFFFF'}/>
                </Link>
            </div>
            <div>
                <Image src={IphoneBanner} alt={'iphoneBanner'} className="w-[406px] h-[632px]"/>
            </div>
        </div>
    )
}