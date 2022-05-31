import React from "react";
import GaugeChart from "react-gauge-chart";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  console.log(label, confidence);
  const isFight = label === "fight" ? true : false;

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
        colors={["#FF5F6D", "#FFC371", "rgb(26 202 26)"]}
        arcWidth={0.3}
        percent={confidence}
      />
      <br></br>
      <br></br>
      {isFight ? (
        <div>
          <h1>🚨 Suspecting Fighting  🚨🚨🚨</h1>
        </div>
      ):(  <br></br>  )}
    </div>
  );
};
export default Chart;
