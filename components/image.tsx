import { Curtains } from "curtainsjs";
import React from "react";

import BigBadge from "./big-badge";
import { $fragmentShader, $vertexShader } from "./shaders";

export default class Hero extends React.Component<{
  src: string;
  title: string;
}> {
  private canvasContainer: HTMLDivElement;
  private planeContainer: HTMLDivElement;
  private imageContainer: HTMLImageElement;
  private webGLCurtain: Curtains;
  private plane: any;
  private ready: boolean = false;

  public componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    if (this.webGLCurtain && this.plane) {
      this.webGLCurtain.removePlane(this.plane);
      this.plane = null;
      this.webGLCurtain.dispose();
      this.webGLCurtain = null;
    }
  }

  public componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  public handleImageLoaded = () => {
    if (!this.planeContainer || !this.imageContainer) {
      return;
    }

    this.webGLCurtain = new Curtains({
      container: this.canvasContainer,
    });
    const pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1.0;
    const params = {
      widthSegments: 20,
      heightSegments: 20,
      vertexShader: $vertexShader,
      fragmentShader: $fragmentShader,
      uniforms: {
        resolution: {
          name: "uResolution",
          type: "2f",
          value: [
            pixelRatio * this.planeContainer.getBoundingClientRect().width,
            pixelRatio * this.planeContainer.getBoundingClientRect().height,
          ],
        },
        time: {
          name: "uTime",
          type: "1f",
          value: 0,
        },
      },
    };

    this.plane = this.webGLCurtain.addPlane(this.planeContainer, params);

    this.plane
      .onReady(() => {
        // set a fov of 35 to exagerate perspective
        // plane.setPerspective(35);
        this.ready = true;
        this.forceUpdate();
      })
      .onRender(() => {
        this.plane.uniforms.time.value++;
      });
  }

  public render() {
    return (
      <div>
        <div className={"title" + (this.ready ? " show" : "")}>
          <BigBadge>
            {this.props.title}
          </BigBadge>
        </div>
        <div className="hero">
          <div className="plane" ref={(ref) => this.planeContainer = ref} >
            <img
              onLoad={this.handleImageLoaded}
              className="img"
              ref={(ref) => this.imageContainer = ref}
              src={this.props.src}
            />
          </div>
          <div className={"canvas" + (this.ready ? " show" : "")} ref={(ref) => this.canvasContainer = ref} />
          <style jsx>{`
            .hero {
              position: relative;
              overflow: hidden;
              display: flex;
              justify-content: center;
              width: auto;
            }

            .plane {
              text-align: center;
              width: auto;
              height: auto;
              max-width: 80vw;
              max-height: 80vh;
              content: '';
            }

            .img {
              visibility: hidden;
              width: auto;
              height: auto;
              max-width: 80vw;
              max-height: 80vh;
            }

            .canvas {
              opacity: 0;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transition: opacity 2s;
            }

            .canvas.show {
              opacity: 1;
            }

            .title {
              opacity: 0;
              transition: opacity 2s;
            }

            .title.show {
              opacity: 1;
            }
          `}</style>
        </div>
      </div>
    );
  }

  private onResize = () => {
    if (this.plane && this.planeContainer) {
      const pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1.0;
      this.plane.uniforms.resolution.value = [
        pixelRatio * this.planeContainer.getBoundingClientRect().width,
        pixelRatio * this.planeContainer.getBoundingClientRect().height,
      ];
    }
  }
}
