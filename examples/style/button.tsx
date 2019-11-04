import React from "react";

const Button = ({children}: {
  children: any;
}) => (
  <div className="button">
    {children}
    <style jsx>{`
      .button {
        display: inline-block;
        cursor: pointer;
        user-select: none;
        padding: 10px;
        color: #333;
        background-color: rgba(150, 220, 220, 1);
        border-radius: 5px;
        transition: background-color 0.1s, color 0.1s, opacity 0.1s;
      }

      .button:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
      }

      .button:active {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default React.memo(Button);
