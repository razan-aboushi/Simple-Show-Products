import * as React from "react";

interface DropdownMenuProps {
    align?: "start" | "end";
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ align = "start", children }) => {
    return <div className={`dropdown-menu ${align === "end" ? "end" : "start"}`}>{children}</div>;
};

export const DropdownMenuTrigger: React.FC<{ asChild?: boolean }> = ({ children, asChild = false }) => {
    return asChild ? <>{children}</> : <div className="dropdown-trigger">{children}</div>;
};

export const DropdownMenuContent: React.FC<{ align?: "start" | "end" }> = ({ align = "start", children }) => {
    return <div className={`dropdown-content ${align === "end" ? "end" : "start"}`}>{children}</div>;
};

export const DropdownMenuItem: React.FC<{ onClick?: () => void }> = ({ onClick, children }) => {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {children}
        </div>
    );
};
