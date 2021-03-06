import React from 'react';
import './style.css';



function Project() {
    return (
        <div>
            <section className="content-section">
                <div id="project2" className="container" name="project">
                    <div className="content-section-heading text-center">
                        <h2 className="text-secondary mb-0">Check Out My<br />Recent Projects</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="https://github.com/andreathomas19460/github.io-SushiMe" target="_blank">
                                
                                <h2 className="text-center">Sushi Me</h2>
                                <img className="img-fluid" src={require("../../assets/sushime.png")} alt="project" ></img>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="https://github.com/TeresaLiuu/Burger" target="_blank">
                                
                                <h2 className="text-center">Eat The Burger</h2>
                                <img className="img-fluid" src={require("../../assets/burger.png")} alt="project" ></img>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="https://github.com/TeresaLiuu/CodeQuiz" target="_blank">
                                
                                <h2 className="text-center">Code Quiz</h2>
                                <img className="img-fluid" src={require("../../assets/codeQuiz1.png")} alt="project" ></img>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="https://github.com/FrantzCFelix/Eventify-your-map" target="_blank">
                                <h2 className="text-center">Eventify Your Map</h2>
                                <img className="img-fluid" src={require("../../assets/eventifyYourMap.png")} alt="project"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;