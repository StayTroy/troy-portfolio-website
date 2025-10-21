import { Link } from "react-router-dom";
import { useDarkMode } from "@/components/DarkModeContext/DarkModeContext";
import  resume  from "@/static/resume/website resume.pdf"
import "@/components/DropDownMenu/styles/dropdownmenu.css"

type DropDownMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function DropDownMenu({ open, onClose }: DropDownMenuProps) {

    const { darkMode } = useDarkMode();

    return (
        <div
        className={`dropdown-menu-container ${open ? "open-menu" : ""} 
        ${darkMode ? "dark" : ""}`}>

            <div className="dropdown-menu">
                <Link to="/" onClick={onClose}>
                    Home
                </Link>
                <Link to="/projects" onClick={onClose}>
                    Projects
                </Link>
                <Link to="/hobbies" onClick={onClose}>
                    Hobbies
                </Link>
                <a 
                    href={resume} 
                    target="_blank" 
                    rel="noopener noreferrer" onClick={onClose}>
                    Resume
                </a>
            </div>
        </div>
    );
}