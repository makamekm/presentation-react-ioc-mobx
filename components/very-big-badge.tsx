import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <h1 className="panel">
    {children}
    <style jsx>{`
      .panel {
        text-align: center;
        color: #fff;
        text-shadow: 2px 3px 0px #333
      }
    `}</style>
  </h1>
);

export default memo(Panel);
