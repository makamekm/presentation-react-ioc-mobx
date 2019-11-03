import React, { memo } from "react";
import { FliesText } from "react-text-fun";

const Panel = ({children, style, cellRadius, cellWidth, size, color}: {
  children: any;
  style?: React.CSSProperties;
  cellRadius?: number;
  cellWidth?: number;
  size?: number;
  color?: string;
}) => (
  <div style={style}>
    <FliesText text={children}
      fill={color || "#9CDCFE"}
      cellRadius={cellRadius || 0.6}
      fontSize={size || 120}
      cellWidth={cellWidth || 0.02}
      speed={1}/>
  </div>
);

export default memo(Panel);
