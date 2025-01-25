// let ele =  document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// ele.setAttribute("id","demo")
// console.log(ele);
// document.body.appendChild(ele);
// let image = document.createElement("img");
// image.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2F4k-ultra-hd-mustang&psig=AOvVaw1_cTIlqPsONXSU0_73R367&ust=1737871459011000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDtjOmZkIsDFQAAAAAdAAAAABAE";
// console.log(image);
// document.body.appendChild(imaage)




let form = document.querySelector("form");
let username = document.querySelector("#uName");
let email =  document.querySelector("u#Email");
let password = document.querySelector("#uPsw");
 
form.addEventListener("submit",(Event)=>){
Event.preventDefault();
}