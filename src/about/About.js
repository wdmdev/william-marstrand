import React from 'react';

import aboutCSS from './About.css';

function About() {
    return(
        <div class="container">
            <h1 class="aboutmetext"> Academic Experience</h1>
            <br/>
            <h3 class="aboutmetext"> BSc Artificial Intelligence and Data Science @ Technical University of Denmark - 2018 to Now </h3>
            <p>
                Bachelor of Science in Artificial Intelligence, Machine Learning, and Data Science. Providing skills within programming, statistics, probability theory, computer science, signal processing, cognitive science, active learning, and ML techniques e.g. linear regression, clustering algorithms, deep learning, and reinforcement learning.
            </p>
            <h3 class="aboutmetext"> BSc Software Development @ IT University of Copenhagen - 2014 to 2018 </h3>
            <p>
                Bachelor of Science in software development. Providing skills within programming, software architecture design, analyzing, designing and applying algorithms, agile development, and project management.
            </p>

            <br/><br/><br/>
            <h1 class="aboutmetext"> Work Experience </h1>
            <br/>
            <h3 class="aboutmetext"> Junior Data Scientist @ Save the Children Denmark - 2019 to Now </h3>
            <p>
                Working with donor data in the fundraising department. Mining data from Microsoft Dynamics CRM using SQL. The data is used for data analysis in Power BI and machine learning applications mainly in Python. Work with areas such as general data mining, preparation, and cleaning, donor churn minimization/prevention, SMS donation analysis and optimization, email response rate analysis and optimization. 
            </p>
            <h3 class="aboutmetext"> Co-founder and Board Member @ Neural AI - 2018 to Now </h3>
            <p>
                <a href="https://www.neural-ai.dk" class="show_link">Neural AI</a> is a student driven organization with the goal of creating a leading Danish AI hub connected with the rest of the World's leading AI communities.
            </p>
            <h3 class="aboutmetext"> Software Developer @ Save the Children Denmark - 2016 to 2019 </h3>
            <p>
                Creating the data pipeline for the fundraising department. Working with C# .NET to create and maintain a REAT Web API for data going in and out of Microsoft Dynamics CRM. Besides this the work consisted of monitoring, expanding, and maintaining the Microsoft Dynamics CRM solutions e.g. by workflows and plug-ins. A part from this different ad hoc programming tasks were part of the work such as creating small scripts for data cleaning or applications for cleaning and moving data around.
            </p>
            <h3 class="aboutmetext"> Teaching Assistant in Business Process and Organization @ IT University of Copenhagen  - 2017 </h3>
            <p>
                The work consited of guiding groups of students who worked with companies to perform an IT Design-Project.
                This among other things included analyzing business models, value chains and IT-Strategies together with creating a business case for the company.
            </p>
        </div>
    );
}

export default About;
