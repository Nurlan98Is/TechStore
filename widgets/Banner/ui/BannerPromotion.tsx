import LapTopImage from '../../../public/img/bannerImg/lapTopBanner.png'
import MiniTableImg from '../../../public/img/bannerImg/miniTableBanner.png'
import TableImg from '../../../public/img/bannerImg/tableBanner.png'
import IphoneImage from '../../../public/img/bannerImg/iphoneBanner.png'
import WatchImage from '../../../public/img/bannerImg/watchBanner.png'
import Image from 'next/image'
import Button from "@/shared/ui/Button";

export default function BannerPromotion() {
    return (
        <div className=' hidden h-[580px] w-[100%] md:flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#2E2E2E] to-[#000000]'>
            <div>
                <Image src={LapTopImage} alt={'lapTopBanner'}/>
                <Image src={MiniTableImg} alt={'miniTableBanner'} />
                <Image src={TableImg} alt={'tableBanner'} />
            </div>
            <div className='flex flex-col items-center justify-between '>
                <div className='text-center mb-[50px]'>
                    <p className='text-[72px] text-white'>Big Summer Sale</p>
                    <p className='text-[#787878] text-[16px]'>
                        Up to 50% OFF – Beat the heat with sizzling savings!
                        Shop now & enjoy the best deals of the season.
                        Hurry, sale ends soon!</p>
                </div>
                <Button text={'Shop Now'} borderColor={'white'} textColor={'white'}/>
            </div>
            <div>
                <Image src={IphoneImage} alt={'iphoneBanner'} className={'ml-[164px]'}/>
                <Image src={WatchImage} alt={'watchBanner'} />
            </div>
        </div>
    )
}