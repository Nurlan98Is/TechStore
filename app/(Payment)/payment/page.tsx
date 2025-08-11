import CreditCard from "@/entities/creditCard/CreditCard";
import Button from "@/shared/ui/Button";
export default function PaymentPage() {
    return (
        <div className='flex justify-around mb-[72px]'>
            <div className='lx:w-[512px] xl:h-[704px] border border-[#D1D1D8] rounded-[10px] px-[24px] py-[32px]'>
                <p>Summary</p>
                <div></div>
                <div>
                    <p>Address</p>
                    <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                    <p>Shipment method</p>
                    <p>Free</p>
                    <div>
                        <div className='flex justify-between mb-[16px]'>
                            <p>Subtotale</p>
                            <p>$2347</p>
                        </div>
                        <div className='flex justify-between mb-[8px]'>
                            <p>Estimated Tax</p>
                            <p>$50</p>
                        </div>
                        <div className='flex justify-between mb-[16px]'>
                            <p>Estimated shipping & Handling</p>
                            <p>$29</p>
                        </div>
                        <div className='flex justify-between mb-[16px]'>
                            <p>Total</p>
                            <p>$2426</p>
                        </div>
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
                <div className='py-[40px]'>
                    <CreditCard/>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <input placeholder='Cardholder name' className='xl:w-[512px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'/>
                    <input placeholder='Card Number' className='xl:w-[512px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'/>
                    <div className='flex justify-between'>
                        <input placeholder='Exp.Date' className='xl:w-[248px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'/>
                        <input placeholder='CVV' className='xl:w-[248px] xl:h-[48px] border border-[#CECECE] rounded-[7px] px-[16px] py-[12px]'/>
                    </div>
                </div>
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