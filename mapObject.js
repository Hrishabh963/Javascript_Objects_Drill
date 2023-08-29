module.exports = function mapObject(obj, cb) {
    const newObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject[key] = cb(obj[key]);
        }
    }
    return newObject;
}