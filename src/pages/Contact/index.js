import React from 'react';
import './style.css';

function Contact() {
    return (
        <div>
            <section className="content-section text-center" id="services">
                <div className="container">
                    <div className="content-section-heading">
                        <h2 id="contactme" className="mb-5 ">Contact Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <a href="https://www.linkedin.com/in/teresaliutl/" className="fab fa-linkedin fa-4x" target="_blank"></a>
                            <span />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <a href="https://github.com/TeresaLiuu" className="fab fa-github fa-4x" target="_blank"></a>
                            <span />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
                            <a href="mailto:kuas033@gmail.com" className="far fa-envelope fa-4x" target="_top"></a>
                            <span />
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Contact;