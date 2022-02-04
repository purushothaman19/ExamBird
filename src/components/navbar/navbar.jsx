import React from "react";
import Feature from "../Homepage/features/Feature";
import "./navbar.css";

export default class Navbar extends React.Component {

  componentDidMount() {
    const Ulkitscript1 = document.createElement("script");
    Ulkitscript1.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js";
    Ulkitscript1.async = true;

    const Ulkitscript2 = document.createElement("script");
    Ulkitscript2.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js";
    Ulkitscript2.async = true;

    document.body.appendChild(Ulkitscript1);
    document.body.appendChild(Ulkitscript2);

  }




  render() {


    return (

      <div className="uk-section-primary uk-preserve-color">

        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">

            <nav className="uk-navbar-container">
              <div className="uk-container uk-container-expand">
                <div uk-navbar="true">

                  <ul className="uk-navbar-nav">

                    <li className="uk-active">

                      <a href="/" id="logo-a">
                        <img
                          id="icon"
                          src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-bird-st-patrick-day-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                          alt=""
                        />
                        ExamBird
                      </a>

                    </li>

                    <li><a id="login-button" className="disable-padding" href="/login"> <button className="uk-button uk-button-text"> Login </button> </a></li>

                    <li><a id="register-button" href="/register"> <button className="uk-button uk-button-text"> Register </button> </a> </li>

                    <li><a id="register-button" className="disable-padding" href="/create"> <button className="uk-button uk-button-text"> Create </button> </a> </li>


                    {/* <li><a id="account-button" className="disable-padding" href="/account"> <button className="uk-button uk-button-text"> Account </button> </a> </li> */}
                    {/* <li><a id="logout-button" href="/logout"> <button className="uk-button uk-button-text"> Logout </button> </a> </li> */}
                  </ul>

                </div>
              </div>

            </nav>
        </div>

        <Feature/>

      </div>

    )

  }

};