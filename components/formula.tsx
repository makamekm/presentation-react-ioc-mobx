import React, { memo } from "react";
import MathJax from "react-mathjax2";

const Panel = ({children, style}: {
    children: any;
    style?: React.CSSProperties;
}) => {
    const [show, setShow] = React.useState(false);
    return (
        <div className={"element" + (show ? " show" : "")} style={style}>
            <MathJax.Context input="ascii" onLoad={() => {
                setShow(true);
            }}>
                <div>
                    <MathJax.Node>{children}</MathJax.Node>
                </div>
            </MathJax.Context>
            <style jsx>{`
                .element {
                    position: absolute;
                    opacity: 0;
                    transition: opacity 2s;
                }

                .element.show {
                    position: static;
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default memo(Panel);
