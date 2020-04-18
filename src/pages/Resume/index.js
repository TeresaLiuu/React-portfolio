import React from 'react';
import './style.css';


function Resume() {
    return (
        <div>
            <div id="container">
                <img id="tree"src={require("../../assets/treeRoot.png")} alt="Snow" width="100%;" />
                <li  id="test" class="list-group-item centered">test1</li>             
                <li  id="test2" class="list-group-item centered">test2</li>
                <li  id="test3" class="list-group-item centered">test3</li>
                <li  id="test4" class="list-group-item centered">test4</li>             
                <li  id="test5" class="list-group-item centered">test5</li>
                <li  id="test6" class="list-group-item centered">test6</li>
                
            </div>
        </div>

    )
}

export default Resume;