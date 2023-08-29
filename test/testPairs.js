const pairs = require('../pairs')

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const list = pairs(testObject);
console.log(list);