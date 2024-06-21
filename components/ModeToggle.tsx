import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./DropdownMenu";
import Button from "./Button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="small"
                    onClick={() => setOpenDropdownMenu((prev) => !prev)}
                >
                    {theme === "dark" || theme === "system" ? (
                        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    ) : (
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            {openDropdownMenu && (
                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        onClick={() => {
                            setTheme("dark");
                            setOpenDropdownMenu(false);
                        }}
                    >
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            setTheme("light");
                            setOpenDropdownMenu(false);
                        }}
                    >
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            setTheme("system");
                            setOpenDropdownMenu(false);
                        }}
                    >
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
}
