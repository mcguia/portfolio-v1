import { Sprite } from "pixi.js"
import Vector, { random, min, max, mag } from "./Vector"

export default class ImageParticle {
  constructor(originPosition, originScale, originColor, repulsionDistance) {
    this.position = originPosition.copy()
    this.originPosition = originPosition.copy()
    this.velocity = new Vector(random(0, 20), random(0, 20))
    this.repulsion = random(1, 5.0)
    this.repulsionDistance = repulsionDistance
    this.mouseRepulsion = 1.0
    this.gravity = 0.01
    this.maxGravity = random(0.01, 0.04)
    this.scale = originScale
    this.originScale = originScale
    this.color = originColor
    this.sprite = null
  }

  createSprite(texture) {
    this.sprite = new Sprite(texture)
    this.sprite.tint =
      (this.color[0] << 16) + (this.color[1] << 8) + this.color[2]
    return this.sprite
  }

  updateState(mouseX, mouseY) {
    this._updateStateByMouse(mouseX, mouseY)
    this._updateStateByOrigin()

    if (this.velocity.x > 1 || this.velocity.y > 0.5) {
      this.velocity.mult(0.95)
    }
    this.position.add(this.velocity.x, this.velocity.y)

    this.sprite.position.x = this.position.x
    this.sprite.position.y = this.position.y

    // eslint-disable-next-line no-multi-assign
    this.sprite.scale.x = this.sprite.scale.y = this.scale
  }

  _updateStateByMouse(mouseX, mouseY) {
    const distanceX = mouseX - this.position.x
    const distanceY = mouseY - this.position.y
    const distance = mag(distanceX, distanceY)
    const pointCos = distanceX / distance
    const pointSin = distanceY / distance

    if (distance < this.repulsionDistance && window.innerWidth >= 576) {
      this.gravity *= 0.6
      this.mouseRepulsion = max(0, this.mouseRepulsion * 0.5 - 0.01)
      this.velocity.sub(pointCos * this.repulsion, pointSin * this.repulsion)
      this.velocity.mult(1 - this.mouseRepulsion)
    } else {
      this.gravity += (this.maxGravity - this.gravity) * 0.1
      this.mouseRepulsion = min(1, this.mouseRepulsion + 0.03)
    }
  }

  _updateStateByOrigin() {
    const distanceX = this.originPosition.x - this.position.x
    const distanceY = this.originPosition.y - this.position.y
    const distance = mag(distanceX, distanceY)

    this.velocity.add(distanceX * this.gravity, distanceY * this.gravity)
    this.scale = this.originScale + (this.originScale * distance) / 512
  }
}
