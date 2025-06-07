interface ButtonProps {
    text: string;
    borderColor?: string;
    textColor?: string;
}

export default function Button ( { text, borderColor, textColor } : ButtonProps) {
    return (
        <button className={`h-[56px] w-[184px] rounded-[6px] border border-[${borderColor}] text-[${textColor}] font-medium text-[16px]`}>
            {text}
        </button>
    )
}