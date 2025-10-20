import { Link } from "react-router-dom";
import { useDarkMode } from "@/components/DarkModeContext/DarkModeContext";
import "@/components/NavagationBar/styles/navlogo.css"
import logo from "@/static/logos/octopus-svgrepo-com.svg";
import sun from "@/static/logos/sun-2-svgrepo-com.svg";
import moon from "@/static/logos/moon-fill-svgrepo-com.svg";

export function NavLogo ()
{
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className="nav-logos-container">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="NavLogo"></img>
                </Link>
            </div>

            <div className="toggle-logos">

                <button className={`logo-button sun`} onClick={toggleDarkMode}>
                    <img src={sun} alt="SunLogo" />
                </button>

                <button className={`logo-button moon`} onClick={toggleDarkMode}>
                    <img src={moon} alt="MoonLogo" />
                </button>

            </div>

        </div>
    );
}