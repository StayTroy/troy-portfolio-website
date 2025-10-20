import { useState } from "react";
import { NavLogo } from "@/components/NavagationBar/NavLogo"
import { NavLinks } from "@/components/NavagationBar/NavLinks"
import { NavBtn } from "@/components/NavagationBar/NavBtn"
import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu"
import { useDarkMode } from "@/components/DarkModeContext/DarkModeContext";
import "@/components/NavagationBar/styles/navbar.css"

export function NavBar ()
{
    const [open, setOpen] = useState(false);

    const { darkMode } = useDarkMode();

    return (
        <div className={`nav-bar ${darkMode ? "dark" : ""}`}>
            <NavLogo /> {/* controls the toggle */}
            <NavLinks />
            <NavBtn onClick={() => setOpen((prev) => !prev)}/>
            <DropDownMenu open={open}/>
        </div>
    );
}