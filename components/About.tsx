import React from "react";
import Code from "./IntroCode";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function About() {
    return (
         <section id="about" className="dark-bg">
            <div className="flex">
                <div className="white profile-picture flex column">
                    <Image 
                        src="/images/profile.jpg" 
                        alt="William Marstrand"
                        width={250} 
                        height={250} 
                        className="border-radius" 
                    />
                    <div className="flex justify-space profile-refs">
                            <a href="https://www.linkedin.com/in/william-marstrand-07725aa2/" target="_blank" rel="noreferrer">
                                <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                            </a>
                        <p>&nbsp;|&nbsp;</p>
                            <a href="https://github.com/wdmdev" target="_blank" rel="noreferrer">
                                <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                            </a>

                    </div>
                </div>
                <div className="flex-full about-text">
                    <h5 className="gray">Intro</h5>
                    <h2 className="white">Hello, I&#39;m William Marstrand</h2>
                    <br />
                    <div className="white">
                        <p>A master's student in mathematical modeling and computation at <a className="green" href="https://www.dtu.dk/english/education/graduate/msc-programmes/mathematical-modelling-and-computation">The Technical University of Denmark (DTU)</a>.</p>
                        <br />
                        <p>I am a dedicated data enthusiast, blending academic expertise in Mathematical Modeling and Computation
                            with practical experience in machine learning and software development. 
                            My academic background includes a Bachelor's and Master's Degree specializing in Machine Learning and Data Science, 
                            with a strong focus on statistical ML methods, deep learning, Bayesian ML, and optimization techniques.</p>
                        <br />
                        <p>
                            Previously, I have worked as a junior data scientist at the fundraising department of <a className="green" href="https://redbarnet.dk/om-red-barnet/">Save the Children Denmark</a> and later as a junior data scientist at <a className="green" href="https://theorg.com/">The Org</a>.
                             My projects have included building data pipelines, automating preprocessing and feature extraction, and developing predictive models to support data-driven solutions.
                            </p>
                        <br /> 
                        <p>My passion is to use data science to solve practical problems and I'm always seeking new opportunities for growth and collaboration in this ever-evolving field.</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="center flex">
            <Code language="python">
{`def get_quick_info():
    my_info = {
        "profession": "Data Scientist",
        "education": "M.Sc. in Mathematical Modeling and Computation",
        "coding_since": 2014,
        "skills": ["machine learning", "MLOps",
                    "data modeling", "data mining",
                    "analytics", "software development"],
    }
    return my_info`}
            </Code>
            </div>
        </section>
    )
}
