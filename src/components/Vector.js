class Vector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  mult(n) {
    this.x *= n
    this.y *= n
    this.z *= n
    return this
  }

  div(n) {
    this.x /= n
    this.y /= n
    this.z /= n
    return this
  }

  add(x, y, z) {
    if (x instanceof Vector) {
      this.x += x.x || 0
      this.y += x.y || 0
      this.z += x.z || 0
      return this
    }
    this.x += x || 0
    this.y += y || 0
    this.z += z || 0
    return this
  }

  sub(x, y, z) {
    if (x instanceof Vector) {
      this.x -= x.x || 0
      this.y -= x.y || 0
      this.z -= x.z || 0
      return this
    }
    this.x -= x || 0
    this.y -= y || 0
    this.z -= z || 0
    return this
  }

  copy() {
    return new Vector(this.x, this.y, this.z)
  }
}

export default Vector

export function hypot() {
  // Use the native implementation if it's available
  if (typeof Math.hypot === "function") {
    return Math.hypot.apply(null, arguments)
  }

  // Otherwise use the V8 implementation
  const length = arguments.length
  const args = []
  let max = 0
  for (let i = 0; i < length; i++) {
    let n = arguments[i]
    n = +n
    if (n === Infinity || n === -Infinity) {
      return Infinity
    }
    n = Math.abs(n)
    if (n > max) {
      max = n
    }
    args[i] = n
  }

  if (max === 0) {
    max = 1
  }
  let sum = 0
  let compensation = 0
  for (let j = 0; j < length; j++) {
    const m = args[j] / max
    const summand = m * m - compensation
    const preliminary = sum + summand
    compensation = preliminary - sum - summand
    sum = preliminary
  }
  return Math.sqrt(sum) * max
}

export function int(n, radix = 10) {
  if (typeof n === "string") {
    return parseInt(n, radix)
  }
  if (typeof n === "number") {
    return n | 0
  }
  if (typeof n === "boolean") {
    return n ? 1 : 0
  }
  return null
}

export function min() {
  if (arguments[0] instanceof Array) {
    return Math.min.apply(null, arguments[0])
  }
  return Math.min.apply(null, arguments)
}

export function max() {
  if (arguments[0] instanceof Array) {
    return Math.max.apply(null, arguments[0])
  }
  return Math.max.apply(null, arguments)
}

export function random(min, max) {
  let rand = Math.random()
  if (typeof min === "undefined") {
    return rand
  }
  if (typeof max === "undefined") {
    if (min instanceof Array) {
      return min[Math.floor(rand * min.length)]
    }
    return rand * min
  }
  if (min > max) {
    return rand * (min - max) + max
  }
  return rand * (max - min) + min
}

export function mag(x, y) {
  return hypot(x, y)
}
