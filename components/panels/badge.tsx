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
        text-shadow: 2px 3px 0px #333;
        margin-top: 10px;
      }
    `}</style>
  </div>
);

export default memo(Panel);
