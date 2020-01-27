import React from 'react';
import './Navbar.css';

function NavBar() {
    return (
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <h3>
                                    <a href=".">About Me</a>
                                </h3>
                            </div>
                            <div className="col-sm">
                                <h3>
                                    <a href=".">My Projects</a>
                                </h3>
                            </div>
                            <div className="col-sm">
                                <h3>
                                    <a href=".">Contact</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="logo">
                    <p className="logo-text">Significa</p>
                    <img src="./logo.png" width="5%" alt="logo" className="logo-img" />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;