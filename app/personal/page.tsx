'use client'
import Image from "next/image";
import { useSession } from "next-auth/react";
import CreditCard from "@/entities/creditCard/CreditCard";
import Button from "@/shared/ui/Button";
import { useState } from "react";
import UpdateUserCardForm from "@/entities/user/userCardForm/ui/UpdateUserCardForm";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from '../../features/carusel/ui/Slider'
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AddUserCardForm from "@/entities/user/userCardForm/ui/AddUserCardForm";
import { CardTypesInMapsFn } from "@/entities/creditCard/types/CreditCardTypes";
import EditableInfoField from "@/entities/user/userForm/ui/EditableInfoField";

export default function PersonalPage() {
    const session = useSession();
    const { data } = session

    const [isClickedChange, setIsClickedChange] = useState(false);
    const [updateCreditCard, setUpdateCreditCard] = useState(false);

    const creditCards = useSelector((state: RootState) => state.user.creditCards);

    return (
        <div className="flex flex-col gap-8 px-4 py-8 items-center lg:flex-row lg:justify-between lg:items-start lg:px-12 xl:px-[160px] xl:py-[112px]">
            {/* Левая колонка: аватар + карты */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center">
                <Image
                    src={data?.user?.image || '/default-avatar.png'}
                    alt="Avatar"
                    width={200}
                    height={200}
                    className="rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] object-cover"
                />

                <div className="flex flex-col gap-5 w-full items-center">
                    {isClickedChange ? (
                        <div className="w-full">
                            {updateCreditCard ? <UpdateUserCardForm /> : <AddUserCardForm />}
                            <div className="flex gap-2.5 w-full mt-4">
                                <Button
                                    borderColor="black"
                                    textColor="black"
                                    backgroundColor="white"
                                    onClick={() => setIsClickedChange(false)}
                                >
                                    Undo
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="w-full">
                                <Slider>
                                    {creditCards && creditCards.length > 0 ? (
                                        creditCards.map((creditCard: CardTypesInMapsFn) => (
                                            <CreditCard
                                                key={creditCard.id}
                                                cardNumber={creditCard?.cardNumber}
                                                cardHolder={creditCard?.cardHolder}
                                            />
                                        ))
                                    ) : (
                                        <div className="text-center p-4">
                                            <p>No credit cards added yet</p>
                                        </div>
                                    )}
                                </Slider>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                                {creditCards.length > 0 && (
                                    <Button
                                        borderColor="black"
                                        textColor="black"
                                        backgroundColor="white"
                                        onClick={() => {
                                            setUpdateCreditCard(true);
                                            setIsClickedChange(true);
                                        }}
                                    >
                                        Update Card
                                    </Button>
                                )}
                                <Button
                                    borderColor="black"
                                    textColor="white"
                                    backgroundColor="black"
                                    onClick={() => {
                                        setUpdateCreditCard(false);
                                        setIsClickedChange(true);
                                    }}
                                >
                                    Add Card
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Правая колонка: инфа + адреса */}
            <div className="flex flex-col gap-6 w-full lg:w-2/3">
                <div className="flex flex-col gap-2.5 border border-[#BDBDBD] rounded-2xl p-5">
                    <p className="text-lg sm:text-xl font-bold">Main Information</p>
                    <EditableInfoField label="Email" value={data?.user?.email} />
                    <EditableInfoField label="Phone" value="+79111113778" />
                    <EditableInfoField label="Name" value={data?.user?.name} />
                </div>

                <div className="flex flex-col gap-2.5 border border-[#BDBDBD] rounded-2xl p-5">
                    <p className="text-lg sm:text-xl font-bold">Addresses</p>
                    <EditableInfoField label="Address" value="г. Москва, ул. Пушкина, д. 10" multiline />
                </div>
            </div>
        </div>
    )
}
