module.exports = function pairs(obj) {
    const list = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            list.push([key, obj[key]]);
        }
    }
    return list;
}