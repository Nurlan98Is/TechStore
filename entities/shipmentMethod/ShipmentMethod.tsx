interface ShipmentMethodProps {
    paymentPlan: string,
    descriptionPayment: string,
    date: string,
}

export default function ShipmentMethod({paymentPlan, descriptionPayment, date}: ShipmentMethodProps) {
    return (
        <div className='w-[1120px] h-[72px] border border-[#D1D1D8] flex justify-between items-center rounded-[11px] px-[24px]'>
            <div className='flex items-center gap-[16px]'>
                <input type='checkbox'/>
                <p>{paymentPlan}</p>
                <p>{descriptionPayment}</p>
            </div>
            <div>
                <p>{date}</p>
            </div>
        </div>
    )
}