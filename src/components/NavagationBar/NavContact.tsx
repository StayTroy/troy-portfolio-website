import { Link } from "react-router-dom";
import email from "@/static/logos/email-svgrepo-com.svg";
import "@/components/NavagationBar/styles/navcontact.css"

export function NavContact ()
{
    return (
        <div className="nav-contact">
            <Link to="/contact">
                <img src={email} alt="Email Icon" />
            </Link>
        </div>
    );
}