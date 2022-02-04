import React from "react";
import NavSub from "../navbar/navSub";
import "./Register.css";

function Register() {


    return (

        <div>

            <NavSub />
            <section id="register-section">

                <div className="register-form">
                    <form>
                    <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-bird-spring-season-justicon-lineal-color-justicon.png" alt=""/>                    <h3> Register </h3>

                        <p className="suggestion"> Already have an account? <a href="/login"> Login </a> here! </p>

                        <div className="uk-margin">
                            <div className="uk-inline">
                                <span className="uk-form-icon" uk-icon="icon: user"></span>
                                <input className="uk-input" type="text" title="username" placeholder="username" required/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-inline">
                                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                <input className="uk-input" type="email" title="email" placeholder="email" required/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-inline">
                                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                <input className="uk-input" type="password" title="key" placeholder="key" required/>
                            </div>
                        </div>

                        <button className="uk-button uk-button-danger" type="submit" id="submit"> Register </button>
                    </form>

                </div>

            </section>

        </div>

    )


}

export default Register;