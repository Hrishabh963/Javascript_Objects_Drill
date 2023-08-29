const defaults = require('../defaults')

const testObject = { name: 'Bruce Wayne' };
const defaultProps = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const modifiedObject = defaults(testObject, defaultProps);
console.log(modifiedObject);