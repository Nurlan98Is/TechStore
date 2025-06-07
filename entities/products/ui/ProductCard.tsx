import Image, { StaticImageData } from "next/image";
import Button from "@/shared/ui/Button";
import IphoneImage from '../../../public/svg/productCard/newArrival/iphone 14 pro card.png'
import LikeIcon from '../../../public/svg/likes/like.svg'

interface ProductCardProps {
    imageProduct: StaticImageData;
    imageAlt: string;
    nameProduct: string;
    price: number;
}

export default function ProductCard( {imageProduct, imageAlt, nameProduct, price} : ProductCardProps ) {
    return (
        <div className='h-[432px] w-[268px] bg-[#F6F6F6] rounded-[9px] flex flex-col items-center justify-around'>
            <div className='w-[90%] flex items-center justify-end'>
                <button className='hover:cursor-pointer'>
                    <Image src={LikeIcon} alt={'likeIcon'}/>
                </button>
            </div>
            <div>
                <Image src={imageProduct} alt={imageAlt}/>
            </div>
            <div className='text-center flex flex-col items-center justify-around'>
                <p className='font-medium text-[16px]'>{nameProduct}</p>
                <p className='font-semibold text-2xl'>${price}</p>
            </div>
            <Button text={'Buy Now'} borderColor={'black'} backgroundColor={'black'} textColor={'white'}/>
        </div>
    )
}