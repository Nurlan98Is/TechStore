import CategoryCard from "@/entities/categoryCard/CategoryCard";
import PhoneIcon from '../../../public/svg/category/phone.svg';
import SmartWatches from '../../../public/svg/category/handClock.svg';
import CameraIcon from '../../../public/svg/category/camera.svg';
import HeadPhonesIcon from '../../../public/svg/category/headPhones.svg';
import ComputerIcon from '../../../public/svg/category/computers.svg';
import GamingIcon from '../../../public/svg/category/gaming.svg'
import ButtonArrowLeft from "@/shared/ui/ButtonArrowLeft";
import ButtonArrowRight from "@/shared/ui/ButtonArrowRight";

export default function Category() {
    return (
        <div className='w-100% h-[624px] lg:h-[352px] bg-[#FAFAFA] flex flex-col justify-center px-[160px]'>
            <div className='w-[inherit] flex justify-between'>
                <div>
                    <p className='font-medium text-2xl'>Browse by Category</p>
                </div>
                <div>
                    <ButtonArrowLeft/>
                    <ButtonArrowRight/>
                </div>
            </div>
            <div className='flex justify-around'>
                <CategoryCard image={PhoneIcon} alt={'phoneIcon'} text={'Phone'}/>
                <CategoryCard image={SmartWatches} alt={'smartClock'} text={'Smart Watches'}/>
                <CategoryCard image={CameraIcon} alt={'cameraIcon'} text={'Cameras'}/>
                <CategoryCard image={HeadPhonesIcon} alt={'headPhones'} text={'Headphones'}/>
                <CategoryCard image={ComputerIcon} alt={'computerIcon'} text={'Computers'}/>
                <CategoryCard image={GamingIcon} alt={'gamingIcon'} text={'Gamings'}/>
            </div>
        </div>
    )
}