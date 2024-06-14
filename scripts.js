// const obj = {};

// const key = "proto";
// obj[key] = 13;

// console.log(obj[key]);

// Q2
// let  x=5 ;
//  x = 10;


// function foo() {
//   console.log(x);
// }

// foo();
// Q3
var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address);
    }
    }

    var getAddress = obj1.getAddress;
    // var obj2 = {name:"akshay"};
    // obj2.getAddress();
    console.log(getAddress);
    console.log(obj1.address);


    