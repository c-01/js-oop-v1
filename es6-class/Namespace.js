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
