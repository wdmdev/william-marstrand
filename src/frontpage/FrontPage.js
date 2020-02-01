import React from 'react';
import './FrontPage.css';

function FrontPage() {
    return (
        <div className="container body">
            <div className="row">
                <div className="col-sm">
                    <h1 className="mytext">About Me</h1>
                    <img src="./about_me_1000.jpg" alt="test img" className="firstimg" />
                </div>
                <div className="col-sm">
                    <h1 className="mytext">My Projects</h1>
                    <img src="./mountain_sunset_1000.jpg" alt="test img" className="firstimg" />
                </div>
                <div className="col-sm">
                    <h1 className="mytext">Contact</h1>
                    <img src="./contact_1000.jpg" alt="test img" className="firstimg" />
                </div>
            </div>
        </div>
    );
}

export default FrontPage;