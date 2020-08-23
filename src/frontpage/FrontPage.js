import { Link } from "react-router-dom";
import React from 'react';
import './FrontPage.css';

//Images
import about from './images/about_me_1000.jpg';
import projects from './images/mountain_sunset_1000.jpg';
import contact from './images/contact_1000.jpg';

function FrontPage() {
    return (
		<div className="container body">
			<div className="row">
				<div className="col-sm">
					<Link to="/about" replace>
						<h1 className="myfronttext">About Me</h1>
						<img src={about} alt="test img" className="firstimg" />
					</Link>
				</div>
				<div className="col-sm">
					<Link to="/projects" replace>
						<h1 className="myfronttext">My Projects</h1>
						<img src={projects} alt="test img" className="firstimg" />
					</Link>
				</div>
				<div className="col-sm">
					<Link to="/contact" replace>
						<h1 className="myfronttext">Contact</h1>
						<img src={contact} alt="test img" className="firstimg" />
					</Link>
				</div>
			</div>
		</div>
    );
}

export default FrontPage;
