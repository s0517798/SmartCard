import React from "react";

const Message = ({ msg, className }) => {
    return (
        <div className="w-full">
            <p className={`w-full px-2 py-1 rounded ${className}`}>{msg}</p>
        </div>
    );
};

const ErrorMessage = ({ className, msg }) => {
    return (
        <Message
            className={`text-red-600 bg-red-200 bg-opacity-90 ${className}`}
            msg={msg}
        />
    );
};

const SuccessMessage = ({ className, msg }) => {
    return (
        <Message
            className={`text-green-600 bg-green-200 bg-opacity-90 ${className}`}
            msg={msg}
        />
    );
};
export { Message, SuccessMessage, ErrorMessage };
