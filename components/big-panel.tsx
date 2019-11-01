import React, { memo } from "react";

const Panel = ({children, className, color}: {
  children: any;
  className?: string;
  color?: string;
}) => {
  color = color || "tomato";
  return (
    <div className={["panel", className].join(" ")}>
      {children}

      <style jsx>{`
        .panel {
          padding: 20px;
          background-color: ${color};
          color: white;
          font-weight: 800;
          font-size: 40px;
          border-radius: 5px;
          text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default memo(Panel);
