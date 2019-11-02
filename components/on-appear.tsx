import React, { memo } from "react";
import Particles from "react-particles-js";

const Panel = ({children, fade, style, particles, logo}: {
  children: any;
  fade?: boolean;
  style?: React.CSSProperties;
  particles?: boolean;
  logo?: boolean;
}) => (
  <div
    style={style}
    className={"anime" + (fade ? " fade" : "") + (style && style.visibility === "hidden" ? " hidden" : "")}>
    {particles
      ? <div className="particles">
        <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
        style={{
          width: "100%",
          height: "100%",
        }}/>
      </div> : null}
    {children}
    {logo ? <img src="logo.png" className="logo"/> : null}
    <style global jsx>{`
      td, th {
        border-color: rgba(255, 255, 255, 0.4) !important;
        padding: 10px !important;
      }

      td {
        border-right: 1px solid;
      }

      td:first-child {
        border-left: 1px solid;
      }
    `}</style>
    <style jsx>{`

      .logo {
        position: fixed;
        pointer-events: none;
        right: 10px;
        bottom: -10px;
        height: 70px;
        object-fit: cover;
      }

      .particles {
        position: fixed;
        pointer-events: none;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }

      .anime {
        opacity: 0;
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
