//function demo(){
//    console.log("function is excuting.....");
//}
//demo();
//demo();


//!function with parameters and argus
//let a = 10 // parameter,10=argus
5,6
8,9 
3,4
function add(a,b){
    console.log(a+b);

}
add(5,6);
add(8,9);
// !anonymous function




// function expression 
//let x = function(){
  //  console.log("anonymous is not executing but executing with variable");
//}

//console.log(x);
//x();

//arrow function
//let x =(a,b)=>console.log(a,b); {
    
//}
//x();
// impicit returns and explicit returns.
function test1(a,b){
    console.log("hello world");
    return a+b;
    console.log("hi but this is not working");
}
console.log(test1(5,5));
let x =(a,b)=>{return a*b};
console.log(x(5,5));
let y = (a,b) => a+b;
console.log(y(100,200));
