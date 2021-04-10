import { Loader } from "@pixi/loaders"
import ImageParticleSystem from "./ImageParticleSystem"

export default class PixiParticlesRenderer {
  constructor(element, url, options) {
    this.options = {
      PADDING: 300,
      PARTICLE_SIZE: 5,
      REPULSION_CHANGE_DISTANCE: 100,
      WIDTH: 1000,
      HEIGHT: 1000,
      FPS: 60,
    }

    // Override options
    if (options) {
      this.options = Object.assign(this.options, options)
    }

    this.url = url
    this.canvasWrapper = element
    this.initialized = false
    this.destroyed = false
    this.then = Date.now()
    this.startTime = this.then
    this.now = this.startTime
    this.elapsed = 0
    this.fpsInterval = 1000 / this.options.FPS

    this._createCanvas()
    this._preloadImage()
  }

  _createCanvas() {
    this.canvas = document.createElement("canvas")
    this.canvas.id = "rs-image-canvas"
    this.canvas.style.position = "absolute"
    this.canvas.style.visibility = "hidden"
    document.body.appendChild(this.canvas)
    this.ctx = this.canvas.getContext("2d")
  }

  _preloadImage() {
    this.loader = new Loader()
    if (!this.loader.resources[this.url]) {
      this.loader.add(this.url).load(this._processImage.bind(this))
    } else {
      this._processImage()
    }
  }

  _processImage() {
    this.initialized = true
    if (!this.destroyed) {
      const image = this.loader.resources[this.url]
      const w = image.texture.width
      const h = image.texture.height

      // Draw image to canvas and get image data
      this.canvas.width = w
      this.canvas.height = h
      this.ctx.drawImage(image.data, 0, 0, w, h)
      this.imageData = this.ctx.getImageData(0, 0, w, h)

      // Reset canvas
      this.canvas.width = 0
      this.canvas.height = 0

      this.timeout = setTimeout(() => {
        // Init particle system
        this.pointSystem = new ImageParticleSystem(
          this.canvasWrapper,
          this.imageData,
          this.options.PADDING,
          this.options.PARTICLE_SIZE,
          this.options.REPULSION_CHANGE_DISTANCE,
          this.options.WIDTH,
          this.options.HEIGHT
        )
        this._draw()
      }, 400)
    }
  }

  _draw() {
    this.animFrame = window.requestAnimationFrame(this._draw.bind(this))
    this.now = Date.now()
    this.elapsed = this.now - this.then
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval)
      this.pointSystem.updateState()
      this.pointSystem.render()
    }
  }

  destroy() {
    clearTimeout(this.timeout)
    if (this.initialized) {
      window.cancelAnimationFrame(this.animFrame)
      this.pointSystem._destroy()
    }
    this.canvas.parentNode.removeChild(this.canvas)
    this.destroyed = true
  }
}
