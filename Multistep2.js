"use strict";

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
// submitBtn.addEventListener("click", function(){
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
//   setTimeout(function(){
//     alert("Your Form Successfully Signed up");
//     location.reload();
//   },800);
// });
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
// prevBtnFourth.addEventListener("click", function(event){
//   event.preventDefault();
//   slidePage.style.marginLeft = "-50%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });

function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
}

var Email = document.getElementById("Email");
var emailerror = document.getElementById("emailerror");

function validateEmail(){
    if(!Email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML="Please Enter valid email";
        return false;
    }
    emailerror.innerHTML= " ";
    return true;
    
}
function validate(event){
  event.preventDefault();

  let FirstName = document.getElementById('fname').value;
  let LastName = document.getElementById('Lname').value;
  let Email = document.getElementById('Email').value;
  let Phonenumber = document.getElementById('Mobile').value;
  let DOB = document.getElementById('date').value;
  let Gender = document.getElementById('Gender').value;
  let Username = document.getElementById('Username').value;
  let Password = document.getElementById('password').value;

  if (FirstName == "" || LastName == "" || Email == "" || Phonenumber == "" || DOB == "" || Gender == ""||
  Username == "" || Password == "" )
  {
       alert('something went wrong');
  }
     else {
    alert('Registered successfully');
  window.location.assign("Signup.html");
 
  }
  
  

}


 