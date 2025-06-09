import LargeProductCard from "@/entities/products/ui/LargeProductCard";
import Button from "@/shared/ui/Button";
import GroupImage from '../../../public/svg/largeProductCard/GroupImg.png';
import IpadProImage from '../../../public/svg/largeProductCard/IpadPro.png';
import SamsungGalaxyImg from '../../../public/svg/largeProductCard/samsungGalaxyPhone.png';
import MacBookImg from '../../../public/svg/largeProductCard/Macbook 1.png';

export default function ProductsCardRow () {
    return (
        <div className='h-[640px] w-[100%] flex justify-around'>
            <LargeProductCard image={GroupImage} background={'#FFFFFF'}>
                <p className='text-[33px] font-light'>Popular Products</p>
                <p className='text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <Button text={'Shop Now'} borderColor={'black'} textColor={'black'} />
            </LargeProductCard>

            <LargeProductCard image={IpadProImage} background={'#F9F9F9'}>
                <p className='text-[33px] font-light'>Ipad Pro</p>
                <p className='text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <Button text={'Shop Now'} borderColor={'black'} textColor={'black'} />
            </LargeProductCard>

            <LargeProductCard image={SamsungGalaxyImg} background={'#EAEAEA'}>
                <p className='text-[33px] font-light'>Samsung Galaxy </p>
                <p className='text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <Button text={'Shop Now'} borderColor={'black'} textColor={'black'} />
            </LargeProductCard>

            <LargeProductCard image={MacBookImg} background={'#2C2C2C'}>
                <p className='text-[33px] font-light text-white'>Macbook Pro</p>
                <p className='text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <Button text={'Shop Now'} borderColor={'white'} textColor={'white'} />
            </LargeProductCard>
        </div>
    )
}