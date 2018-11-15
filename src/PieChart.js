import React, { Component } from "react";
import Svg from "./Svg";
import Pies from "./Pies";

class PieChart extends Component {
  state = {
    data: [
      { number: 5 },
      { number: 8 },
      { number: 15 },
      { number: 16 },
      { number: 23 },
      { number: 42 }
    ]
  };

  render() {
    const { data } = this.state;
    return (
      <Svg size="100" width={230}>
        <Pies data={data} />
      </Svg>
    );
  }
}

export default PieChart;
