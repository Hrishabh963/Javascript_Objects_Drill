const mapObject = require('../mapObject')

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

//Callback function for map,makes all strings into uppercase
function cb(element) {
    if (typeof(element) === 'string') {
        return element.toUpperCase();
    }
    return element;
}

const newObject = mapObject(testObject, cb);
console.log(newObject);