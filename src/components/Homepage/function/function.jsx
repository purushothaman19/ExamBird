import React from "react";
import "./function.css"


function Functions() {

    return(
        // <div className="function-section uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l">
        
        <div className="function-section">
            <h2> 
            What this Bird will do!  
                <img id="function-bird" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-bird-st-patrick-day-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt=""/> 
            
            </h2>


            <div className="uk-container functions">

          <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="true">
            <div>
              <div className="uk-card function-card uk-card-default uk-card-body uk-card-hover">
                <img src="https://img.icons8.com/color/48/000000/csv.png"/>                
              <h3 className="uk-card-title function-title"> Gets your CSV! </h3>
                <p> Upload your mcq csv file <a href="/upload">here</a>.</p>
              </div>
            </div>
            <div>
              <div className="uk-card function-card uk-card-default uk-card-body uk-card-hover">
                <img src="https://img.icons8.com/color/48/000000/new-file.png"/>              
              <h3 className="uk-card-title function-title"> Works on it. </h3>
                <p> EBird will analyse the file. </p>
              </div>
            </div>
            <div>
              <div className="uk-card function-card uk-card-default uk-card-body uk-card-hover">
              <img src="https://img.icons8.com/external-two-tone-chattapat-/64/000000/external-surprise-party-and-celebration-two-tone-chattapat-.png"/>
                <h3 className="uk-card-title function-title"> Surpries you! </h3>
                <p> Creates responsive <span className="uk-button-text">online exam</span>. </p>
              </div>
            </div>

            {/* <div>
             <button class="uk-button uk-button-danger">Danger</button>
            </div> */}
          </div>


        </div>

        </div>
    )
    
}


export default Functions;