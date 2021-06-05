const first = ['a', 'b', 'c'];
const second = ['d', 'e', 'f'];

const combine = first.concat(second);
const combine1 = [...first,...second];
// maybe look like not useful but try in this case
const combine2 = [...first, 'z', ...second, 'y'];
// console.log(combine2);


const firstobj = {name : 'Rohindh'};
const secondobj = {job : 'Software Developer'}
const combinedobj = {...firstobj, ...secondobj, location : "India"};
// console.log(combinedobj);
const clone = {...firstobj};
console.log(clone);