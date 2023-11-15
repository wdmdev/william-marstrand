import React from "react";
import Link from "next/link";
import Code from "./IntroCode";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Projects"
                        icon="/icons/beaker.svg"
                        description="Modeling complexity in data-driven projects."
                        link="/william-marstrand/Projects" />
                    <AboutCard
                        title="Blog"
                        icon="/icons/blog.svg"
                        description="I share my passion for data and machine learning."
                        link="/william-marstrand/Blog" />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Intro</h5>
                    <h2 className="white">Hello, I&#39;m William Marstrand</h2>
                    <Code language="python">
{`def get_info():
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
            </div>

        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    link: string
}

function AboutCard ({title, icon, description, link} : Props) {
    return(
            <Link href={link}>
                <a>
                    <div className="light-bg about-card">
                        <div className="flex justify-space">
                            <h3 className="green">{title}</h3>
                            <Image src={icon} width={28} height={28} alt={title} />
                        </div>
                        <p className="white">{description}</p>
                    </div>
                </a>
            </Link>
    )
}