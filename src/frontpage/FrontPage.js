import React from 'react';
import './FrontPage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

function FrontPage() {
    return (
        <Router>
            <div className="container body">
                <div className="row">
                    <div className="col-sm">
                        <Link to="/about">
                            <h1 className="mytext">About Me</h1>
                            <img src="./about_me_1000.jpg" alt="test img" className="firstimg" />
                        </Link>
                    </div>
                    <div className="col-sm">
                        <Link to="/projects">
                            <h1 className="mytext">My Projects</h1>
                            <img src="./mountain_sunset_1000.jpg" alt="test img" className="firstimg" />
                        </Link>
                    </div>
                    <div className="col-sm">
                        <Link to="/contact">
                            <h1 className="mytext">Contact</h1>
                            <img src="./contact_1000.jpg" alt="test img" className="firstimg" />
                        </Link>
                    </div>
                </div>
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
            </Switch>
        </Router>
    );
}

export default FrontPage;