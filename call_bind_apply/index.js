/**
 * @ instanceof trong js
 */
var str = "function (params) {}"; // không thuộc instanceof nào cả
var str = 100; // không thuộc instanceof nào cả
var str = null; // không thuộc instanceof nào cả
var str = false; // không thuộc instanceof nào cả
var str = {}; // default thuoc instanceof Object
var str = function (params) {}; // default thuộc instanceof Function & Object
var str = []; // default thuộc instanceof Array & Object

function hasInstance(params) {
    var _instance = [String, Function, Array, Object, Number, Boolean];

    var res = [];
    var notInstance = [];
    _instance.forEach(function (value) {
        if (params instanceof value === true) {
            res.push(value.name);
        } else {
            notInstance.push(value.name);
        }
    });

    console.log("is Instanceof", res);
    console.log("not instanceof ", notInstance);
}
// @debug for instanceof
//hasInstance(str);
// =========END instanceof=============================


// =========START debug for this , prototype=============================
/**  call, apply và bind là các prototype của Function.
 *  
 * @param {*} params
 */
function Hooman(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `name is ${this.name} and age ${this.age}`;
    };
}

function Timer(time) {
    this.myTime = time;
}

Hooman.prototype.addNew = function () { // obj can overwrite prototype
    return 'call fn_getInfo ' + this.getInfo();
};

Object.prototype.addNew = function () { // every obj can access it
    //return 'call fn_getInfo ' + this.getInfo();
    return 'from common';
};

var man = new Hooman("Steve", 100);
var timer = new Timer(60);

// console.log(timer.addNew());
// console.log(man.addNew());

//console.log(Hooman.prototype === man.__proto__); // true
// =======/.END debug for this , prototype ==================================


// =======START call, bind, apply ==================================
/**
 *
 * call, bind, apply only use for Function
 */
var myObj = {},
    books = [];
//myObj.call(); // myObj.call is not a function
//books.call(); // books.call is not a function

/** call, apply và bind là các prototype của Function.
 * 
 * @param {*} name 
 * @param {*} age 
 */
function say(name, age) {
    console.log(`Hello ${name} has age ${age} & ${this.city} & ${this.id}`);
}
var option1 = {id: 1, city: 'DN', new: 'newest'};
var option2 = {id: 2, city: 'QN'};

// call : obj|param1,param2
//say.call(option1, 'Ngoc Trinh', 90); // Hello Ngoc Trinh has age 90 & DN & 1
//say.call('Truong Giang', 34,option2);// Hello 34 has age [object Object] & undefined & undefined
// => gọi hàm trực tiếp

//apply : obj|array 
//say.apply(option2, ['Huong', 100]); // Hello Huong has age 100 & QN & 2
// => gọi hàm trực tiếp

//bind : obj|param1,param2
//var bindToSay = say.bind(option1, 'bind Name', 199);
//bindToSay(); // Hello bind Name has age 199 & DN & 1
// => không gọi hàm trực tiếp mà trả về hàm mới
// =======END call, bind, apply ==================================


/** @summary 
 * [this] chỉ ra các thuộc tính và phương thức của chính đối tượng đó
 * [prototye] : chỉ có thể truy cập tới phương thức và thuộc tính của chính đối tượng đó 
 * đối tượng thì có thể overwrite lại các prototype
 * một phương thước được tạo từ Object.prototype thì mọi đối tượng đều có thể truy cập 
 */