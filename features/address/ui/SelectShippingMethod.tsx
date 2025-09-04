import ShipmentMethod from "@/entities/shipmentMethod/ShipmentMethod";
export default function SelectShippingMethod() {
    return (
        <div className='w-[100%] flex flex-col gap-[16px]'>
            <ShipmentMethod heightContainer={136} paymentPlan={'free'} descriptionPayment={'Regulary shipment'} date={'17 oct,2025'}/>
            <ShipmentMethod heightContainer={160} paymentPlan={'$8.50'} descriptionPayment={'Get your delivery as soon as possible'} date={'1 oct,2025'}/>
            <ShipmentMethod heightContainer={184} paymentPlan={'Schedule'} descriptionPayment={'Pick a date when you want to get your delivery'} date={'Select Date'}/>
        </div>
    )
}