import ProductCard from "@/entities/products/ui/ProductCard";
import Iphone14ProProductImage from '../../../public/svg/productCard/newArrival/iphone 14 pro card.png';
import BlackMagicPocketCameraImage from '../../../public/svg/productCard/newArrival/Camera.png';
import AppleWatchesProductImage from '../../../public/svg/productCard/newArrival/AppleWatch.png';
import AirPodsProProductImage from '../../../public/svg/productCard/newArrival/AppleAirPodsPro.png';
import SamsungGalaxyWatch6ProductImage from '../../../public/svg/productCard/newArrival/SamsungGalaxyWatch.png';
import GalaxyZFold5ProductImage from '../../../public/svg/productCard/newArrival/GalaxyF5Fold.png';
import GalaxyBudsProductImage from '../../../public/svg/productCard/newArrival/GalaxyBuds.png';
import AppleIpadProudctImage from '../../../public/svg/productCard/newArrival/AppleIPad.png';

export default function ProductCase() {


    return (
        <div className='w-full px-4 py-14 md:px-40 md:py-14 '>
            <div className="mb-8 flex items-start gap-8">
                <button className='text-[#8B8B8B]'>
                    <span>New Arrival</span>
                </button>
                <button>
                    <span className='text-[#8B8B8B]'>Bestseller</span>
                </button>
                <button className='text-[#8B8B8B]'>
                    <span>Featured Products</span>
                </button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <ProductCard
                    imageProduct={Iphone14ProProductImage}
                    imageAlt={'iphone 14 pro'}
                    nameProduct={'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)'}
                    price={799}
                    id={'2'}
                />
                <ProductCard
                    imageProduct={BlackMagicPocketCameraImage}
                    imageAlt={'Black Magic Pocket'}
                    nameProduct={'Blackmagic Pocket Cinema Camera 6k'}
                    price={2535}
                    id={'3'}
                />
                <ProductCard
                    imageProduct={AppleWatchesProductImage}
                    imageAlt={'Apple Watches'}
                    nameProduct={'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case'}
                    price={399}
                    id={'4'}
                />
                <ProductCard
                    imageProduct={AirPodsProProductImage}
                    imageAlt={'Air Pods'}
                    nameProduct={'AirPods Max Silver'}
                    price={549}
                    id={'5'}
                />
                <ProductCard
                    imageProduct={SamsungGalaxyWatch6ProductImage}
                    imageAlt={'Samsung Galaxy watches'}
                    nameProduct={'Samsung Galaxy Watch6 Classic 47mm Black'}
                    price={369}
                    id={'6'}
                />
                <ProductCard
                    imageProduct={GalaxyZFold5ProductImage}
                    imageAlt={'Galaxy Z Fold'}
                    nameProduct={'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black'}
                    price={1799}
                    id={'7'}
                />
                <ProductCard
                    imageProduct={GalaxyBudsProductImage}
                    imageAlt={'Galaxy Buds'}
                    nameProduct={'Galaxy Buds FE Graphite'}
                    price={99.99}
                    id={'8'}
                />
                <ProductCard
                    imageProduct={AppleIpadProudctImage}
                    imageAlt={'Apple Ipad'}
                    nameProduct={'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021'}
                    price={398}
                    id={'9'}
                />
            </div>
        </div>
    )
}