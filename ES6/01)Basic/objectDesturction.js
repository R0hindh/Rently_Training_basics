const address = {
    street:'a',
    city:'b',
    country:'c'
}
// const street = address.street;
// const city = address.city;
// const country = address.country;

// const {streets, city, country} = address; // there is no streets in address so streets is undefined
const {street:st, city, country} = address;
console.log(st);