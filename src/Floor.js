
import React from "react";
import { Link } from "react-router-dom";

import "./floor.css";

class FloorComponent extends React.Component {
    
    render() {
        return (
          
          <div className={`bodi`} >

            <header>
                <h3>Select your<br/>Camera!</h3>
            </header>

            <Link to="/predictor">
                <button className="cambutton1" ></button>
            </Link>

            <Link to="/predictor">
                <button className="cambutton2" ></button>
            </Link>

            <Link to="/predictor">
                <button className="cambutton3" ></button>
            </Link>

          </div>
                
        )
    }
}

const Floor = () => (
        <FloorComponent/>
  );
  
export default Floor;