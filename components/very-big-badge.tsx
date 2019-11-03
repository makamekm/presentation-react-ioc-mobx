import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <h1 style={{textAlign: "center", color: "#fff", textShadow: "2px 3px 0px #333"}}>
    {children}
  </h1>
);

export default memo(Panel);
