import React from "react";
import * as shape from "d3-shape";

const d3 = { shape };

const Arc = ({
  size,
  outerRadius = 40,
  innerRadius = 30,
  startAngle = 0,
  endAngle = 4,
  ...rest
}) => {
  const arcGenerator = d3.shape
    .arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle);

  return <path {...rest} d={arcGenerator()} />;
};

export default Arc;
