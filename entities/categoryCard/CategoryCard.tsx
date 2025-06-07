import Image from "next/image";

interface CategoryCardProps {
    image: string;
    alt: string;
    text: string;
}

export default function CategoryCard({ image, alt,  text} : CategoryCardProps) {
    return (
        <div className='w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED] flex flex-col justify-center items-center hover:cursor-pointer'>
            <Image src={image} alt={alt} className='pb-[10px]'/>
            <p>{text}</p>
        </div>
    )
}