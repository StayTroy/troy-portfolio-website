import { Page } from '@/components/Page/Page'
import { PageChange } from '@/components/PageChange/PageChange'
import backward from "@/static/logos/remotebackwardoutline-svgrepo-com.svg";
import "@/routes/styles/hobbies.css"

export function HobbiesRoute(){
    return (
        <main className='hobby-section'>
            <div className='hobby-title'>
                <h1>Hobbies</h1>
            </div>
            <Page>
                <div className="hobbies-content">
                    <section className="hobby-item">
                        <h3>Volleyball</h3>
                        <p>I enjoy playing volleyball and staying active, whether it's casual games with friends or more competitive matches.</p>
                    </section>

                    <section className="hobby-item">
                        <h3>Anime & Movies</h3>
                        <p>I love watching anime and films, exploring different genres and stories that spark creativity and inspiration.</p>
                    </section>

                    <section className="hobby-item">
                        <h3>Reading</h3>
                        <p>Reading keeps me learning and growing, whether it's fiction, technical books, or articles on topics I'm curious about.</p>
                    </section>

                    <section className="hobby-item">
                        <h3>Collecting Cool Socks</h3>
                        <p>I have a growing collection of unique and fun socks – it's a small way to add personality to everyday life.</p>
                    </section>
                </div>
            </Page>
            <PageChange
                link="/projects"
                icon={backward}
            />
        </main>
    );
}