// alert("working");

function rollDice() {
var a= Math.floor(Math.random() * 6)+1;
return a;
 }
var randomImage1 = "images/dice"+rollDice()+".png";
var randomImage2 = "images/dice"+rollDice()+".png";
 document.querySelector(".dice .img1").setAttribute("src", randomImage1);
 document.querySelector(".dice .img2").setAttribute("src",randomImage2);
 
 document.querySelector("h1").innerHTML="Well Done. Now, refresh again!"