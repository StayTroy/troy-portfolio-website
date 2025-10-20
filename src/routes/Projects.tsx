import { Page } from '@/components/Page/Page'
import { PageChange } from '@/components/PageChange/PageChange'
import backward from "@/static/logos/remotebackwardoutline-svgrepo-com.svg";
import forward from "@/static/logos/remoteforwardoutline-svgrepo-com.svg";
import "@/routes/styles/projects.css"

export function ProjectsRoute()
{
    return (
        <main className='project-section'>
            <div className='project-title'>
                <h1>Projects</h1>
            </div>

            <Page>
                <div className="projects-content">
                    <section className="project-item">
                        <h3>
                            <a href="/projects/vehicle-damage-logger">
                                Machine Learning Vehicle Damage Logger
                            </a>
                        </h3>
                        <p>An intelligent system that uses machine learning to automatically detect and log vehicle damage, streamlining the insurance claims process.</p>
                    </section>

                    <section className="project-item">
                        <h3>
                            <a href="/projects/bite-book">
                                Bite Book
                            </a>
                        </h3>
                        <p>A grocery tracking application that monitors expiration dates to help reduce grocery spending and minimize food waste.</p>
                    </section>

                    <section className="project-item">
                        <h3>
                            <a href="/projects/spartan-hero">
                                Spartan Hero
                            </a>
                        </h3>
                        <p>A rhythm-based game inspired by Guitar Hero where players match keyboard keys with falling notes across different levels and songs.</p>
                    </section>
                </div>
            </Page>

            <div className="page-change-container left">
                <PageChange
                    link="/"
                    icon={backward}
                />
            </div>
            <div className="page-change-container right">
                <PageChange
                    link="/hobbies"
                    icon={forward}
                />
            </div>
        </main>
    );
}