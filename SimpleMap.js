'use strict'
/*
--------------------------------------------------------------------------------------------------------------------
Assignment 1
--------------------------------------------------------------------------------------------------------------------
Map is a data structure that holds key-value pairs where both keys and values can be of any type.
Implement a simplified Map (let's call it SimpleMap) with the following methods:

1. SimpleMap.set(key, value);
  For simplicity keys will only be strings
2. SimpleMap.get(key);
  Should return `null` if such key doesn't exist
3. SimpleMap.has(key);
  Should return a boolean state of whether SimpleMap has this key stored or not
4. SimpleMap.delete(key);
  Should delete a specific item from SimpleMap
5. SimpleMap.clear();
  Should delete all items from SimpleMap

Bonus: add the following methods to your implementation
  6. SimpleMap.size;
    Returns the amount of items currently stored in SimpleMap. Note that that there are no parentheses.
  7. SimpleMap.keys();
    Returns an array of all keys
  8. SimpleMap.values();
    Returns an array of all values
  9. SimpleMap.entries();
    Returns an array of key-value tuples: [[key, value], [key, value]]
  10. SimpleMap.forEach((key, value) => callback(key, value));

Obviously you cannot use the built-in Map.

You can use this documentation article as a reference:
https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

class SimpleMap {
  constructor() {
    this._size = 0
    this._map = {}
  }

  set(key, value) {
    if (!this.has(key)) {
      this._size++
    }
    this._map[key] = value
  }

  delete(key) {
    if (this.has(key)) {
      this._size--
      const value = this._map[key]
      delete this._map[key]
      return value
    } else {
      return null
    }
  }

  has(key) {
    return this._map.hasOwnProperty(key)
  }

  hasValue(value) {
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
    for (const key in this._map) {
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

  myForEach(callback) {
    const entries = this.entries()
    var i = 0
    for (let j = 0; j < entries.length; j++) {
      callback(entries[j][i], entries[j][i + 1])
    }
  }
}

let sm = new SimpleMap()
sm.set('Israel', 'Jerusalem')
sm.set('Israel', 'Jerusalem')
sm.set('US', 'Washington')
sm.set('UK', 'London')

console.log(sm.size())
