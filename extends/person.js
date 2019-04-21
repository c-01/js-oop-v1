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



/** ES6
 * USE Class
 */
// class Person {
//     constructor(gender, name) {
//         this.gender = gender;
//         this.name = name;

//         this.setName = function (name) {
//             this.name = name;
//             return this;
//         };

//         this.getName = function () {
//             return this.name;
//         };

//     }

//     getAllFromPrototype() {
//         return "you are " + this.gender + " and name is " + this.name;
//     }
// }

