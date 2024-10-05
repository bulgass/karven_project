import React from "react";
import { Link } from "react-router-dom";
import './materials.css';
import htmlicon from "../../../assets/materials/htmlicon.png";
import cssicon from "../../../assets/materials/cssicon.png";
import jsicon from "../../../assets/materials/jsicon.png";
import pythonLogo from "../../../assets/materials/pythonLogo.png";
import cppLogo from "../../../assets/materials/cppLogo.png";
import dockerLogo from "../../../assets/materials/dokerLogo.png";

const Materials = () => {
    return (
        <div className="materials-container">
            <h1>Materials</h1>
            <div className="cards-container"> 
                <Link to="/materials/html" className="card">
                    <div className="html-card">
                        <img src={htmlicon} width={100} height={100} />
                        <h2>HTML</h2>
                    </div>
                </Link>
                <Link to="/materials/css" className="card">
                    <div className="css-card">
                        <img src={cssicon} width={110} height={100} />
                        <h2>CSS</h2>
                    </div>
                </Link>
                <Link to="/materials/javascript" className="card">
                    <div className="js-card">
                        <img src={jsicon} width={100} height={100} />
                        <h2>JavaScript</h2>
                    </div>
                </Link>
                <Link to="/materials/python" className="card">
                    <div className="python-card">
                        <img src={pythonLogo} width={100} height={100} />
                        <h2>Python</h2>
                    </div>
                </Link>
                <Link to="/materials/Cpp" className="card">
                    <div className="cpp-card">
                        <img src={cppLogo} width={100} height={100} />
                        <h2>C++</h2>
                    </div>
                </Link>
                <Link to="/materials/docker" className="card">
                    <div className="cpp-card">
                        <img src={dockerLogo} width={150} height={100} />
                        <h2>Docker</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Materials;
