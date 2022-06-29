import React from "react";
import GaugeChart from "react-gauge-chart";
import useSound from 'use-sound';
function play() {
  var audio = new Audio('/Users/bapputtyhere/Documents/dev/project/Violence-predictor/src/alert.mp3');
  audio.play();
}
const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  var confidence = parseFloat(data.confidence.toFixed(2));

  console.log(label, confidence);
  const isViolence = label === "Violence" ? true : false;
  confidence = (label === "Violence") ? confidence : 1- confidence;
  const soundUrl = '/Users/bapputtyhere/Documents/dev/project/Violence-predictor/src/alert.mp3';
  if (label === "Violence"){
    play();
  }
    

  
  return (
    <div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={3}
        colors={["rgb(26 255 26)", "#FFC371", "rgb(255 26 26)"]}
        arcWidth={0.3}
        percent={confidence}
      />
      <br></br>
      <br></br>
      {isViolence ? (
        <div>
          <h1>🚨 Suspecting Violence 🚨🚨🚨</h1>
        </div>
      ):(  <br></br>  )}
    </div>
  );
};
export default Chart;
