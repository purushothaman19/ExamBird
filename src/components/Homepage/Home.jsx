import React from "react";
import Navbar from "../navbar/navbar";
import BackToTop from "./TotopButton";
import Functions from "./function/function";
import Info from "./info/Information";

function Home() {

    return (
        <div className="Home">
            <Navbar/>
            <Functions />
            <BackToTop/>
            <Info/>
        </div>
    );
}

export default Home;
