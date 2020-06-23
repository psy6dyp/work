let obj = {
    name: 'zs',
    age: 39,
    info: {
        num: 10,
        sex: 'man'
    },
    arr: [1, 2, 3]
}
// 深拷贝
function dep(target, source) {
    for(let key in source) {
        let sourceValue = source[key];
        if (sourceValue instanceof Object) {
            // 引用数据类型
            let s = new sourceValue.constructor;
            dep(s, sourceValue);
            target[key] = s;
        } else {
            // 基本数据类型
            target[key] = sourceValue;
        }
    }
}
let newObj = {};
dep(newObj, obj);
obj.arr = [4];
console.log(obj);
console.log(newObj);