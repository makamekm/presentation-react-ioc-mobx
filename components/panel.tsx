import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <h3 style={{fontWeight: 800, opacity: 0.8, color: "#fff"}}>
    {children}
  </h3>
);

export default memo(Panel);
