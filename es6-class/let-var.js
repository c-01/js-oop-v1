// issue seminar 
// //let isTrue = false;
// let isTrue = new Boolean(false);
// console.log(isTrue instanceof Object);
// if (isTrue.valueOf()) {
//     console.log('oke');
// } else {
//     console.log('not oke');
// }


function startVar() {
    for (var x = 0; x < 5; x++) {
        console.log(x);
    }
    console.log(x);
    console.log('============================');
}

function startLet() {
    
    for (let i = 0; i < 5; i++) {
        console.log(i);
        
        // 2.
        // if (true) {
        //     let color = 'Green';
        // }
        // console.log(color);

    }
    //console.log(i);
    
    //console.log(color);
}
// 1
//startVar(); // 0, 1, 2, 3, 4, >> 5 <<
//startLet(); // 0, 1, 2, 3, 4, >> i is not defined <<
// ====>>>>>
    // var  ==> function-scoped
    // ES6 (2015) : let, const  ==> block-scoped

// 2
//startLet();
// => 0 , color is not defined

function debugLet() {
    let coffee = 'Trung Nguyen';

    if (true) {
        let coffee = 'Min Chu'; // khac voi coffee o tren
        console.log(coffee);
    }
    console.log(coffee);   
}

//debugLet();

// hoisting Js
function getX() {
    console.log(x); 
    var x = 100;
    console.log(x);
//@==> var is hoisting: JavaScript se compilation(biên dịch) nhu sau:
    // var x;
    // console.log(x); // undefined
    // x = 100;
    // console.log(x); // 100

    // **** NOTE :
    // Hoisting chỉ chuyển việc khai báo các biến lên trên cùng, 
    // còn các phép gán vẫn giữ nguyên vị trí

    //@ES6 
    // console.log(x); 
    // let x = 100;
    // console.log(x);
    
}

//getX(); 
    // => undefined , 100
    //ES6 get ERR: Cannot access 'x' before initialization
    