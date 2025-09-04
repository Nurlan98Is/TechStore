'use client'

import { useState } from "react"

interface EditableInfoFieldProps {
    label: string
    value?: string | undefined | null
    onSave?: (newValue: string) => void
    multiline?: boolean // если это адрес, можно делать textarea
}

export default function EditableInfoField({ label, value, onSave, multiline = false }: EditableInfoFieldProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [tempValue, setTempValue] = useState(value ?? "")

    const handleSave = () => {
        if (onSave) onSave(tempValue)
        setIsEditing(false)
    }

    return (
        <div className="rounded-2xl flex w-full max-w-md sm:max-w-lg h-auto min-h-[50px] border border-[#BDBDBD] overflow-hidden">
            {/* Левая часть: label */}
            <div className="rounded-l-2xl bg-gray-100 w-1/4 sm:w-1/5 flex items-center justify-center p-2 text-sm sm:text-base font-medium">
                {label}
            </div>

            {/* Правая часть */}
            <div className="flex flex-1 items-center justify-between pl-2 pr-2 bg-white">
                {isEditing ? (
                    <>
                        <div className="flex-1 flex items-center">
                            {multiline ? (
                                <textarea
                                    value={tempValue}
                                    onChange={(e) => setTempValue(e.target.value)}
                                    className="w-full h-full resize-none focus:outline-none p-1 text-sm sm:text-base"
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={tempValue}
                                    onChange={(e) => setTempValue(e.target.value)}
                                    className="w-full focus:outline-none p-1 text-sm sm:text-base"
                                />
                            )}
                        </div>
                        <button
                            onClick={handleSave}
                            className="ml-2 px-3 py-1 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 rounded-md"
                        >
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <p className="flex-1 text-sm sm:text-base truncate">{value}</p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="ml-2 px-3 py-1 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 rounded-md"
                        >
                            Change
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}
