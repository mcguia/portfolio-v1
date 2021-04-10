import { autoDetectRenderer, Graphics, Container } from "pixi.js"
import Vector, { min, int } from "./Vector"
import ImageParticle from "./ImageParticle"

export default class ImageParticleSystem {
  constructor(
    wrapper,
    targetImage,
    padding,
    particleSize,
    repulsionDistance,
    width,
    height
  ) {
    this.canvasWrapper = wrapper
    this.targetImage = targetImage
    this.padding = padding
    this.particleSize = particleSize
    this.repulsionDistance = repulsionDistance
    this.width = width
    this.height = height
    this.threshold = 0.99999999

    this.points = []
    this.pointSprites = []
    this.renderer = autoDetectRenderer({
      width: this.width,
      height: this.height,
      view: document.getElementById("pixi-canvas"),
      transparent: true,
    })
    this.stage = new Container()
    this.container = new Container()

    this._createParticles()
    this._setup()
  }

  _setup() {
    this.stage.addChild(this.container)
    this.canvasWrapper.appendChild(this.renderer.view)
  }

  _calculateMousePos(event) {
    if (event.pageX == null && event.clientX != null) {
      const eventDoc = (event.target && event.target.ownerDocument) || document
      const { documentElement, body } = eventDoc

      this.mouseX =
        event.clientX +
        ((documentElement && documentElement.scrollLeft) ||
          (body && body.scrollLeft) ||
          0) -
        ((documentElement && documentElement.clientLeft) ||
          (body && body.clientLeft) ||
          0)
      this.mouseY =
        event.clientY +
        ((documentElement && documentElement.scrollTop) ||
          (body && body.scrollTop) ||
          0) -
        ((documentElement && documentElement.clientTop) ||
          (body && body.clientTop) ||
          0)
    }
  }

  _destroy() {
    this.container.destroy()
    this.stage.destroy()
    this.renderer.destroy()
    document.removeEventListener("mousemove", this.mousePosHandler)
  }

  _getPixel(x, y) {
    const pixels = this.targetImage.data
    const idx = (y * this.targetImage.width + x) * 4

    if (
      x > this.targetImage.width ||
      x < 0 ||
      y > this.targetImage.height ||
      y < 0
    ) {
      return [0, 0, 0, 0]
    }

    return [pixels[idx + 0], pixels[idx + 1], pixels[idx + 2], pixels[idx + 3]]
  }

  _createParticleTexture() {
    const graphics = new Graphics()

    graphics.lineStyle(0)
    graphics.beginFill(0xffffff)
    graphics.drawRect(0, 0, this.particleSize, this.particleSize)

    return this.renderer.generateTexture(graphics)
  }

  _createParticles() {
    const imageWidth = this.targetImage.width
    const imageHeight = this.targetImage.height
    const imageScale = min(
      (1200 - this.padding * 2) / imageWidth,
      (1200 - this.padding * 2) / imageHeight
    )
    const texture = this._createParticleTexture()
    const fractionSizeX = imageWidth / this.particleSize
    const fractionSizeY = imageHeight / this.particleSize

    for (let i = 0; i < fractionSizeX; i += 1) {
      for (let j = 0; j < fractionSizeY; j += 1) {
        const imagePosition = new Vector(
          int(i * this.particleSize),
          int(j * this.particleSize)
        )
        const originPosition = imagePosition
        const originScale = imageScale
        const originColor = this._getPixel(imagePosition.x, imagePosition.y)

        if (originColor[3] === 0) {
          continue
        }

        originPosition.mult(imageScale)
        originPosition.add(this.padding, this.padding)

        const point = new ImageParticle(
          originPosition,
          originScale,
          originColor,
          this.repulsionDistance
        )
        this.points.push(point)
        this.container.addChild(point.createSprite(texture))
      }
    }
  }

  updateState() {
    const mousePosition = this.renderer.plugins.interaction.mouse.global
    this.mouseX = mousePosition.x
    this.mouseY = mousePosition.y

    // eslint-disable-next-line no-unused-vars
    let _iteratorNormalCompletion = true

    // eslint-disable-next-line no-cond-assign
    for (
      let _iterator = this.points[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      const point = _step.value
      point.updateState(this.mouseX, this.mouseY)
      if (Math.random() > this.threshold) point.setPhasing()
    }
    if (this.threshold > 0) {
      this.threshold -= 0.00005
    }
  }

  render() {
    this.renderer.render(this.stage)
  }
}
