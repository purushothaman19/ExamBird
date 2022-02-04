import React, { useState } from "react";
import NavSub from "../navbar/navSub";
import "./sparrow.css";


function Sparrow() {

    // const [numOfQues, setQuesLimit] = useState(0);

    return (
        <div>

            <NavSub />

            <section id="sparrow-section">

                <form class="uk-form-stacked sparrow-form">

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Text</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." />
                        </div>

                        <label class="uk-form-label" for="form-stacked-text">Text</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Select</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option> With Options </option>
                                <option> Without Options </option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-form-label">Radio</div>
                        <div class="uk-form-controls">
                            <label><input class="uk-radio" type="radio" name="radio1"/> Option 01</label><br></br>
                                <label><input class="uk-radio" type="radio" name="radio1"/> Option 02</label>
                        </div>
                    </div>

                </form>

            </section>

        </div>
    )

}


export default Sparrow