import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const Close = ({ color = "#333" }) => (
  <Svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      y="30.3985"
      width="42.99"
      height="3.79324"
      rx="1.89662"
      transform="rotate(-45 0 30.3985)"
      fill={color}
    />
    <Rect
      x="2.68262"
      width="42.99"
      height="3.79324"
      rx="1.89662"
      transform="rotate(45 2.68262 0)"
      fill={color}
    />
  </Svg>
);
export default Close;
