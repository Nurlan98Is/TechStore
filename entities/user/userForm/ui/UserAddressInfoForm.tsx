'use client'

import {useState} from "react";


export default function UserAddressInfoForm({lable, value}) {
    const [isChange, setIsChange] = useState<boolean>(false);
    return (
        <div
            className='rounded-2xl flex w-[380px] xl:w-[500px] h-[70px] justify-between items-center border border-[#BDBDBD] '>
            <div className='rounded-l-2xl bg-gray-100 w-[20%] h-[100%] flex items-center justify-center'>
                <label>
                    {lable}
                </label>
            </div>
            <div className='flex justify-between w-[100%] h-[100%]'>
                {isChange
                    ?
                    (
                        <>
                            <div className='w-[100%] h-[100%] flex items-center justify-start pl-[10px]'>
                                <input defaultValue={value} className='w-[100%] h-[100%] focus:outline-0' />
                            </div>
                            <div className='rounded-r-2xl bg-gray-100 w-[35%] h-[100%] flex items-center justify-center'>
                                <button
                                    className='hover:cursor-pointer rounded-r-2xl bg-gray-100 w-[35%] h-[100%] flex items-center justify-center'
                                    onClick={() => setIsChange(false)}
                                >
                                    Save
                                </button>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className='w-[100%] h-[100%] flex items-center justify-start pl-[10px]'>
                                <label>
                                    {value}
                                </label>
                            </div>
                            <div className='rounded-r-2xl bg-gray-100 w-[35%] h-[100%] flex items-center justify-center'>
                                <button
                                    className='hover:cursor-pointer rounded-r-2xl bg-gray-100 w-[35%] h-[100%] flex items-center justify-center'
                                    onClick={() => setIsChange(true)}
                                >
                                    Change
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}