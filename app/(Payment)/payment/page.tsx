'use client'
import CreditCard from "@/entities/creditCard/CreditCard";
import TotalSum from "@/entities/order-summury/ui/TotalSum";
import ProductInPayment from "@/entities/cart/ui/ProductInPayment";
import Button from "@/shared/ui/Button";
import {useSelector} from "react-redux";
//import UpdateUserCardForm from "@/entities/user/userCardForm/ui/UpdateUserCardForm";
import {RootState} from "@/store/store";
import Slider from "@/features/carusel/ui/Slider";
import {CardTypesInMapsFn} from "@/entities/creditCard/types/CreditCardTypes";


export default function PaymentPage() {
    const productCartInPayment = useSelector((state: RootState) => state.cart);
    const creditCards = useSelector((state: RootState) => state.user.creditCards);

    return (
        <div className='flex flex-col lg:flex-row justify-around mb-[72px]'>
            <div className='xl:w-[512px] xl:h-[704px] border border-[#D1D1D8] rounded-[10px] px-[24px] py-[32px]'>
                <p className='text-[20px] font-medium mb-[24px]'>Summary</p>
                <div>
                    {productCartInPayment.length === 0 ? (
                        <p>Cart is empty</p>
                    ) : (
                        productCartInPayment.map((product) => (
                            <ProductInPayment
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                img={product.img?.src}
                            />
                        ))
                    )}
                </div>

                <div>
                    <div className='flex flex-col justify-around h-[136px]'>
                        <div className='flex flex-col justify-around h-[72px]'>
                            <p className='text-[#545454] font-medium text-[14px]'>Address</p>
                            <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                        </div>
                        <div className='flex flex-col justify-around h-[48px]'>
                            <p className='text-[#545454] font-medium text-[14px]'>Shipment method</p>
                            <p>Free</p>
                        </div>
                    </div>
                    <div>
                       <TotalSum/>
                    </div>
                </div>

            </div>
            <div className='lx:w-[512px] xl:h-[704px] mt-[24px] lg:mt-[0px] flex flex-col justify-center items-center lg:items-start'>
                <p className='mb-[24px]'>Payment</p>
                <div className='flex gap-[56px] mb-[32px]'>
                    <button>Credit Card</button>
                    <button>PayPal</button>
                    <button>PayPal Credit</button>
                </div>
                <Slider>
                    {creditCards.length === 0 ? (
                        <p>You need add card</p>
                    ) : (
                        creditCards.map((card: CardTypesInMapsFn) => (
                            <CreditCard
                                key={card.id}
                                cardHolder={card.cardHolder}
                                cardNumber={card.cardNumber}
                            />
                        ))
                    )}
                </Slider>
                <div className='flex justify-center lg:justify-start my-[49px]'>
                    <input type='checkbox'/>
                    <p className='pl-[5px]'>Same as billing address</p>
                </div>
                <div className='flex justify-center items-center lg:flex-row lg:justify-start'>
                    <Button borderColor={'black'} width={156}>Back</Button>
                    <Button borderColor={'black'} width={156} backgroundColor={'black'} textColor={'white'} className='ml-[23px]'>Pay</Button>
                </div>
            </div>
        </div>
    )
}