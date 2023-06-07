import nav from "../components/nav.js"
  document.getElementById("nav").innerHTML=nav()
console.log(nav);
 
const ui=(demo)=>{
   console.log(demo)

   demo.map((ele)=>{
           let img=document.createElement("img")
           img.src=ele.thumbnail
           document.querySelector(".box-2").append(img)
   })
}

fetch("https://dummyjson.com/products")
.then((response)=>response.json())
.then((product)=>ui(product.products))