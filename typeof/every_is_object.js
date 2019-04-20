// @descriptions
// tất cả mọi đối tượng trong javascript đều kếu thừa từ Object.prototype 
var jsDebug = [
    false, '', 'str', {},
    1.5, [],
    function ds() {}
];
// add common method where every obj will extends it
Object.prototype.addContainer = function () {
    return 'from ObjectPrototype';
};

Object.prototype.colors = 'red';

var startDebug = function (arr, getType = false) {
    arr.forEach(function (value) {
        if (getType) {
            console.log(typeof value + ' >_ call method extends ' + value.addContainer());
        } else {
            console.log(value + ' >_ call method extends ' + value.addContainer());
        }
    });
};
// startDebug(jsDebug); // debug is Obj
// startDebug(jsDebug, true); // debug typeof Obj

// @ Importance
// but null & undefined not is obj
var isNull = null;
var isUndefined = undefined;
// @ get ERR Cannot read property 'addContainer' of null
//console.log(isNull.addContainer()); 
//console.log(isUndefined.addContainer());

//console.log(typeof 2.5 === typeof 2); // true
//console.log(typeof null); // object 


// demo
var myFunc = function () {
    return 'dosomething';
};
//console.log(myFunc().colors); // access properties of Object.prototype

/**
 *  Summary : nếu là đối tượng thì sẽ kếu thừa từ Object.prototype
 *  null , undefined ==> không thể kế thừa từ Object.prototype
 */