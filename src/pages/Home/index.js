import React from 'react';
import './style.css';
import AboutMe from '../../components/AboutMe';

function Home() {
    return (
        <div>
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">Teresa Liu</h1>
                    <h3 className="mb-5">
                        <em>Email: kuas033@gmail.com</em>
                    </h3>
                </div>
                <div className="overlay"></div>
            </header>
            <AboutMe />
        </div>
    )
};

export default Home;