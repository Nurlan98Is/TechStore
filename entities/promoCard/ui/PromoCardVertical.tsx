import Image from "next/image";
import MacBookHalf from '../../../public/MacBook Pro 14.png'
import MacBook from '../../../public/MacBook Pro 14 full.png'
import Button from "@/shared/ui/Button";

export default function PromoCardVertical() {
    return (
        <div className='w-full h-full bg-[#EDEDED] flex flex-col md:flex-row justify-between items-center'>
            <div className='block md:hidden'>
                <Image src={MacBook} alt='macbook'/>
            </div>
            <div className='w-[360px] h-[192px] md:ml-[100px] text-center md:text-left '>
                <p className='font-extralight text-[32px] md:text-[64px]'>Macbook <span className='font-medium'>Air</span></p>
                <p className='font-medium text-[16px] text-[#909090] pb-[20px]'>
                    The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display
                </p>
                <Button text={'Shop Now'} borderColor={'#000000'} textColor={'#000000'} width={'343'}/>
            </div>
            <div className='w-[300px] hidden md:block'>
                <Image src={MacBookHalf} alt={'macbook'}/>
            </div>
        </div>
    )
}