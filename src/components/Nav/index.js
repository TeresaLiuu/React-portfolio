import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  shadow fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                to="/"
                                className={
                                    window.location.pathname === '/' ||
                                    window.location.pathname === '/about'
                                      ? 'nav-link active'
                                      : 'nav-link'
                                }>Projects</Link>
                                {/* <a id="project" className="nav-link" href="#">Projects</a> */}
                            </li>
                            <li className="nav-item">
                                <a id="resume" className="nav-link" href="#">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a id="contact" className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;

