import React from 'react';
import './Navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FrontPage from '../frontpage/FrontPage';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

function NavBar() {
    return (
        <Router>
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/about">About Me</Link>
                                    </h3>
                                </div>
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/projects">My Projects</Link>
                                    </h3>
                                </div>
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/contact">Contact</Link>
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
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;