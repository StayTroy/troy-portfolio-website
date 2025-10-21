import { Link } from "react-router-dom";
import systemdesign from "@/static/project-images/system-design.png";
import homepage from "@/static/project-images/home-page.png";
import newtransport from "@/static/project-images/new-transport.png";
import pasttransport from "@/static/project-images/past-transport.png";
import sharedreports from "@/static/project-images/shared-reports.png";
import teamrpm from "@/static/project-images/team-rpm.jpg";
import "@/routes/ProjectRoutes/styles/vehicle.css"

export function VehicleDamageLoggerRoute() {
    return (
        <main className='project-detail-page'>
            <Link to="/projects" className="sticky-nav-button">
                Back to Projects
            </Link>

            <div className='project-detail-header'>
                <h1>Machine Learning Vehicle Damage Logger</h1>
            </div>

            <div className='project-detail-container'>
                <section className="project-summary">
                    <h2>Project Summary</h2>
                    <p>
                        An intelligent system that uses machine learning to automatically detect and log vehicle damage, 
                        streamlining the insurance claims process. The application leverages computer vision and deep learning 
                        to identify, classify, and document vehicle damage with high accuracy.
                    </p>
                </section>

                <section className="project-architecture">
                    <h2>System Architecture</h2>
                    <img 
                        src={systemdesign}
                        alt="System Architecture Diagram"
                        loading="lazy"
                        className="architecture-image"
                    />
                </section>

                <section className="project-screenshots">
                    <h2>Application Pages</h2>

                    <div className="screenshots-grid">
                        <div className="screenshot-container">
                            <img 
                                src={homepage}
                                alt="Main Dashboard"
                                loading="lazy"
                                className="screenshot-image"
                            />
                        </div>
                        <div className="screenshot-container">
                            <img 
                                src={newtransport}
                                alt="Page 2"
                                loading="lazy"
                                className="screenshot-image"
                            />
                        </div>
                        <div className="screenshot-container">
                            <img 
                                src={pasttransport}
                                alt="Page 3"
                                loading="lazy"
                                className="screenshot-image"
                            />
                        </div>
                        <div className="screenshot-container">
                            <img 
                                src={sharedreports}
                                alt="Page 4"
                                loading="lazy"
                                className="screenshot-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="project-additional">
                    <h2>Winner of the Design Day MSU Federal Credit Union Praxis Award</h2>
                    <div className="additional-container">
                        <img 
                            src={teamrpm} 
                            alt="Additional Project Image"
                            loading="lazy"
                            className="additional-image"
                        />
                    </div>
                </section>

                <section className="project-video">
                    <h2>Project Demo</h2>
                    <a href="https://www.youtube.com/watch?v=j_ABxmNevew" target="_blank" rel="noopener noreferrer" className="video-link">
                        Watch Project Video →
                    </a>
                </section>
            </div>
        </main>
    );
}