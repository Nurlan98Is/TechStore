interface ShipmentMethodProps {
    paymentPlan: string,
    descriptionPayment: string,
    date: string,
    widthContainer?: string | number,
    heightContainer?: string | number,
}

export default function ShipmentMethod({widthContainer, heightContainer, paymentPlan, descriptionPayment, date}: ShipmentMethodProps) {
    console.log(heightContainer, 'heightContainer1')
    return (
        <div
            className={`w-[343px] md:w-[534px] xl:w-[1120px] xl:h-[72px] border border-[#D1D1D8] flex justify-between items-center rounded-[11px] px-[24px]`}
            style={{
                width: typeof widthContainer === 'number' ? `${widthContainer}px` : widthContainer,
                height: typeof heightContainer === 'number' ? `${heightContainer}px` : heightContainer,
            }}
        >
            <div className='w-[147px] md:w-[80%] flex flex-col items-start lg:flex-row lg:items-center xl:gap-[16px]'>
                <input type='checkbox'/>
                <p className='text-[16px]'>{paymentPlan}</p>
                <p className='text-[16px] '>{descriptionPayment}</p>
            </div>
            <div>
                <p className='text-[16px]'>{date}</p>
            </div>
        </div>
    )
}