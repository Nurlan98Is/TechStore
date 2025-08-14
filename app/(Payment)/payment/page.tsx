'use client'
import CreditCard from "@/entities/creditCard/CreditCard";
import TotalSum from "@/entities/order-summury/ui/TotalSum";
import ProductInPayment from "@/entities/cart/ui/ProductInPayment";
import Button from "@/shared/ui/Button";
import {useSelector} from "react-redux";
import UserCardForm from "@/entities/user/userCardForm/ui/UserCardForm";
import {RootState} from "@/store/store";


export default function PaymentPage() {
    const state = useSelector((state: RootState) => state.cart);
    return (
        <div className='flex justify-around mb-[72px]'>
            <div className='xl:w-[512px] xl:h-[704px] border border-[#D1D1D8] rounded-[10px] px-[24px] py-[32px]'>
                <p>Summary</p>
                <div>
                    {state.map((product) => (
                        <ProductInPayment name={product.name} price={product.price} img={product.img.src} key={product.id}/>
                    ))}
                </div>
                <div>
                    <p>Address</p>
                    <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                    <p>Shipment method</p>
                    <p>Free</p>
                    <div>
                       <TotalSum/>
                    </div>
                </div>

            </div>
            <div className='lx:w-[512px] xl:h-[704px]'>
                <p className='mb-[24px]'>Payment</p>
                <div className='flex gap-[56px]'>
                    <button>Credit Card</button>
                    <button>PayPal</button>
                    <button>PayPal Credit</button>
                </div>
               <UserCardForm/>
                <div className='flex my-[49px]'>
                    <input type='checkbox'/>
                    <p className='pl-[5px]'>Same as billing address</p>
                </div>
                <div>
                    <Button borderColor={'black'}>Back</Button>
                    <Button borderColor={'black'} backgroundColor={'black'} textColor={'white'} className='ml-[23px]'>Pay</Button>
                </div>
            </div>
        </div>
    )
}