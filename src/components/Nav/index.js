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
                                <Link to="/home" id="project" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" id="project" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" id="resume" className="nav-link">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" id="contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;

