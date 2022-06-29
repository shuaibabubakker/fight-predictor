
import React from "react";
import { Link } from "react-router-dom";

import "./landing.css";

class LandingComponent extends React.Component {
    
    render() {
        return (
          
          <div className={`bod`} >

            <header>
                <h1>Violence<br/>Prediction.</h1>
            </header>

            <div class="typewriter">
              <h2>sitback.<br/>and<br/>get notified!</h2>
            </div>

            <Link to="/login">
              <button class="button" >Login here</button>
            </Link>

          </div>
                
        )
    }
}

const Landing = () => (
        <LandingComponent/>
  );
  
export default Landing;