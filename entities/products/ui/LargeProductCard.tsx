import Image from "next/image";

export default function LargeProductCard({ image, background,children}) {
    return (
        <div
            style={{
                backgroundColor: background,
            }}
            className={`h-[640px] w-[360px] flex flex-col items-center justify-start`}>
            <div className='h-[360px] w-[360px]'>
                <Image src={image} alt='img' />
            </div>
            <div className='mx-[32px] flex flex-col justify-around h-[208px]'>
                {children}
            </div>
        </div>
    )
}