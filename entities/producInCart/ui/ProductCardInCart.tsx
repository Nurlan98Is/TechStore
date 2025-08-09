'use client'
import iphoneImage from '../../../public/svg/productCard/newArrival/Iphone 14 pro white.png'
import Image from "next/image";
import {useState} from "react";
export default function ProductCardInCart() {
    const [count, setCount] = useState(1);
    return (
        <div className='flex flex-col'>
            <div className='flex justify-around items-center w-[100%] h-[122px] mb-[40px]'>
                <Image src={iphoneImage} alt='iphone' width={90} height={90}/>
                <p>Apple iphone pro 14</p>
                <div className='flex justify-around items-center w-[104px]'>
                    <button onClick={() => setCount( count - 1)}>-</button>
                    <p className='w-[40px] h-[36px] flex justify-center items-center rounded-[4px] border border-[#D9D9D9]'>{count}</p>
                    <button onClick={() => setCount( count + 1)}>+</button>
                </div>
                <p className='font-medium text-[20px]'>$1200</p>
                <button>X</button>
            </div>
            <div className='border-[0.5px] border-[#A3A3A3]'></div>
        </div>
    )
}