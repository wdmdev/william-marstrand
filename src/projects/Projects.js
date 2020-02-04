import React from 'react';
import ProjectThumb from '../projectThumb/ProjectThumb';

function Projects() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <ProjectThumb href="https://github.com/wdmdev/Copenhacks2019"
                                    src="./copenhacks_github.png"
                                    text="Winner of Copenhack 2019"/>
                </div>
                <div className="col-sm">
                    <ProjectThumb href="https://github.com/wdmdev/ASL-image-recognition"
                                    src="ASL_github.jpg"
                                    text="Recognizing ASL-Letters"
                                    />
                </div>
                <div className="col-sm">
                    <ProjectThumb href="https://github.com/wdmdev/valhacks2019"
                                    src="smart_cantine_github.png"
                                    text="Valhacks 2019 Contester"
                                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;