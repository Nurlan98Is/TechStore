import {PencilButtonSvg} from "@/entities/SvgFn/ButtonsSvgFn";
import {CrossButtonSvg} from "@/entities/SvgFn/ButtonsSvgFn";
export default function SelectAddressForm() {
    return (
        <div className='xl:w-[1120px] xl:h-[144px] bg-[#F6F6F6] p-[24px] mb-[24px]'>
            <div className='flex mb-[16px]'>
                <input type='checkbox' className='mr-[16px]'/>
                <p>2118 Thornridge</p>
                <div className='w-[51px] h-[22px] rounded-[4px] bg-[#000000] flex items-center justify-center ml-[16px]'>
                    <p className='text-white text-[12px] font-medium'>HOME</p>
                </div>
            </div>
            <div className='flex justify-between ml-[29px]'>
                <div>
                    <p className='mb-[8px]'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    <p>(209) 555-3331</p>
                </div>
                <div className='w-[72px] flex'>
                    <button className='mr-[30px]'>
                        <PencilButtonSvg/>
                    </button>
                    <button>
                        <CrossButtonSvg/>
                    </button>
                </div>
            </div>
        </div>
    )
}