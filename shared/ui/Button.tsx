'use client'
import {ReactNode} from "react";

interface ButtonProps {
    children: string
    text: string;
    borderColor: string;
    textColor: string;
    backgroundColor: string;
    width: number | string;
    fontSize: number | string;
    className: string
    onClick: () => void
}

export default function Button ( { children, text, borderColor, textColor, backgroundColor, width, fontSize, className, onClick} : Partial<ButtonProps>) {

    return (
        <button
            className={`${className} h-[56px] w-[80%] md:w-[184px] rounded-[6px] border font-medium text-[16px] hover:cursor-pointer`}
            onClick={onClick}
            style={{
                fontSize: fontSize,
                width: `${width}px`,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                color: textColor,
                transition: "all 0.3s ease", // Анимируем все свойства
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#5AC8FA";
                e.currentTarget.style.borderColor = "#5AC8FA";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = borderColor as string;
                e.currentTarget.style.color = textColor as string;
                e.currentTarget.style.backgroundColor = backgroundColor as string;
            }}
        >
            {text}
            {children}
        </button>
    )
}