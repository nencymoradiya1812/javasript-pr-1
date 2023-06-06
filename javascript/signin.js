import nav from "../components/Nav.js";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    conpassword: document.getElementById("conpassword").value,
    number: document.getElementById("number").value,
  };
  localStorage.setItem("user",JSON.stringify(user));
  console.log(user);
});
document.getElementById("nav").innerHTML = nav();
