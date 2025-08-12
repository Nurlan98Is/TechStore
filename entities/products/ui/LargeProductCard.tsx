import Image ,{StaticImageData} from "next/image";
import { ReactNode } from "react";

interface LargeProductCardProps {
    image: StaticImageData;
    background: string;
    children?: ReactNode;
}

export default function LargeProductCard({ image, background, children}: LargeProductCardProps) {
    return (
        <div
            style={{
                backgroundColor: background,
            }}
            className={`h-[640px] w-[100%] flex flex-col items-center justify-start`}>
            <div className='h-[360px] w-[350px]'>
                <Image src={image} alt='img' />
            </div>
            <div className='mx-[32px] flex flex-col justify-around h-[208px]'>
                {children}
            </div>
        </div>
    )
}