import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';

import useSound from 'use-sound';
import Princess from './Princess';
import Chart from './Chart';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Predictor.css";

let classifier;

function Predictor() {


  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isFight, setIsFight] = useState(false);

  const soundUrl = '/Users/bapputtyhere/Documents/dev/project/fight-predictor/src/alert.mp3';

  const [play, {stop}] = useSound(soundUrl);


  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        console.log(results)
        setIsFight(result[0].label === "Violence" ? true : false);
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
  }

  return (
    <div className="container">
      
      <center>
      <br></br>
      <br></br>
      <br></br>
        <h1>Violence Prediction</h1>
      </center>
      <Loader
        type="Watch"
        color="#00BFFF"
        height={200}
        width={200}
        visible={!loaded}
        style={{display:'flex', justifyContent:'center', marginTop:'30px' }}
      />
      <div className="upper">
        <div className="capture">
          <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="800"
            height="800"
          />
          {loaded && (
            <button className="sbutton" onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
          )}
        </div>
        <div>
        {result.length > 0 && (
          <div>
            <Chart data={result[0]} />
          </div>
        )}{result.length > 0 && (
          <div className="results">
            <Princess data={result} />
          </div>
        )}

        
        
        </div>
      </div>
      
    </div>
  );
}

export default Predictor;
