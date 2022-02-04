import React from "react";
import NavSub from "../navbar/navSub";
import "./Login.css";

function Login() {


    return (

        <div>

            <NavSub />
            <section id="login-section">

                <div className="login-form">
                    <form>
                    <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-bird-animal-squad-victoruler-linear-colour-victoruler.png" alt=""/>
                    <h3> Login </h3>
                    <p className="suggestion"> Don't have an account? <a href="/register"> Create </a> yourself here! </p>
                        <div className="uk-margin">
                            <div className="uk-inline">
                                <span className="uk-form-icon" uk-icon="icon: user"></span>
                                <input className="uk-input" type="text" title="username" placeholder="username" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-inline">
                                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                <input className="uk-input" type="password" title="key" placeholder="key" autoComplete="false" required/>
                            </div>
                        </div>

                        <button className="uk-button uk-button-danger" type="submit" id="submit">Login</button>
                    </form>

                </div>

            </section>

        </div>

    )


}

export default Login;