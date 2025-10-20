import { Link } from "react-router-dom";
import { useDarkMode } from "@/components/DarkModeContext/DarkModeContext";
import  resume  from "@/static/resume/TroyWilliams.pdf"
import "@/components/DropDownMenu/styles/dropdownmenu.css"

type DropDownMenuProps = {
  open: boolean;
};

export function DropDownMenu({ open }: DropDownMenuProps) {

    const { darkMode } = useDarkMode();

    return (
        <div
        className={`dropdown-menu-container ${open ? "open-menu" : ""} 
        ${darkMode ? "dark" : ""}`}>
            <div className="dropdown-menu">
                <Link to="/">
                    Home
                </Link>
                <Link to="/projects">
                    Projects
                </Link>
                <Link to="/hobbies">
                    Hobbies
                </Link>
                <a 
                    href={resume} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </div>
    );
}