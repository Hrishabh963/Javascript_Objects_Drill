const values = require('../values')

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const result = values(testObject);
console.log(result);