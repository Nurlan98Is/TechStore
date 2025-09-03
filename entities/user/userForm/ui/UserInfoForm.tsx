'use client'
import {useState} from "react";
import {UserInfoFormTypesProps} from "@/entities/user/userForm/types/UserFormTypes";

export default function UserInfoForm({label, value}: UserInfoFormTypesProps) {
    const [isChange, setIsChange] = useState<boolean>(false);

    return (
        <div className='rounded-2xl flex w-[380px] xl:w-[500px] h-[50px] justify-between items-center border border-[#BDBDBD] '>
            <div className='rounded-l-2xl bg-gray-200 w-[20%] h-[100%] flex items-center justify-center'>
                <label>
                        {label}
                </label>
            </div>
            <div className='flex w-[100%] h-[100%] justify-between pl-[10px]'>
                {isChange
                    ?
                    (
                        <>
                            <div className='w-[100%] h-[100%] flex items-center justify-start'>
                                <input defaultValue={value ?? ''} className='w-[100%] focus:outline-0' />
                            </div>

                                <button className='hover:cursor-pointer rounded-r-2xl bg-gray-100 w-[35%] h-[100%] flex items-center justify-center' onClick={() => setIsChange(false)}>Save</button>

                        </>
                    )
                    :
                    (
                        <>
                            <div className='w-[100%] flex items-center justify-start'>
                                <p>{value}</p>
                            </div>

                                <button className='hover:cursor-pointer rounded-r-2xl bg-gray-100 w-[35%] h-[100%] flex items-center justify-center' onClick={() => setIsChange(true)}>Change</button>

                        </>
                    )

                }
            </div>
        </div>
    )
}