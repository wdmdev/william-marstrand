import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Data Scientist</button>
                    <h1 className="cover-text white">Model {'>'} Deploy {'>'} Monitor {'>'} Repeat</h1>
                    <a className="green" href="mailto:wdmdevelop@gmail.com">Let&#39;s chat!</a>
                </div>
            </div>
        </header>
    )
}