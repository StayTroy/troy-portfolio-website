import { Link } from "react-router-dom";
import level from "@/static/project-images/Level 1.png";
import levelchange from "@/static/project-images/Change Level.png";
import "@/routes/ProjectRoutes/styles/hero.css"

export function SpartanHeroRoute() {
    return (
        <main className='project-detail-page'>
            <Link to="/projects" className="sticky-nav-button">
                Back to Projects
            </Link>

            <div className='project-detail-header'>
                <h1>Spartan Hero</h1>
            </div>

            <div className='project-detail-container'>
                <section className="project-summary">
                    <h2>Project Summary</h2>
                    <p>
                        A rhythm-based game inspired by Guitar Hero where players match keyboard keys with falling notes 
                        across different levels and songs. Test your timing and reflexes in this MSU-themed musical challenge.
                    </p>
                </section>

                <section className="project-image-section">
                    <h2>Main Interface</h2>
                    <div className="project-image-container">
                        <img 
                            src={level}
                            alt="Main Interface"
                            loading="lazy"
                            className="project-image"
                        />
                    </div>
                </section>

                <section className="project-explanation">
                    <h2>Gameplay System</h2>
                    <p>
                        Players press keyboard keys in sync with falling notes to match the rhythm of various songs. 
                        Multiple difficulty levels provide challenges for both beginners and experienced rhythm game players.
                    </p>
                </section>

                <section className="project-image-section">
                    <div className="project-image-container">
                        <img 
                            src={levelchange}
                            alt="Gameplay System"
                            loading="lazy"
                            className="project-image"
                        />
                    </div>
                </section>

                <section className="project-video">
                    <h2>Project Demo</h2>
                    <a href="https://www.youtube.com/watch?v=X3BMZSC4tEU" target="_blank" rel="noopener noreferrer" className="video-link">
                        Watch Project Video →
                    </a>
                </section>
            </div>
        </main>
    );
}