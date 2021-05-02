'use strict'

class SimpleMap {
  constructor() {
    // initialize the _size variable of the this class
    this._size = 0
    // initialize this class to be an empty object
    this._map = {}
  }

  set(key, value) {
    // if there is no such key already in this map
    if (!this.has(key)) {
      // increase the size of this map
      this._size++
    }
    // set the value of this key
    this._map[key] = value
  }

  delete(key) {
    // if this map has such key
    if (this.has(key)) {
      // decrease the size of this map by one
      this._size--
      // store the value of this key
      const value = this._map[key]
      // delete the key value pair
      delete this._map[key]
      // return the value
      return value
    } else {
      // if there is no such key in this map, return null
      return null
    }
  }

  has(key) {
    // return true or false depending on this map object hasOwnProperty of this key
    return this._map.hasOwnProperty(key)
  }

  hasValue(value) {
    // loop over this map
    for (const key in this._map) {
      if (this._map[key] === value) {
        return true
      }
    }
    return false
  }

  get(key) {
    return this.has(key) ? this._map[key] : null
  }

  clear() {
    this.size = 0
    this._map = {}
  }

  keys() {
    const keys = []
    for (const keys in this._map) {
      if (this._map.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    return keys
  }

  values() {
    const values = []
    for (const key in this._map) {
      values.push(this._map[key])
    }
    return values
  }

  size() {
    return this._size
  }

  entries() {
    const entries = []
    for (const key in this._map) {
      entries.push([key, this._map[key]])
    }
    return entries
  }

  myForeEach(callback) {
    const entries = this.entries()
    var i = 0
    for (let j = 0; j < entries.length; j++) {
      callback(entries[j][i], entries[j][i + 1])
    }
  }
}
