import React from "react";
import NavSub from "../navbar/navSub";
import "./upload.css"


function Uploader() {

    return (

        <div>

            <NavSub />

            <div className="upload-section">
                <h2>
                    Upload your file Here!
                    <img id="upload-bird" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-bird-st-patrick-day-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="" />

                </h2>


                <div className="uk-container functions">

                    <div className="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid="true">
                        <div>
                            <div className="uk-card upload-card uk-card-default uk-card-body uk-card-hover">

                                {/* <h3 className="uk-card-title upload-title" > <img src="https://img.icons8.com/color/48/000000/csv.png" alt="" /> One at a time! </h3> */}
                                {/* <img alt="" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-upload-business-and-teamwork-flatart-icons-outline-flatarticons.png"/> */}


                                <div class="drag-area">
                                    <div class="icon"> <img alt="" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-upload-business-and-teamwork-flatart-icons-outline-flatarticons.png"/> </div>
                                    <header>Drag & Drop to Upload File</header>
                                    <span>OR</span>
                                    <button>Browse File</button>
                                    <input type="file" hidden name="filename"/>
                                </div>

                            </div>
                        </div>
                        {/* <div>
     <button class="uk-button uk-button-danger">Danger</button>
    </div> */}
                    </div>


                </div>

            </div>


        </div>

    )

}


export default Uploader;