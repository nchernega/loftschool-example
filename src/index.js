/* ДЗ 3 - объекты и массивы */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    if(typeof(fn) !== "function") {
        throw new Error("fn is not a function");
    }
    if(!Array.isArray(array) || array.length === 0){
        throw new Error("empty array");
    }
    for(var i = 0; i < array.length; i++){
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var mappedArray = [];
    if(typeof(fn) !== "function") {
        throw new Error("fn is not a function");
    }
    if(!Array.isArray(array) || array.length === 0){
        throw new Error("empty array");
    }
    for(var i = 0; i < array.length; i++){
        mappedArray.push(fn(array[i], i, array));
    }
    return mappedArray;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var result;
    if(typeof(fn) !== "function") {
        throw new Error("fn is not a function");
    }
    if(!Array.isArray(array) || array.length === 0){
        throw new Error("empty array");
    }
    if(initial){
        result = initial;
        for(var i = 0; i < array.length; i++){
            result = fn(result, array[i], i, array);
        }
    }
    else {
        result = array[0];
        for(var i = 1; i < array.length; i++){
            result = fn(result, array[i], i, array);
        }
    }

    return result;
}


/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
    return obj;
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var enums = [];
    for(var prop in obj){
        if(obj.propertyIsEnumerable(prop)){
            enums.push(prop);
        }
    }
    return enums;
}
/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var upperCaseProps = [];
    for(var prop in obj){
        upperCaseProps.push(prop.toUpperCase());
    }
    return upperCaseProps;
}



export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps
};
