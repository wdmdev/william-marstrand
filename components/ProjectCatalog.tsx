import React from "react";
import Image, { StaticImageData } from "next/image";

export default function ProjectCatalog() {
    return (
        <section id="projects" className="dark-bg">
            <h5 className="gray">Projects</h5>
            <div className="flex">
                <div className="flex-full">
                    <ProjectCard
                        title="P1"
                        icon="/icons/beaker.svg"
                        description="I generate real life value from data."
                        />
                    <ProjectCard
                        title="P2"
                        icon="/icons/blog.svg"
                        description="I share my passion for data and machine learning."
                         />
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
    description: string
}

function ProjectCard ({title, icon, description} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
        </div>
    )
}