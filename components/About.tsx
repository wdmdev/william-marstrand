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
                        description="I generate real life value from data."
                        link="/Projects" />
                    <AboutCard
                        title="Blog"
                        icon="/icons/blog.svg"
                        description="I share my passion for data and machine learning."
                        link="/Blog" />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Intro</h5>
                    <h2 className="white">Hello, I&#39;m William Marstrand</h2>
                    <Code language="python">
{`def get_info():
    my_info = {
        "profession": "ML & Data Engineer",
        "experience_years": 7,
        "skills": ["data modeling", "data mining",
                    "analytics", "software development", 
                    "problem solving", "collaboration"]
    }
    return my_info`}
                    </Code>
                </div>
            </div>

            {/* <div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div> */}
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