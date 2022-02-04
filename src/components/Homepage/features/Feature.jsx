import React from "react";
import "./Feature.css";

export default class Feature extends React.Component {

    componentDidMount() {
      function erasePadding(){
        const stickyNavbar = document.querySelector(".uk-sticky");
        return this.scrollY > 215 ? stickyNavbar.style.paddingTop = "0%" : stickyNavbar.style.paddingTop = "5%";
      }
      window.addEventListener("scroll", erasePadding , false);
    }

    render() {

    return (

        <div className="uk-section uk-light">
        <div className="uk-container">

          <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="true">
            <div>
              <div className="uk-card uk-card-default feature-card  uk-card-body uk-card-hover">
              <img alt="" src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/000000/external-bird-animal-kingdom-vol2-microdots-premium-microdot-graphic.png"/>
                <h3 className="uk-card-title">Light</h3>
                <p> Make every functions simple and fast.</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default feature-card uk-card-body uk-card-hover">
              <img alt="" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-eagle-4th-july-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>                  
              <h3 className="uk-card-title">Eagle Eye</h3>
                <p> Less chances of error! </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default feature-card uk-card-body uk-card-hover">
              <img alt="" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-bird-funeral-justicon-flat-justicon.png"/>
                <h3 className="uk-card-title">Responsive</h3>
                <p> As your finger goes. </p>
              </div>
            </div>

            {/* <div>
             <button class="uk-button uk-button-danger">Danger</button>
            </div> */}
          </div>


        </div>
      </div>

    );

}

}