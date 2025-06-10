import ProductCard from "@/entities/products/ui/ProductCard";
import IphoneProGoldImg from '../../../public/svg/productCard/newArrival/Iphone 14 pro Gold.png'
import AirPodsProMaxImg from '../../../public/svg/productCard/newArrival/AppleAirPodsPro.png'
import AppleWatchImg from '../../../public/svg/productCard/newArrival/AppleWatch.png'
import IphoneProWhiteImg from '../../../public/svg/productCard/newArrival/Iphone 14 pro white.png'

export default function ProductDiscountCase() {
    return (
        <div className='w-[100%] h-[896px] md:h-[656px]'>
            <div className='md:px-[160px] md:py-[80px] flex flex-col'>
                <p className='font-medium text-2xl mb-[32px]'>Discounts up to -50%</p>
                <div className='grid grid-cols-2 gap-4 pl-[10px] md:flex md:justify-between'>
                    <ProductCard
                        imageProduct={IphoneProGoldImg}
                        imageAlt={'iphoneProWhite'}
                        nameProduct={'Apple iPhone 14 Pro 512GB Gold (MQ233)'}
                        price={1437}
                        discount={true}
                        discountPrice={717}
                    />
                    <ProductCard
                        imageProduct={AirPodsProMaxImg}
                        imageAlt={'AirPodsProMax'}
                        nameProduct={'AirPods Max Silver'}
                        price={549}
                        discount={true}
                        discountPrice={225}
                    />
                    <ProductCard
                        imageProduct={AppleWatchImg}
                        imageAlt={'AppleWatch'}
                        nameProduct={'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case'}
                        price={399}
                        discount={true}
                        discountPrice={199}
                    />
                    <ProductCard
                        imageProduct={IphoneProWhiteImg}
                        imageAlt={'IphoneProWhite'}
                        nameProduct={'Apple iPhone 14 Pro 1TB Gold (MQ2V3)'}
                        price={1499}
                        discount={true}
                        discountPrice={749}
                    />
                </div>
            </div>
        </div>
    )
}