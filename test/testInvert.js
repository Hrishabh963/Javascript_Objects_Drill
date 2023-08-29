const invert = require('../invert')

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const inverted = invert(testObject);
console.log(inverted);