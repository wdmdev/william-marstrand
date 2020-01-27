import React from 'react';
import './FrontPage.css';

function FrontPage() {
    return (
        <div class="container body">
            <div class="row">
                <div class="col-sm align-self-center">
                    <h1 class="my-text">About Me</h1>
                    <img src="./about_me.jpg" alt="test img" class="firstimg" />
                </div>
                <div class="col-sm">
                    <h1 class="my-text">My Projects</h1>
                    <img src="./mountain_sunset.jpg" alt="test img" class="firstimg" />
                </div>
                <div class="col-sm">
                    <h1 class="my-text">Contact</h1>
                    <img src="./contact.jpg" alt="test img" class="firstimg" />
                </div>
            </div>
        </div>
    );
}

export default FrontPage;