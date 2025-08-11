'use client'
import iphoneImage from '../../../public/svg/productCard/newArrival/Iphone 14 pro white.png'
import Image from "next/image";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/store/store";
import {addQuantity, decreaseQuantity, removeCart} from "@/features/cart/model/cartSlice";
import {decreaseTotalSum} from "@/features/calculateTotalSum/modal/calculateTotalSumSlice";

type CartProduct = {
    id: string ;
    img: string;
    name: string;
    price: number;
    quantity?: number; // опционально, если используется
};

export default function ProductCardInCart() {

    const cartItems= useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    console.log('cart state', cartItems);

    if (cartItems.length === 0) {
        return (
            <p className='text-lg font-semibold'>Your cart is empty...</p>
        )
    }
    const handleDeleteItemInCart = (product: Pick<CartProduct, 'id' | 'price'>) => {
        dispatch(removeCart({id: product.id}));
        dispatch(decreaseTotalSum({price: product.price}));
    }
    return (
        <div>
            {cartItems.map(product => (
                <div key={product.id} className='flex flex-col'> {/* Добавляем key */}
                    <div className='flex justify-around items-center w-[100%] h-[122px] mb-[40px]'>
                        {/* Используем product.img вместо фиксированного изображения */}
                        <Image
                            src={product.img || '/default-product-image.png'}
                            alt={product.name}
                            width={90}
                            height={90}
                        />
                        <p>{product.name}</p>
                        <div className='flex justify-around items-center w-[104px]'>
                            <button onClick={() => dispatch(decreaseQuantity({id: product.id}))}>-</button>
                            <p className='w-[40px] h-[36px] flex justify-center items-center rounded-[4px] border border-[#D9D9D9]'>
                                {product.quantity}
                            </p>
                            <button onClick={() => dispatch(addQuantity({id: product.id}))}>+</button>
                        </div>
                        {/* Используем product.price вместо фиксированной цены */}
                        <p className='font-medium text-[20px]'>${product.price}</p>
                        <button onClick={() => handleDeleteItemInCart(product)}>X</button>
                    </div>
                    <div className='border-[0.5px] border-[#A3A3A3]'></div>
                </div>
            ))
            }
        </div>
    );
}