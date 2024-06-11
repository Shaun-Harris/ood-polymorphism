class Include {
  constructor(val1, val2) {
    this.val1 = val1
    this.val2 = val2
  }

  check() {
    if (typeof this.val1 === 'string' || Array.isArray(this.val1)) {
      return this.val1.includes(this.val2)
    }
    return false
  }
}

module.exports = Include
