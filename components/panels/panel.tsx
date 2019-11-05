import React, { memo } from "react";

const Panel = ({children}: {
  children: any;
}) => (
  <h3 className="panel">
    {children}
    <style jsx>{`
      .panel {
        font-weight: 800;
        opacity: 0.8;
        color: #fff;
      }
    `}</style>
  </h3>
);

export default memo(Panel);
