import React from 'react';
import './Navbar.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import FrontPage from '../frontpage/FrontPage';

function NavBar() {
    return (
        <Router basename="/">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/projects" className="nav-link">My Projects</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm"></div>
            </nav>

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
                <Route path="/home">
                    <FrontPage />
                </Route>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;
