import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Blog() {
    return (
        <section id="blog" className="dark-bg">
            <h5 className="gray">Blog Posts</h5>
            <div className="flex">
                <div className="flex-full">
                    <PostCard
                        title="Post 1"
                        icon="/icons/beaker.svg"
                        description="Placeholder ..."
                        />
                    <PostCard
                        title="Post 2"
                        icon="/icons/blog.svg"
                        description="Placeholder ..."
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