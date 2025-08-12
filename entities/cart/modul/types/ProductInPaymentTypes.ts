import { StaticImageData } from 'next/image';

export interface ProductInPaymentTypes {
    name: string;
    price: number;
    img: StaticImageData | string;
}