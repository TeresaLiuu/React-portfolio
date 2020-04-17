import React from 'react';
import './style.css';

function AboutMe() {
    return (
        <div>
            <section className="content-section bg-light" id="about">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>About Me</h2>
                            <p className="lead mb-5">
                                I am originally from Taiwan, came here to Seattle in 2018 to explore the world.
                            <br />
                            While exploring, I found my passion in computer programming.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;