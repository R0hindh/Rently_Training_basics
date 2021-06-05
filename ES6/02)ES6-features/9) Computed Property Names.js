quux = () => "hai"
let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}
console.log(obj);