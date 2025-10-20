import "@/components/NavagationBar/styles/navbtn.css"
import { NavContact } from "@/components/NavagationBar/NavContact"
import icon from "@/static/logos/hamburger-menu-svgrepo-com.svg";

type NavBtnProps = {
  onClick: () => void;
};

export function NavBtn({ onClick }: NavBtnProps) {

  return (
    <div className="nav-btn-container">

        <NavContact />

        <div className="nav-btn" onClick={onClick}>
            <img src={icon} alt="Menu Icon" />
        </div>

    </div>
  );
}