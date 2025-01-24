// console.log(10);
// console.log(20);
// setInterval(()=>{
//     document.write("MRU",519);
// })
// console.log(40);
// //console.log(50);

//const { reject } = require("async");


//! promise
// let p1 = new Promise((resolve , reject)=>{});
//    console.log(p1);
  
// let p2 = new Promise((resolve , reject)=>{
//     resolve("Success");
// });
// //console.log(p2);
// p2.then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))
//    .finally(()=>console.log("final"))



// let p3 =  new Promise((resolve , reject)=>{
//     reject ("Failures");
// });
// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))
//console.log(p3);

//!api fetching 
// function fetchUsers(){
//     let response = fetch("https://jsonplaceholder.typicode.com/posts");
//      //console.log(response);
//      response.then(res=>{
//         // console.log(res);
//         // console.log(res.json());
//         return res.json().then(data=>{
//             console.log(data);
//         })
//      })
//      .catch(err=>console.log(err))
// }  
// fetchUsers();
// ! async & await
// let p = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },4000);
// });
// async function demo(){
//     console.log("start");
//     let x = await p;
//     console.log(x);
//     console.log("end");

// }
// demo();
// async function fetchUsers(){
//  let response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
//  let data = await response.json();
//     console.log(data);

 
// }
// fetchUsers();
console.log(window);
