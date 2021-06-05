function f (x, y, ...a) {
    return (x + y) * a.length //a.length refers to the no. of extra arguments passed i.e 3 ((1+2)*3 =9)
}
console.log(f(1, 2, "hello", true, 7) === 9)