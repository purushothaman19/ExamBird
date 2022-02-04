import React from "react";
import "./Information.css";


function Info(params) {

    return (
        <section className="Info" >


            <div className="uk-container">

                <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true">

                    <div style={{ "padding": "6%" }}>

                        <p id="desc-text"> "ExamBird site has been developed for a special purpose that users can test
                            themselves by their own <span style={{ "color": "cornflowerblue" }}> question (csv) files." </span> </p>

                        <div className="uk-child-width-1-1@m uk-grid-match" uk-grid="true">

                            <div>
                                <p id="author" style={{ "textAlign": "end", "color":"cornflowerblue" }}>~ Purushothaman G </p>
                            </div>

                            <div className="social-section">
                                <ul id="social">
                                    <li> <a href="http://github.com/purushothaman19" target="_blank"> <button className="uk-button uk-button-text"> Github </button>  </a></li>
                                    <li> <a href="http://purusholio.herokuapp.com" target="_blank"> <button className="uk-button uk-button-text"> website </button>  </a> </li>

                                </ul>
                            </div>

                        </div>

                    </div>

                    <div>
                        <div id="info-card" className="uk-card info-card uk-card-default uk-card-body">
                            <h1 className="info-title">
                                <img id="info-logo" alt="" src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-bird-st-patrick-day-vitaliy-gorbachev-blue-vitaly-gorbachev.png" />
                                ExamBird

                            </h1>
                            <span id="copywrite-text"> 	&copy; ExamBird 2022 </span>
                        </div>
                    </div>

                </div>


            </div>


        </section>
    )

}

export default Info;