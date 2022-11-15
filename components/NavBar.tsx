import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/william-marstrand">William Marstrand</Link>
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