import React from 'react';
import './ProjectThumb.css';

function ProjectThumb(props){
    return (
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <h1 className="mytext">{props.text}</h1>
                <img className="myimg" src={props.src} alt={props.alt} />
            </a>
    );
}

export default ProjectThumb;