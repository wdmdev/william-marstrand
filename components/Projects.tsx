import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="dark-bg">
            <div className="flex-full">
                <h5 className="gray">Projects</h5>
                <h2 className="white">Highlighted Projects</h2>
                <div>
                    <ProjectCard
                        title="Babelfish"
                        icon="/icons/beaker.svg"
                        description="StarGANv2-VC for language translation and Voice Conversion to preserve speaker characteristics in the translation"
                        link="https://github.com/wdmdev/Babelfish"
                        />
                    <ProjectCard
                        title="TGML"
                        icon="/icons/beaker.svg"
                        description="Scalable Machine Learning for Temporal Dynamic Graphs"
                        link="https://github.com/wdmdev/TGML"
                        />
                    <ProjectCard
                        title="Harry Potter Network Analysis"
                        icon="/icons/beaker.svg"
                        description="Network analysis of the Harry Potter books and the r/harrypotter subreddit"
                        link="https://wdmdev.github.io/comsocsci2021-project/#/"
                         />
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

function ProjectCard ({title, icon, description, link} : Props) {
    return(
        <Link href={link}>
            <a>
                <div className="light-bg project-card">
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