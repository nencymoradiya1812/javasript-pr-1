import nav from "../components/Nav.js";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let user=JSON.parse(localStorage.getItem("user"));
  console.log(user);
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if(email==user.email && password==user.password){
    alert("logged in");
    localStorage.setItem("loggedIn",true);
    window.location.href="/javasript-pr-1/index.html";
  }else{
    alert("Invalid");
  }
});
console.log(nav)
document.getElementById("nav").innerHTML = nav();
