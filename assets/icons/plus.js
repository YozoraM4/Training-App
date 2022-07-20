import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Plus = (props) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 15 15">
    <G fill="none" fillRule="evenodd">
      <Path d="M-5-5h24v24H-5z" />
      <Path fill="#fff" d="M14 8H8v6H6V8H0V6h6V0h2v6h6z" />
    </G>
  </Svg>
)

export default Plus
