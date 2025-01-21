//const users = ["akhil","sanyu paul", "pranav","muzahid","rajiummar"];
//for(let i=0;i<users.length;i++)
//{
  //  console.log(users[i]);
//}
//let x = users.map((users)
//const users=["akhil","sanyu paul","pranv","muzahid","rajiummar"];
//users.push("charan sai");
//console.log(users);
 //users.pop("sanyu paul");
 //console.log(users);
//users. unshift("akhil");
//console.log(users);
//users.shift("rajiummar");
//console.log(users);
//let x = users.join("");
//console.log(x,typeof(x));
//let user1 = "pranav";
//let user2 = "Sanyu paul";
//let user3 = "rajiummar";
//let user4 = "muzahid";
//let user5 = "akhil";
//let user6 = "charan sai"
//let users = ["pranav","sanyu paul","rajiummar","muzahid"];
//console.log(users);
//for(let i = 0;i<users.length;i++){
  //console.log(users[i]);
//}
//let users = ["pranav","sanyu paul","rajiummar","muzahid"];
//users.map((user,i)=>{
  //   console.log(user,i);
//})


//let x = users.map((user,i)=>{
  //return user;
//})
//console.log(x);

//let x = users.forEach((user,i)=>{
  //console.log(user);
  //return user;

//});
//console.log(x);
//let userDetails ={
  //name:"koushik",
 // age:20,
  //address:{
  //city:"Hyderbad",
  //area:"secundrabad",
  //streetno:456,
  //pincode:{
    //pin1:123456,
    //pin2:456789
  //}
//}
//};
//console.log(userDetails.name);
//console.log(userDetails.address.city);
//console.log(userDetails.address.pincode.pin1);
//userDetails.name =  "koushik";
//! JSON 
let userData ={
  name : "Koushik",
  age  :  20,
  city : "Hyderabd",
};
console.log(userData.name, typeof(userData));
let x = JSON.stringify(userData);
console.log(x,typeof(x));
let y = JSON.parse(x);
console.log(y);