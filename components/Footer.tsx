import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">William Marstrand</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/william-marstrand-07725aa2/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={48} height={48} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/wdmdev" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={48} height={48} alt="github-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}