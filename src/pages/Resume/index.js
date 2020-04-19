import React from 'react';
import './style.css';


function Resume() {
    return (
        <div>
            <h2 className="text-center">My skills</h2>
            <div id="container">
                <img id="tree" src={require("../../assets/treeRoot.png")} alt="Snow" width="100%;" />
                {/* <li id="test" className="list-group-item centered" ></li>
                <li id="test2" className="list-group-item centered"></li>
                <li id="test3" className="list-group-item centered"></li>
                <li id="test4" className="list-group-item centered"></li>
                <li id="test5" className="list-group-item centered"></li>
                <li id="test6" className="list-group-item centered"></li> */}
            </div>
            <h1 className="text-center">Resume</h1>
            <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vRK5OZBAAb1Bxinu1fbzrOMghM7PPk5Q1mPho_E0ui8CVt4lQK7qALDyPi1hmrbSwsEq94aEAlZtQa-/pub?embedded=true"
                width="750px"
                height="800px"
                id="resume"
                title="Resume"
                className="mx-auto"
            ></iframe>
        </div>

    )
}

export default Resume;