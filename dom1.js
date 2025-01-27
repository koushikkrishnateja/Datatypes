// // let ele =  document.createElement("h1");
// // ele.innerText= "dynamic creation of html element";
// // ele.setAttribute("id","demo")
// // console.log(ele);
// // document.body.appendChild(ele);
// // let image = document.createElement("img");
// // image.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2F4k-ultra-hd-mustang&psig=AOvVaw1_cTIlqPsONXSU0_73R367&ust=1737871459011000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDtjOmZkIsDFQAAAAAdAAAAABAE";
// // console.log(image);
// // document.body.appendChild(imaage)




// // let form = document.querySelector("form");
// // let username = document.querySelector("#uName");
// // let email =  document.querySelector("u#Email");
// // let password = document.querySelector("#uPsw");
 
// // form.addEventListener("submit",(Event)=>){
// // Event.preventDefault();
// // }



// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// console.log(mainEle) ;

// let topEle =  document.createElement("div");
// topEle.setAttribute("class", "topBlock");

// let image = document.createElement("img");
// image.src="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=2048x2048&w=is&k=20&c=S3Zow4qlkOvWySLGoM4MCERydeHBxRbQUjnSKH2vbNY=";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// // console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// let btn =  document.createElement("button");
// btn.innerText = "View More";


// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle)




let form = document.querySelector("form");
let username = document.getElementById("uName");
let password =  document.getElementById("uPass");
let gender  = document.getElementById("gender");
  // console.log("gender");
    form.addEventListener("submit",Event=>{
        Event.preventDefault();
    let un = username.value();
    let pw = password.value;
    for(let i = 0;i<gender.length-1;i++){
        if(gender[i].checked == true){
            gen += gender[i].value
        }
    };
    let userDetails={
        username:un,
        password:pw,
        gender:gen,
    };
    console.log(userDetails);
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

    })
