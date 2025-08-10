import {PlusAddNewAddressSvg} from "@/entities/SvgFn/ButtonsSvgFn";
export default function AddAddress() {
    return (
        <div className='w-[100%] mt-[28px] mb-[64px]' >
            <button className='w-[100%] flex flex-col items-center justify-center'>
                <PlusAddNewAddressSvg />
                Add New Address
            </button>
        </div>
    )
}