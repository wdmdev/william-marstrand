import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Blog() {
    return (
        <section id="blog" className="dark-bg blogs">
            <h5 className="gray">Blog Posts</h5>
            <div className="flex">
                <div className="flex-full">
                    {/* <PostCard
                        title="Post 1"
                        icon="/icons/beaker.svg"
                        description="Placeholder ..."
                        />
                    <PostCard
                        title="Post 2"
                        icon="/icons/blog.svg"
                        description="Placeholder ..."
                         /> */}
                </div>
            </div>

        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string
}

function PostCard ({title, icon, description} : Props) {
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