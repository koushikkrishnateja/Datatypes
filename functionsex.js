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
//function test1(a,b){
    //console.log("hello world");
   // return a+b;
    //console.log("hi but this is not working");
//}
//console.log(test1(5,5));
//let x =(a,b)=>{return a*b};
//console.log(x(5,5));
//let y = (a,b) => a+b;
//console.log(y(100,200));



// higher order function& call back function
//function hof(a){
//return a;

//} 
//let x =hof(function(){return "callback function"});
//console.log(x);
//let y = function(){return "callback function"};
//console.log(y());
//let users = ["manoj","akhil","sanyu paul","pranav","muzahid","rajiummar"];
//users.map(function(user){
  //console.log(user)

//})
//var a = 10;
//let b = 45;
//function x(){
  //var user = "koushik";
  //let company = "tcs";
  //const sal = 1234567890;
  //console.log(user);
  //console.log(company);
  //console.log(sal);
  //console.log(a,b);
//}
//x();






function x(){
let a = 10;
const b = 20;
console.log(a,b);
function y(){
  let p = "js";
  var q = "ReactJs";
  console.log(p,q);
  function z(){
    const username ="Koushik Krishna Teja";
    console.log(username);
    console.log(a);
    console.log(q);
  }
   z();
}
 y();
}
x();