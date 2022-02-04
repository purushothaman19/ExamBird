import React from "react";
import NavSub from "../navbar/navSub";
import "./create.css"

function Create() {

    return (
        <div>

            <NavSub />

            <section id="create-section" >

                <div className="uk-container">

                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid="true">

                        <div>
                            <div className="uk-card uk-card-default create-card  uk-card-body uk-card-hover">
                                <img style={{"width":"12%"}} alt="" src="https://img.icons8.com/fluency/48/000000/bird.png" />
                                <h3 className="uk-card-title" id="sparrow"> Sparrow </h3>

                                <div>
                                    <ul class="uk-list uk-list-disc uk-list-primary ul-sparrow">
                                        <li> Short Test </li>
                                        <li> 20 questions(Max) </li>
                                        <li> Can't save data </li>
                                        <li> Non-resuable </li>
                                    </ul>
                                </div>

                                <button class="uk-button uk-button-s-create"> <a href="/create/sparrow" target='_blank'> Create Sparrow </a> </button>    

                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default create-card ostrich-card uk-card-body uk-card-hover">
                                <img alt="" src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/000000/external-animal-animal-kingdom-vol2-microdots-premium-microdot-graphic-20.png" />                               
                                <h3 className="uk-card-title" > Ostrich </h3>
                                <div>
                                    <ul class="uk-list uk-list-disc uk-list-primary">
                                        <li> Big Test </li>
                                        <li> 200 questions(Max) </li>
                                        <li> Can save Data </li>
                                        <li> Reusable </li>
                                    </ul>
                                </div>
                                <button class="uk-button uk-button-o-create"> <a href="/create/ostrich" target='_blank'> Create Ostrich </a> </button>    

                            </div>
                        </div>
                    </div>


                </div>

            </section>

        </div>
    )

}


export default Create;