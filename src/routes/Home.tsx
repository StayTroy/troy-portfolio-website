import { Page } from '@/components/Page/Page'
import { HomeTitle } from '@/components/HomeTitle/HomeTitle';
import { PageChange } from '@/components/PageChange/PageChange'
import forward from "@/static/logos/remoteforwardoutline-svgrepo-com.svg";
import "@/routes/styles/home.css"

export function HomeRoute(){
    return (
        <main className='home-section'>
            <HomeTitle />

            <Page>
                <div className="about-content">
                    <h2 className="title">About Me</h2>
                    
                    <section className="intro">
                        <p>A software professional who finds fulfillment in solving problems at scale and building solutions that inspire others.</p>
                    </section>

                    <section className="background">
                        <h3><strong>Background</strong></h3>
                        <p>Born and raised in <strong>Detroit, Michigan</strong> — a city that taught me adaptability and resilience. I graduated from <strong>Michigan State University</strong>, where I learned to build solutions and take action.</p>
                    </section>

                    <section className="interests">
                        <h3><strong>What I Do</strong></h3>
                        <p>I enjoy building things and working in team settings where I can contribute to meaningful projects and learn from others.</p>
                    </section>
                </div>
            </Page>

            <PageChange
                link="/projects"
                icon={forward}
            />
        </main>
    );
}