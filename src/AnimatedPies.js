import React, { Component } from "react";
import Svg from "./Svg";
import Arc from "./Arc";

import "./rotations.scss";

class AnimatedPies extends Component {
  render() {
    return (
      <Svg size="100" width={230}>
        <Arc id="grayData" startAngle={0} endAngle={4} />
        <Arc id="redData" endAngle={2} />
      </Svg>
    );
  }
}

export default AnimatedPies;
