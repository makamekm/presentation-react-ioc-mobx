import React from "react";

const Layout = ({children}: {
  children: any;
}) => (
  <>
    {children}
    <style global jsx>{`
      body {
        position: fixed;
        margin: 0;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
        background-color: #f3f7fa;
        color: #4a4a4a;
        max-width: 100vw;
        min-width: 100vw;
        overflow: hidden;
      }
    `}</style>
  </>
);

export default React.memo(Layout);
