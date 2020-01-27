import React from 'react';
import './Navbar.css';

function NavBar() {
    return (
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <h3>
                                <a href="#">About Me</a>    
                                </h3>
                            </div>
                            <div class="col-sm">
                                <h3>
                                <a href="#">My Projects</a>    
                                </h3>
                            </div>
                            <div class="col-sm">
                                <h3>
                                <a href="#">Contact</a>    
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="logo">
                    <p class="logo-text">Significa</p>
                    <img src="./logo.png" width="5%" alt="logo" class="logo-img" />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;