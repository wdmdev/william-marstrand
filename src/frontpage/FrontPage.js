import { Link } from "react-router-dom";
import React from 'react';
import './FrontPage.css';

function FrontPage() {
    return (
		<div className="container body">
			<div className="row">
				<div className="col-sm">
					<Link to="/about" replace>
						<h1 className="myfronttext">About Me</h1>
						<img src="./about_me_1000.jpg" alt="test img" className="firstimg" />
					</Link>
				</div>
				<div className="col-sm">
					<Link to="/projects" replace>
						<h1 className="myfronttext">My Projects</h1>
						<img src="./mountain_sunset_1000.jpg" alt="test img" className="firstimg" />
					</Link>
				</div>
				<div className="col-sm">
					<Link to="/contact" replace>
						<h1 className="myfronttext">Contact</h1>
						<img src="./contact_1000.jpg" alt="test img" className="firstimg" />
					</Link>
				</div>
			</div>
		</div>
    );
}

export default FrontPage;