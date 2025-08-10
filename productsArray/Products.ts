import Iphone14Pro from '../public/svg/productCard/newArrival/iphone 14 pro card.png'
import CameraBlackMagic from '../public/svg/productCard/newArrival/Camera.png'
import AppleWatch from '../public/svg/productCard/newArrival/AppleWatch.png'
import { StaticImageData } from "next/image";

interface ProductsArray {
    id: string
    name: string
    price: number
    img: StaticImageData
}
export const ProductsArray: ProductsArray[] = [
    {
        id: '1',
        name: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
        price: 799,
        img: Iphone14Pro,
    },
    {
        id: '2',
        name: 'Blackmagic Pocket Cinema Camera 6k',
        price: 2535,
        img: CameraBlackMagic,
    },
    {
        id: '3',
        name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
        price: 399,
        img: AppleWatch,
    }
]