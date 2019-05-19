JavaScript OOP
============

_Tìm hiểu về javascript hướng đối tượng_

- variable & data type
- instanceof
- this , prototype
- call, bind, apply
- extends, super & constructor
- privated & namespace

## Các Khái niệm 
  - Trong JavaScript, không có khái niệm class như các ngôn ngữ hướng đối tượng khác.
  - ECMAScript(ES) được ra đời để hạn chế sự khác biệt giữa các "ngôn ngữ" JavaScript khác nhau được định nghĩa bởi các trình duyệt.
  - Sau ES5 từ khoá class bắt đầu xuất hiện trong ES6 (năm 2015)
  - ES6 cần Babel : một công cụ chuyển đổi mã lệnh JavaScript viết dựa trên ES6 về ES5(phổ biến ở các trình duyệt).
  - Constructor chỉ khởi tạo các property riêng biệt cho mỗi object được tạo
  - Các method áp dụng chung cho mọi object sẽ được tạo ở prototype.

### 1. variable, data type 
_follow by path_ /typeof/every_is_object.js

```javascript
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
// get Result true 
// startDebug(jsDebug); // debug is Obj
// startDebug(jsDebug, true); // debug typeof Obj

// @ Importance
// but null & undefined cannot extends 
var isNull = null;
var isUndefined = undefined;
// @ get ERR Cannot read property 'addContainer' of null
//console.log(isNull.addContainer()); 
//console.log(isUndefined.addContainer());

// @ Note *
//console.log(typeof 2.5 === typeof 2); // true
//console.log(typeof null); // object 
```
#### summary
| type | Description |
| ------- | ----------- |
| `null` & `undefined` | không thể kế thừa Object.prototype |
| kiểu dữ liệu còn lại | đều có thể kế thừa Object.prototype |

### 2. instanceof 
_follow by path_ /call_bind_apply/index.js
```javascript

/**
 * @ instanceof trong js
 */
function hasInstance(params) {
  var _instance = [String, Function, Array, Object, Number, Boolean];

  var res = [];
  var notInstance = [];
  _instance.forEach(function(value) {
    if (params instanceof value === true) {
      res.push(value.name);
    } else {
      notInstance.push(value.name);
    }
  });

  console.log("is Instanceof", res);
  console.log("not instanceof ", notInstance);
}

var str = "function (params) {}"; // không thuộc instanceof nào cả
var str = 100; // không thuộc instanceof nào cả
var str = null; // không thuộc instanceof nào cả
var str = false; // không thuộc instanceof nào cả

var str = {}; // default thuộc instanceof Object
var str = function(params) {}; // default thuộc instanceof Function & Object
var str = []; // default thuộc instanceof Array & Object
// @debug for instanceof
hasInstance(str);
```


### 3. this, prototype 
_follow by path_ /call_bind_apply/index.js
```javascript
function Hooman(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function() {
    return `name is ${this.name} and age ${this.age}`;
  };
}

function Timer(time) {
    this.myTime = time;
}

Hooman.prototype.addNew = function() { // obj can overwrite prototype
    return 'call fn_getInfo ' + this.getInfo();
};

Object.prototype.addNew = function() { // every obj can access it
    return 'from common';
    //return 'from common ' + this.getInfo(); // ==> ERR this.getInfo is not a function
};

var man = new Hooman("Steve", 100);
var timer = new Timer(60);

console.log(timer.addNew()); // -> from common

console.log(man.addNew()); // -> call fn_getInfo ...
```

| keywork | Description |
| ------- | ----------- |
| `this` | chỉ ra các thuộc tính và phương thức của chính đối tượng đó |
| `prototye` | - chỉ có thể truy cập tới phương thức và thuộc tính của chính đối tượng đó  <br> -  có thể được định nghĩa lại|


### 4. call, bind, apply
_follow by path_ /call_bind_apply/index.js
```javascript
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
say.call(option1, 'Ngoc Trinh', 90); // Hello Ngoc Trinh has age 90 & DN & 1
say.call('Truong Giang', 34,option2);// Hello 34 has age [object Object] & undefined & undefined

// => gọi hàm trực tiếp

//apply : obj|array 
say.apply(option2, ['Huong', 100]); // Hello Huong has age 100 & QN & 2
// => gọi hàm trực tiếp

//bind : obj|param1,param2
var bindToSay = say.bind(option1, 'bind Name', 199);
bindToSay(); // Hello bind Name has age 199 & DN & 1
// => không gọi hàm trực tiếp mà trả về hàm mới
```

| Command | Description |
| ------- | ----------- |
| `call` | - call : obj, param1,param2 <br> - gọi hàm trực tiếp |
| `bind` | - bind : obj, param1,param2 <br> - k gọi hàm trực tiếp mà trả về hàm mới|
| `apply` | - apply : obj, [param1,param2] <br> - gọi hàm trực tiếp |

```
call, apply và bind là các prototype của Function.
==> call, bind, apply chỉ dùng cho Function 
```

### 5. extends, super, constructor
_follow by path_ /extends/..

