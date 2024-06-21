import * as React from "react";

interface ButtonProps {
    variant?: "outline" | "filled";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({variant = "filled", size = "medium", onClick, children}) => {
    const buttonStyles = `px-3 py-2 text-white rounded ${
        variant === "outline" ? "border-2 border-blue-500" : "bg-blue-500"
    } ${
        size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"
    }`;

    return (
        <button className={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
