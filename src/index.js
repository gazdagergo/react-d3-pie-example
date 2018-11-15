import React from "react";
import ReactDOM from "react-dom";
import * as shape from "d3-shape";

const d3 = {
  shape
};

const Svg = ({ children }) => (
  <svg x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100">
    <g transform={`translate(${x},${y})`}>{children}</g>
  </svg>
);

const size = 100;
const width = size;
const height = size;
const x = width / 2;
const y = height / 2;

const Arc = ({
  size,
  outerRadius = 40,
  innerRadius = 30,
  startAngle = 0,
  endAngle = 4
}) => {
  const arcGenerator = d3.shape
    .arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle);

  return <path stroke="#FFFFFF" d={arcGenerator()} />;
};

const data = [
  { number: 4, name: "Locke" },
  { number: 8, name: "Reyes" },
  { number: 15, name: "Ford" },
  { number: 16, name: "Jarrah" },
  { number: 23, name: "Shephard" },
  { number: 42, name: "Kwon" }
];

const Pies = ({ data }) => {
  const arcs = d3.shape.pie().value(function(d) {
    return d.number;
  })(data);
  return arcs.map(arc => <Arc {...arc} />);
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Svg>
    <Pies data={data} />
  </Svg>,
  rootElement
);
