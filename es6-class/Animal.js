class Animal {

    constructor(name, age) {
        
        this.name = name;
        this.age = age;
        let _type = 'High';
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

        this.getInfoFromConstruct = function () {
            return `name is ${this.name} + is age ${this.age}`;
        };

        this.getType = function () {
            return _type + ' secret';
        };

        this.getTypeForPrototype = function () {
            return _type + ' public';
        };
    }


    getType() {
        return this.getTypeForPrototype();
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
//console.log(cat.getType());

// cat can access to this
//console.log(cat.makeFly()); // allow call private method -> < I can fly ! fast or slow >

// cat can access to prototype 
//console.log(cat.getPriceAndFlyFromPrototype());

// cat can not access to private properties, private method 
//console.log(cat._price); // undefined 
//console.log(cat.getPrice()); // chỉ có thể khai báo trong constructor function

//console.log(cat.fly()); // ERR: cat.fly is not a function



// console.log(cat.setPrice(7000).getPrice());


// console.log(cat.getType()); // High secret -> call to this