import React, { Component } from "react"
import styled from "styled-components"
let PixiParticlesRenderer
try {
  PixiParticlesRenderer = require("./PixiParticlesRenderer").default
} catch (e) {}

const CanvasWrapper = styled.div`
  position: relative;
  height: 100%;

  canvas {
    max-width: 100%;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media (max-width: 767px) {
    margin: 40px auto 0;
    height: calc(100vw - 80px);
    max-width: 150px;
    max-height: 150px;

    canvas {
      max-width: 350%;
      left: 55%;
    }
  }
`

class ImageParticles extends Component {
  constructor(props) {
    super(props)
    this.pixiParticles = null
    this.pixiCanvasWrapper = React.createRef()
  }

  componentDidMount() {
    const {
      imageUrl,
      width,
      height,
      padding,
      size,
      repulsion,
      fps,
    } = this.props
    if (PixiParticlesRenderer) {
      this.pixiParticles = new PixiParticlesRenderer(
        this.pixiCanvasWrapper.current,
        imageUrl,
        {
          WIDTH: width || 1000,
          HEIGHT: height || 1000,
          PADDING: padding || 300,
          PARTICLE_SIZE: size || 3,
          REPULSION_CHANGE_DISTANCE: repulsion || 100,
          FPS: fps || 60,
        }
      )
    }
  }

  componentWillUnmount() {
    clearTimeout(this.mountTimeout)
    if (this.pixiParticles) {
      this.pixiParticles.destroy()
    }
  }

  render() {
    return (
      <CanvasWrapper>
        <div className="pixi__wrapper" ref={this.pixiCanvasWrapper}>
          <canvas className="pixi__canvas" />
        </div>
      </CanvasWrapper>
    )
  }
}

export default ImageParticles