### @extends
```javascript
var Person = (function () {
    function Person(gender, name) {
        this.name = name;
        this.gender = gender;

        this.setName = function (name) {
            this.name = name;
            //return this;       
        };
        this.getName = function () {
            return this.name;        
        };
    }

    Person.prototype.getAllFromPrototype = function () {
        return "you are " + this.gender + " and name is " + this.name;
    };

    return Person;
})();

function Child() {
    this.city = 'HCM';

    // prototype chain
    //this.name = 'Name Of Child';
}

// Child extends Person by Prototype
Child.prototype = new Person('genderParent', 'nameParent');

// new Child
var boy = new Child();
// prototype chain
console.log(boy.name); // nameParent


// var name = boy.setName("Trung Nguyen");
// console.log(boy.name); // Trung Nguyen

// var getAll = boy.getAllFromPrototype();
// console.log(getAll); //you are genderParent and name is nameParent
```
#### summary @extends
```
- JavaScript thực hiện kế thừa thông qua prototype 
- Khi ta truy cập 1 thuộc tính hay phương thức của 1 đối tượng
 + đầu tiên sẽ tìm trong constructor chính đối tượng đó
 + nếu không tìm thấy sẽ tìm lên cấp __proto__ của chính đối tượng đó
 + cho tới Object.prototype
==> nếu không tìm thấy sẽ trả về undefined
```


## ES6 Class JavaScript

- let & var
- extends, super & constructor
- privated 
& namespace

### 1. let & var
```javascript
function startVar() {
  for (var x = 0; x < 5; x++) {
      console.log(x);
  }
  console.log(x);
}

function startLet() {
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  console.log(i);
}
//startVar(); // 0, 1, 2, 3, 4, >> 5 <<
//startLet(); // 0, 1, 2, 3, 4, >> i is not defined <<
```
#### summary
```
 - var  ==> function-scoped
 - ES6 (2015) : let, const  ==> block-scoped
```
## Class

```javascript
  class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.type = 'High';
        //private properties
        let _price = 9000;
        
        this.getPrice = function () {
            return _price;
        };

        this.setPrice = function (price) {
            _price = price;
            return this;
        };

        // private method
        let fly = function () {
            return ' < I can fly ! fast or slow > ';
        };

        this.makeFly = function () {
            return fly();
        };

        this.getInfoFromConstruct = function() {
            return `name is ${this.name} + is age ${this.age}`;
        };

        this.getType = function() {
            return this.type + ' secret';
        };
    }


    getType() {
        return this.type;
    }

    getInfo() {
        return `Animal: name ${this.name} + age ${this.age}`;
    }

    getPriceAndFlyFromPrototype() {
        return 'from prototype: get Fly ' +
            this.makeFly() + ' and get Price ' +
            this.getPrice();
    }
}

const cat = new Animal('Tom', 5);
//console.log(cat.setPrice(7000).getPrice());
console.log(cat.getPriceAndFlyFromPrototype())
//console.log(cat.makeFly()); // allow call private method
//console.log(cat.getPriceAndFlyFromPrototype());

// console.log(cat.getType()); // High secret
```
#### summary
```
 - Từ khoá "this" bên trong constructor function chỉ chính đối tượng đó.
 - những class con kế thừa từ class cha không thể truy cập trực tiếp tới những thuộc tính bên trong constructor function.
 - class con chỉ có thể truy cập thông qua prototype (prototype sẽ gọi tới this)
 - prototype không thể gọi trực tiếp tới private 
- private : được dùng bên trong class
```
## extends Class 

```javascript
class Lion extends Animal {
    constructor(name, age, strong) {
        super(name, age);

        this.strong = strong;
        let _level = 'max';
        let _flagKing = false;

        this.isKing = function () {
            if (this.strong !== _level) {
                _flagKing = false;
                return _flagKing;
            }
            return this;
        };

        this.getInfo = function () {

            if (this.isKing()) {
                return `LION name: ${this.name} + age ${this.age} + level ${this.strong} level ${_level}`;
            }
            return 'not king';
        };
    }

    getMore() {
        //return this.getType(); // -> High secret
        return super.getType(); // -> High public
    }

    getParentInfo() {
        //console.log(super.getInfoFromConstruct()); 
        // -> ERR: getInfoFromConstruct is not function

        // doi voi super khi kế thừa từ class cha,
        // class con chỉ có thể truy cập tới prototype 
        return super.getPriceAndFlyFromPrototype(); 
    }

    static onLoaded() {
        console.log('static load');
    }
}
//Lion.onLoaded(); // static load

const lion = new Lion('SUTU', 10, 'max');
//console.log(lion.isKing());
//console.log(lion.getInfo());

//console.log(lion.getMore()); // defined at constructor and prototype
console.log(lion.getParentInfo());
```

### summary
```
- super() : gọi lại constructor của lớp cha
- để gọi tới chinh xac prototype cha, ta dùng super.prototype 
- static : được tạo ra trước khi đối tượng được khởi tạo 
```

## namespace 

```javascript
let AppMain = (function () {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
    return {
        Point: Point
    };
})();
//let p = new Point(123, 456); // Point is not defined
let p = new AppMain.Point(123, 456); 
console.log(p.y); // 456
```