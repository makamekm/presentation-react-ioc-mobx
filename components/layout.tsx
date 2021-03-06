import classNames from "classnames";
import React, { memo } from "react";
import { useDeck } from 'gatsby-theme-mdx-deck'
import Particles from "react-particles-js";

const Panel = ({children, fade, style, particles, logo, align, width}: {
  children: any;
  fade?: boolean;
  style?: React.CSSProperties;
  particles?: boolean;
  logo?: boolean;
  align?: string;
  width?: string;
}) => {
  const { index, length } = useDeck();

  return (
    <div
      style={style}
      className={classNames("anime", {fade, hidden: style && style.visibility === "hidden"})}>
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
      <div className="page-indicator" style={{display: index === 0 ? 'none' : 'block'}}>{index + 1} / {length}</div>
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
  
        sub {
          opacity: 0.6;
          font-size: 80%;
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
  
        .page-indicator {
          position: fixed;
          pointer-events: none;
          left: 10px;
          bottom: 10px;
          font-size: 20px;
          color: #fff;
          opacity: 0.6;
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
          max-width: ${width || "80vw"};
          text-align: ${align || "center"};
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
};

export default memo(Panel);
