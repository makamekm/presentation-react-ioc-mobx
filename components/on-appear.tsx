import React, { memo } from "react";

const Panel = ({children, fade, style}: {
  children: any;
  fade?: boolean;
  style?: React.CSSProperties;
}) => (
  <div
    style={style}
    className={"anime" + (fade ? " fade" : "") + (style && style.visibility === "hidden" ? " hidden" : "")}>
    {children}
    <style jsx>{`

      .anime {
        transition: all 2s;
      }

      .anime.fade {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadein 2s; /* Firefox < 16 */
            -ms-animation: fadein 2s; /* Internet Explorer */
            -o-animation: fadein 2s; /* Opera < 12.1 */
                animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-play-state: initial;
      }

      .anime.hidden {
        opacity: 0;
        animation: none;
      }

      @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }
    `}</style>
  </div>
);

export default memo(Panel);
