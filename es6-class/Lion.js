class Lion extends Animal {
    
    constructor(name, age, strong) {
        
        super(name, age);

        this.strong = strong;
        //this.type = 'Low';
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
                return `LION name: ${this.name} + age ${this.age} + strong ${this.strong} level ${_level}`;
            }
            return 'not king';
        };
    }

    getMore() {
        //return this.getType(); // -> High secret
        return super.getType(); // -> High public
    }

    getParentInfo() {
        //console.log(super.getInfoFromConstruct()); //  ERR: getInfoFromConstruct is not function

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

//console.log(lion.getMore());


//console.log(lion.getParentInfo());

//console.log(lion.getMore());

// để gọi tới chinh xac prototype cha, ta dùng super.prototype 

