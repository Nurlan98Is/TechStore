'use client'
import Image from "next/image";
import {useSession} from "next-auth/react";
import UserInfoForm from "@/entities/user/userForm/ui/UserInfoForm";
import UserAddressInfoForm from "@/entities/user/userForm/ui/UserAddressInfoForm";
import CreditCard from "@/entities/creditCard/CreditCard";
import Button from "@/shared/ui/Button";
import {useState} from "react";
import UserCardForm from "@/entities/user/userCardForm/ui/UserCardForm";
import Carousel from "@/features/carusel/ui/Сarousel";

export default function PersonalPage() {
    const session = useSession();
    const {data} = session
    const [updateCreditCard, setUpdateCreditCard] = useState(false);
    return(
        <div className='flex items-start justify-around my-[112px] mx-[160px]'>
            <div className='flex flex-col gap-5'>
                <Image src={data?.user?.image} alt={'Avatar'} width={300} height={300} className='rounded-[50%]' />
                <div className='flex flex-col gap-5 items-center'>
                    {updateCreditCard
                        ?
                        <div>
                            <UserCardForm/>
                            <div className='flex gap-2.5 w-[100%] mt-[10px]'>
                                <Button borderColor={'black'} textColor={'black'} backgroundColor={'white'} onClick={() => setUpdateCreditCard(false)}>Undo</Button>
                                <Button borderColor={'black'} textColor={'white'} backgroundColor={'black'}>Update</Button>
                            </div>
                        </div>
                        :
                        <>
                            <CreditCard/>
                            <Button borderColor={'black'} textColor={'white'} backgroundColor={'black'} onClick={() => setUpdateCreditCard(true)}>Update Card</Button>
                        </>
                    }
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-2.5 mb-[10px] border border-[#BDBDBD] rounded-2xl p-[20px]'>
                    <p className='text-[20px] font-bold'>Main Information</p>
                    <UserInfoForm lable={'Email'} value={data?.user?.email} />
                    <UserInfoForm lable={'Phone'} value={'+79111113778'}/>
                    <UserInfoForm lable={'Name'} value={data?.user?.name} />
                </div>
                <div className='flex flex-col gap-2.5 border border-[#BDBDBD] rounded-2xl p-[20px]'>
                    <p className='text-[20px] font-bold'>Addresses</p>
                    <UserAddressInfoForm lable={'Address'} value={'222444 Челябинская обл. Верхнуральский р-н п.Подольский ул.Школьная 33'}/>
                    <UserAddressInfoForm lable={'Address'} value={'222444 Челябинская обл. Верхнуральский р-н п.Подольский ул.Школьная 33'}/>
                    <UserAddressInfoForm lable={'Address'} value={'222444 Челябинская обл. Верхнуральский р-н п.Подольский ул.Школьная 33'}/>
                    <UserAddressInfoForm lable={'Address'} value={'222444 Челябинская обл. Верхнуральский р-н п.Подольский ул.Школьная 33'}/>
                </div>
                <Carousel/>
            </div>
        </div>
    )
}