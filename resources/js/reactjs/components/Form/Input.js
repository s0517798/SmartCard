import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    placeholder,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const elementInput = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={`w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ${className}`}
                ref={elementInput}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
