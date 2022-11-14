import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>ML & Data Engineer</button>
                    <h1 className="white">Under construction...</h1>
                    {/* <h1 className="white">Anyone can collect data.</h1>
                    <h1 className="white">But how do you utilize it?</h1>
                    <p className="gray">I produce real life value from data.</p> */}
                    <a className="green" href="mailto:wdmdevelop@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/..." width={463} height={513} alt="william"  /> 
            </div>
        </header>
    )
}