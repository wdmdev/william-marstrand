import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space sticky-nav">
            <div>
                <div className="logo white">
                    <Link href="/william-marstrand">William Marstrand</Link>
                </div>
                <div>
                    <a className="green" href="mailto:wdmdevelop@gmail.com">wdmdevelop@gmail.com</a>
                </div>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/william-marstrand">{"< Home />"}</Link>
                </li>
                <li>
                    <Link href="/william-marstrand/#projects">Projects</Link>
                </li>
                <li>
                    <Link href="/william-marstrand/#about">About Me.</Link>
                </li>
            </ul>
        </nav>
    )
}