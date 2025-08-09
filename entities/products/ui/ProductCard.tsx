'use client'
import Image, { StaticImageData } from "next/image";
import Button from "@/shared/ui/Button";
import LikeIcon from '../../../public/svg/likes/like.svg'
import {useRouter} from "next/navigation";

interface ProductCardProps {
    id: string
    imageProduct: StaticImageData;
    imageAlt: string;
    nameProduct: string;
    price: number;
    discount?: boolean;
    discountPrice?: number;
}

export default function ProductCard(
        {imageProduct,
         imageAlt,
         nameProduct,
         price,
         discount = false,
         discountPrice,
         id
        } : ProductCardProps ) {

    const router = useRouter();

    return (
        <div className='h-[352px] w-[164px] md:h-[432px] md:w-[268px] bg-[#F6F6F6] rounded-[9px] flex flex-col items-center justify-around'>
            <div className='w-[90%] flex items-center justify-end'>
                <button className='hover:cursor-pointer'>
                    <Image src={LikeIcon} alt={'likeIcon'}/>
                </button>
            </div>
            <div className='h-[104px] w-[104px] md:h-[160px] md:w-[160px]'>
                <Image src={imageProduct} alt={imageAlt} width={160} height={160} className='h-[104px] w-[104px] md:h-[160px] md:w-[160px]'/>
            </div>
            <div className='h-[160px] text-center flex flex-col items-center justify-between'>
                <div className='h-[88px] flex flex-col items-center justify-between'>
                    <p className='font-medium text-[16px]'>{nameProduct}</p>
                    { discount ?  (
                            <div>
                                <p className='font-semibold text-2xl'>
                                    ${discountPrice}
                                </p>
                                <p className='font-normal text-[12px] line-through'>
                                    ${price}
                                </p>
                            </div>
                        )
                        : (
                            <p className='font-semibold text-2xl'>
                                ${price}
                            </p>
                        )}
                </div>
                <Button onClick={() => router.push(`/product/${id}`)} text={'Buy Now'} borderColor={'black'} backgroundColor={'black'} textColor={'white'} width={140}/>
            </div>
        </div>
    )
}