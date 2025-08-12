'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function TotalSum() {
    const state = useSelector((state: RootState) => state.totalSum);
    return (
        <div>
            <div className='flex justify-between mb-[16px]'>
                <p>Subtotale</p>
                <p>${state?.subTotal}</p>
            </div>
            <div className='flex justify-between mb-[8px]'>
                <p>Estimated Tax</p>
                <p>${state?.estimatedTax}</p>
            </div>
            <div className='flex justify-between mb-[16px]'>
                <p>Estimated shipping & Handling</p>
                <p>${state?.estimatedShipping}</p>
            </div>
            <div className='flex justify-between mb-[16px]'>
                <p>Total</p>
                <p>${state?.total}</p>
            </div>
        </div>
    )
}