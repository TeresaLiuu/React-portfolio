import React from 'react';
import Iframe from 'react-iframe';
import { Document } from 'react-pdf';

function Resume() {
    return(
    <div>
        <section className="callout">
            <div className="container text-center">
                <h2 id="resume2" className="mx-auto mb-5">Resume</h2>
                <Iframe>
                    <Document
                    file="Teresa_Resume.pdf">
                    </Document>
                </Iframe>
                <a className="btn btn-xl" href="Teresa_Resume.pdf" download="Teresa_Resume.pdf">Download</a>
            </div>
        </section>
    </div>
    )
}

export default Resume;