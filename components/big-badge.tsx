import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <div className="panel">
    {children}
    <style jsx>{`
      .panel {
        text-align: center;
        color: #fff;
        padding: 10px;
        font-weight: 800;
        text-shadow: 2px 3px 0px #333
      }
    `}</style>
  </div>
);

export default memo(Panel);
