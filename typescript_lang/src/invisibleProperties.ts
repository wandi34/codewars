(function() {
  let o = {
    v: 42,
    w: 1
  }
  Object.defineProperty(o, 'foo', {value: 'invisible', writable: true, enumerable: false})
  Object.defineProperty(o, 'v', {get: (() => 2)})
  Object.defineProperty(o, 'v', {set: () => o.w = 4})
  console.log("bla " + o)
  console.log("Returns 2 -> " + o.v)
  o.v = 12
  console.log("Overwrites w value with setter of v 4 -> " + o.w)
}());