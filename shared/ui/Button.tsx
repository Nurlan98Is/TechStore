'use client'
interface ButtonProps {
    text: string;
    borderColor?: string;
    textColor?: string;
    backgroundColor?: string;
}

export default function Button ( { text, borderColor, textColor, backgroundColor } : ButtonProps) {
    return (
        <button
            className={`h-[56px] w-[184px] rounded-[6px] border font-medium text-[16px] hover:cursor-pointer`}
            style={{
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
        </button>
    )
}