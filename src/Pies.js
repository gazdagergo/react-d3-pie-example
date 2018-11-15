import React from "react";
import * as shape from "d3-shape";
import Arc from "./Arc";

const d3 = { shape };

const Pies = ({ data }) => {
  const arcs = d3.shape.pie().value(d => d.number)(data);
  return arcs.map(arc => <Arc {...arc} />);
};

export default Pies;
