console.log(Symbol.for("app.foo"))
const foo = Symbol.for("app.foo")
const bar = Symbol.for("app.bar")
console.log(typeof foo)
console.log(Symbol.keyFor(bar))
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
console.log(JSON.stringify(obj)) // {}
console.log(Object.keys(obj)) // []
console.log(Object.getOwnPropertyNames(obj)) // []
console.log(Object.getOwnPropertySymbols(obj)) // [ foo, bar ]