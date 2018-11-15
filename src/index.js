import React from "react";
import ReactDOM from "react-dom";
import * as shape from "d3-shape";

const d3 = {
  shape
};

const size = 100;
const width = size;
const height = size;
const x = width / 2;
const y = height / 2;

const Arc = ({
  size,
  outerRadius = 40,
  innerRadius = 30,
  startAngleRad = 0,
  endAngleRad = 4
}) => {
  const arcGenerator = d3.shape
    .arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)
    .startAngle(startAngleRad)
    .endAngle(endAngleRad);

  return <path stroke="#FFFFFF" d={arcGenerator()} />;
};

const Svg = () => (
  <svg x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100">
    <g transform={`translate(${x},${y})`}>
      <Arc />
    </g>
  </svg>
);

const data = [
  { number: 4, name: "Locke" },
  { number: 8, name: "Reyes" },
  { number: 15, name: "Ford" },
  { number: 16, name: "Jarrah" },
  { number: 23, name: "Shephard" },
  { number: 42, name: "Kwon" }
];

const arcs = d3.shape.pie().value(function(d) {
  return d.number;
})(data);
const paths = arcs.map(arc => <Arc {...arc} />);

const rootElement = document.getElementById("root");
ReactDOM.render(<Svg />, rootElement);
