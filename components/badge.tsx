import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <div style={{textAlign: "center", color: "#fff", padding: "10px", textShadow: "2px 3px 0px #333", marginTop: "10px"}}>
    {children}
  </div>
);

export default memo(Panel);
