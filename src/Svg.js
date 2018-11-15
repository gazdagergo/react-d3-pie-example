import React from "react";

const Svg = ({ children, size, width = 100 }) => {
  const x = size / 2;
  const y = size / 2;
  return (
    <svg width={width} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`translate(${x},${y})`}>{children}</g>
    </svg>
  );
};

export default Svg;
