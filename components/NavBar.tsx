import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <div>
                    <button>Data Scientist</button>
                </div>
                <Link href="/william-marstrand">William Marstrand</Link>
                <div >
                    <a className="green" href="mailto:wdmdevelop@gmail.com">Let&#39;s chat!</a>
                </div>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/william-marstrand">{"< Home />"}</Link>
                </li>
                <li>
                    <Link href="/#about">About Me.</Link>
                </li>
            </ul>
        </nav>
    )
}