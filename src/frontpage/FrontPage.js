import React from 'react';
import './FrontPage.css';

function FrontPage() {
    return (
        <div class="container">
            <div class="row align-middle">
                <div class="h-100 col-sm">
                    <h1>About Me</h1>
                    <img src="./about_me.jpg" alt="test img" class="firstimg" />
                </div>
                <div class="col-sm">
                    <h1>My Projects</h1>
                    <img src="./mountain_sunset.jpg" alt="test img" class="firstimg" />
                </div>
                <div class="col-sm">
                    <h1>Contact</h1>
                    <img src="./contact.jpg" alt="test img" class="firstimg" />
                </div>
            </div>
        </div>
    );
}

export default FrontPage;