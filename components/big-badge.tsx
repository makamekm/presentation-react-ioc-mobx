import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <div style={{textAlign: "center", color: "#fff", padding: "10px", fontWeight: 800, textShadow: "2px 3px 0px #333"}}>
    {children}
  </div>
);

export default memo(Panel);
