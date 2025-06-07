import PromoCardHorizontal from "@/entities/promoCard/ui/PromoCardHorizontal";
import PromoCardVertical from "@/entities/promoCard/ui/PromoCardVertical";
import PromoCardBlack from "@/entities/promoCard/ui/PromoCardBlack";
import PromoCardWhite from "@/entities/promoCard/ui/PromoCardWhite";
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