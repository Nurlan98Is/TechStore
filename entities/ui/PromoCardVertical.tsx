import Image from "next/image";
import MacBook from '../../public/MacBook Pro 14.png'
import Button from "@/shared/ui/Button";

export default function PromoCardVertical() {
    return (
        <div className='w-full h-full bg-[#EDEDED] flex justify-between items-center'>
            <div className='w-[360px] ml-[100px] '>
                <p className='font-extralight text-[64px]'>Macbook <span className='font-medium'>Air</span></p>
                <p className='font-medium text-[16px] text-[#909090]'>
                    The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display
                </p>
                <Button text={'Shop Now'} borderColor={'#000000'} textColor={'#000000'}/>
            </div>
            <div className='w-[300px]'>
                <Image src={MacBook} alt={'macbook'}/>
            </div>
        </div>
    )
}