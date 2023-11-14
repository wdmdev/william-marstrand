import React from "react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div className="inner-cover"> </div>
            </div>
        </header>
    )
}