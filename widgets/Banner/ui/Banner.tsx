import PromoCardHorizontal from "@/entities/ui/PromoCardHorizontal";
import PromoCardVertical from "@/entities/ui/PromoCardVertical";
import PromoCardBlack from "@/entities/ui/PromoCardBlack";
import PromoCardWhite from "@/entities/ui/PromoCardWhite";
export default function Banner() {
    return (
        <div className='w-[100%] h-[600px] grid grid-cols-4 grid-rows-8'>
            <div className='col-span-2 row-span-5'>
                <PromoCardHorizontal/>
            </div>

            {/* Вертикальная карточка (занимает 1 колонку и 2 строки) */}
            <div className='col-span-2 row-span-8'>
                <PromoCardVertical/>
            </div>

            {/* Маленькие карточки (занимают по 1 колонке) */}
            <div className='col-span-1 row-span-5'>
                <PromoCardWhite/>
            </div>
            <div className='col-span-1 row-span-5'>
                <PromoCardBlack/>
            </div>
        </div>
    )
}