// @ES5 extends from prototype syntax
Child.prototype = new Person('genderParent', 'nameParent');
var boy = new Child();
console.log(boy);

console.log(boy.name); // prototype chain
// Object.prototype.name = 'tr';
// console.log(boy.name);
// var name = boy.setName("Trung Nguyen");
// console.log(boy.name);

// console.log(boy.getName());
var getAll = boy.getAllFromPrototype();
console.log(getAll); 



//var boy = new Child(); // issue => need apply super()


// boy.setName("Trung Nguyen");
// console.log(boy.getAll());


// var name = boy.makeFromPrototypeNew();
// console.log(name);

//console.log(boy);