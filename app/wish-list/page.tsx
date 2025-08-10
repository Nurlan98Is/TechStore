'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
interface Product {
    name: string;
}
export default function WishListPage() {
    const itemsInWishList = useSelector((state: RootState) => state.wishlist)
    return (
        <div>
            {itemsInWishList.map((product: Product) => (
                <div key={product.name}>
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    )
}