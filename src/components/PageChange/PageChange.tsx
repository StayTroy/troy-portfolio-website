import { Link } from "react-router-dom";
import "@/components/PageChange/styles/pagechange.css"

interface PageChangeProps {
  link?: string;
  icon?: string; 
}

export function PageChange({ link = "/", icon }: PageChangeProps) {
  return (
    <div className="page-change">
        <Link to={link} className="button-link">
            {icon && <img src={icon} />}
        </Link>
    </div>
  );
}