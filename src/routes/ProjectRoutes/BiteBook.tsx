import homepage from "@/static/project-images/HomePic.png";
import additem from "@/static/project-images/Add Item.png";
import sortby from "@/static/project-images/Sort By.png";
import namechange1 from "@/static/project-images/Name Change.png";
import namechange2 from "@/static/project-images/NameTroyChange.png";
import change from "@/static/project-images/NameChangeAndDarkMode.png";
import darkmode from "@/static/project-images/DarkMode.png";
import analysis from "@/static/project-images/SmartSuggestions.png";
import "@/routes/ProjectRoutes/styles/bite.css"

export function BiteBookRoute() {
    return (
        <main className='project-detail-page'>
            <a href="/projects" className="sticky-nav-button">
                Back to Projects
            </a>

            <div className='project-detail-header'>
                <h1>BiteBook</h1>
            </div>

            <div className='project-detail-container'>
                <section className="project-summary">
                    <h2>Project Summary</h2>
                    <p>
                        A grocery tracking application that monitors expiration dates to help reduce grocery spending 
                        and minimize food waste. Bite Book helps users stay organized and make the most of their groceries.
                    </p>
                </section>

                <section className="project-single-image">
                    <h2>Home Page</h2>
                    <div className="single-image-container">
                        <img 
                            src={homepage}
                            alt="Home Page"
                            loading="lazy"
                            className="project-image"
                        />
                    </div>
                </section>

                <section className="project-dual-images">
                    <h2>Item Management</h2>
                    <div className="dual-images-grid">
                        <div className="dual-image-container">
                            <img 
                                src={additem}
                                alt="Add Item"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                        <div className="dual-image-container">
                            <img 
                                src={sortby}
                                alt="Sort By"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="project-dual-images">
                    <h2>Name Change</h2>
                    <div className="dual-images-grid">
                        <div className="dual-image-container">
                            <img 
                                src={namechange1}
                                alt="Name Change Step 1"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                        <div className="dual-image-container">
                            <img 
                                src={namechange2}
                                alt="Name Change Step 2"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="project-triple-images">
                    <h2>Dark Mode & Analysis</h2>
                    <div className="triple-images-grid">
                        <div className="triple-image-container">
                            <img 
                                src={change}
                                alt="Dark Mode Option"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                        <div className="triple-image-container">
                            <img 
                                src={darkmode}
                                alt="Main Menu with Dark Mode"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                        <div className="triple-image-container">
                            <img 
                                src={analysis}
                                alt="Analysis Page"
                                loading="lazy"
                                className="project-image"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}