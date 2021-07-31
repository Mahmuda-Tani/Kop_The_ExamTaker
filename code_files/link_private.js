
var btn=document.getElementById("btn");
//btn.style.color="red"
btn.addEventListener("click", displayForm);

function displayForm() {

  var x=document.getElementById("st");
 // x.style.backgroundColor="red";
  x.classList.remove("enter_email-a");
  x.classList.add("enter_email-b");

}