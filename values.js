module.exports = function values(obj) {
    const propertyValues = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof(obj[key] !== 'function')) {
            propertyValues.push(obj[key]);
        }
    }
    return propertyValues;
}