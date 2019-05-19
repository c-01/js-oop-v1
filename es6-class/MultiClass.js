function makeTransmitterClass(Superclass = Object) {
    return class Transmitter extends Superclass {
        transmit() {
            console.log('i am transmit');
        }
    };
}

function makeReceiverClass(Superclass = Object) {
    return class Receiver extends Superclass {
        receive() {
            console.log('i am receiver');
        }
    };
}

function makeHomeClass(Superclass = Object) {
    return class Home extends Superclass {
        constructor() {
            super();
            this.name = 'MyHome';
        }

        sayHello() {
            console.log('Hello');
        }

        getHome() {
            console.log('i am getHome');
        }
    };
}
//   class InheritsFromMultiple extends makeTransmitterClass(makeReceiverClass()) {}
class InheritsFromMultiple extends makeReceiverClass(makeTransmitterClass(makeHomeClass())) {}

const inheritsFromMultiple = new InheritsFromMultiple();
console.log(inheritsFromMultiple);

// inheritsFromMultiple.transmit(); 
// inheritsFromMultiple.receive(); 
// inheritsFromMultiple.sayHello(); 
// inheritsFromMultiple.getHome(); 
// console.log(inheritsFromMultiple.name); 

// https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/