import React from 'react';
import ProjCSS from './Projects.css';

//Images
import github from './images/GitHub-Mark-Light-120px-plus.png';
import ml_proj1 from './images/ML_proj_1.png';
import ml_proj2 from './images/ML_proj_2.png';
import ml_proj3 from './images/ML_proj_3.png';
import copenhacks from './images/copenhacks_github.png';
import asl from './images/ASL_github.jpg';
import valhacks from './images/smart_cantine_github.png';

function Projects() {
    return(
        <div class="container">
            <div class="row description">
                <div class="col-sm">
                    <p class="text-left float-left">
                        I love expanding my knowledge and putting my mind to work. <br/>If you want to see most of my coding projects, you can find them on my GitHub account, by following the image-link to the right. To save you some time I have made a collection of my own favorites which you can find below.
                    </p>
                <div class="float-right logo">
                    <a href="https://github.com/wdmdev">
                        <img src={github} alt="github"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <a href="https://github.com/wdmdev/ML_proj_1" target="_blank" rel="noopener noreferrer">
                    <img class="myimg" src={ml_proj1}/>
                    <h1 class="mytext"> Data exploration and visualization</h1>
                </a>
            </div>
            <div class="col-sm">
                <a href="https://github.com/wdmdev/ML_proj_2" target="_blank" rel="noopener noreferrer">
                    <img class="myimg" src={ml_proj2}/>
                    <h1 class="mytext">Evaluating classification and regression models</h1>
                </a>
            </div>
            <div class="col-sm">
                <a href="https://github.com/wdmdev/ML_proj_3" target="_blank" rel="noopener noreferrer">
                    <img class="myimg" src={ml_proj3}/>
                    <h1 class="mytext">Clustering, anomaly detection, association mining</h1>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <a href="https://github.com/wdmdev/Copenhacks2019" target="_blank" rel="noopener noreferrer">
                    <img class="myimg" src={copenhacks}/>
                    <h1 class="mytext">Winner of Copenhack 2019</h1>
                </a>
            </div>
            <div class="col-sm">
                <a href="https://github.com/wdmdev/ASL-image-recognition" target="_blank" rel="noopener noreferrer">
                    <img class="myimg" src={asl}/>
                    <h1 class="mytext">Recognizing ASL-Letters</h1>
                </a>
            </div>
            <div class="col-sm">
                <a href="https://github.com/wdmdev/valhacks2019" target="_blank" rel="noopener noreferrer">
                    <img class="myimg" src={valhacks}/>
                    <h1 class="mytext">Valhacks 2019 Contester</h1>
                </a>
            </div>
        </div>
    </div>
    );
}

export default Projects;
