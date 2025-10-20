import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useDarkMode } from "@/components/DarkModeContext/DarkModeContext";
import "@/components/Footer/styles/footer.css";

export function Footer() {

    const { darkMode } = useDarkMode();

    return (
        <footer className={`footer ${darkMode ? "dark" : ""}`}>
            <div className="footer-icons">
                <a
                    href="https://www.linkedin.com/in/troy-williams-c313/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>

                {/* <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a> */}

                <a
                    href="https://www.instagram.com/troysuck/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>

            <p className="footer-text">© {new Date().getFullYear()} Troy Williams</p>
        </footer>
  );
}
