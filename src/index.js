import React from "react";
import ReactDOM from "react-dom";
import Svg from "./Svg";
import Pies from "./Pies";

const size = 100;

const data = [
  { number: 4 },
  { number: 8 },
  { number: 15 },
  { number: 16 },
  { number: 23 },
  { number: 42 }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Svg size={size} width={230}>
    <Pies data={data} />
  </Svg>,
  rootElement
);
