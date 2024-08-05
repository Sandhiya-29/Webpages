"use strict";

const form2=document.getElementById("form1");
const form3=document.getElementById("form3");
const progressEl=document.getElementById("progress");
const circle=document.querySelectorAll(".circle");
let currentActive=Login;


function Login() {
    form2.style.right = "-450px";
    form2.style.right = "25px";
}
function backtwo(){
    form2.style.left = "25px";
    form2.style.left = "450px";
}
function ResetP(){
    form2.style.left="-850px";
    form3.style.left="50px";
}
function BackOne(){
    form2.style.left="50px"
    form3.style.left="850px"
}
const btnsEvents = () => {
        // const Signup = document.querySelectorAll(".signup");
        // const Next=document.querySelectorAll("back2");
        const Reset=document.querySelectorAll(".ResetP");
        const Back=document.querySelectorAll("back");
       // const next2 = document.getElementsByClassName("next2");

        // Signup.addEventListener("click",Sign);
        // Next.addEventListener("Click", backtwo);
        Reset.addEventListener("click",ResetP);
        Back.addEventListener("click",BackOne);
};
document.addEventListener("DOMContentLoaded", btnsEvents);




const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
let regExpWeak = /[a-z]/;
let regExpMedium=/\d+/;
let regExpStrong=/.[!,@,#,$,%,^,&,*,]/;


function trigger(){
    if(input.value !=" "){
        indicator.style.display="block";
        indicator.style.display="flex";
if(input.value.length <= 3 && (input.value.match(regExpWeak) ||
         input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
 if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium))
         || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || 
        (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
 if(input.value.length >= 6 && input.value.match(regExpWeak) &&
         input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;

     if(no == 1){
        weak.classList.add("active");
     }
     if(no == 2){
        medium.classList.add("active");
     }else{
        medium.classList.remove("active");
     }
     if(no == 3){
        strong.classList.add("active");
     }else{
        strong.classList.remove("active");
     }


    }else{
        indicator.style.display="none";
    }

}
 
 function validate(event){
    event.preventDefault();

    let Email = document.getElementById('Email').value;
    let Password = document.getElementById('Password').value; 
    
    var validRegex = /^[.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[-9-]+)*$/;

    if (Email === 'merkat@gmail.com' && Password === 'web_dev') {
         alert('verify the captcha!');
    //   window.location.assign("Signup-2.html");
    }
   else{
    alert('invalid details and/or Enter the given details!');
   }
   
}
   
    
// function validateEmail(EmailField){
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     if (reg.test(EmailField.value) == false) 
//     {
//         alert('Invalid Email Address');
//         return false;
//     }

//     return true;

//}

 function validateForm(event){
    event.preventDefault();

    let NewPassword= document.getElementById('New').value;
    let ConfirmPassword  = document.getElementById('Confirm').value; 
    
    if (NewPassword == "" || ConfirmPassword == "") {
         alert('Enter the New password and/or Confirm password ');
      
    }
   else('Pasword reset!')

 }
  
 let captcha;
 function generate() {
 
 
     document.getElementById("captcha").value = "";
 
     
     captcha = document.getElementById("image");
     let uniquechar = "";
 
     const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              
     for (let i = 1; i < 5; i++) {
         uniquechar += randomchar.charAt(Math.random() * randomchar.length)
     }
 
     captcha.innerHTML = uniquechar;
 }
 
 function printmsg() {
     const rcaptcha = document.getElementById("captcha").value;
    
     if (rcaptcha == captcha.innerHTML) {
        alert('Captcha Verified');
        window.location.assign("Signup-2.html"); 
        //  let s = document.getElementById("key").innerHTML = "verified"; 
        //  generate() ;
         
        }
     else {
        alert('Captcha not verified!');
        
        //  let s = document.getElementById("key").innerHTML = "not verified";
         generate();
     }
 }
 
//  function setLoginSessionCookie(username) {
//     const expires = new Date();
//     expires.setTime(expires.getTime() + (1 * 60 * 60 * 1000)); // 1 hour expiry
//     const cookieValue = `username=${username}; expires=${expires.toUTCString()}; path=/`;
//     document.cookie = cookieValue;
//   }   
  
//   const Email = document.getElementById('Email');
//   const Password = document.getElementById('Password');
//   const Login=document.getElementById('next1');
//   const form1 = document.getElementById('form1');
//   const errorElement=document.getElementById('error');

// form.addEventListener('submit', (e) => {
//     let messages = []
//   if (Email.value === '' || Email.value == null) {
//     messages.push('Email is required')
//   }
// })

// if (Password.value.length <= 6) {
//     messages.push('Password must be longer than 6 characters')
//   }

// if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }









//  const form = document.getElementById("form1");
//  const loginButton = document.getElementById("next1");
//  const loginErrorMsg = document.getElementById("login-error-msg");

//  loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//      const Email = form.Email.value;
//      const Password = form.Password.value;

//      if (Email.value == "merkat@gmail.com" && Password.value == "web_dev") {
//         alert("successfuly logged in!")
//         location.reload();
//     } else
//         loginErrorMsg.style.opacity = 1;
//     }
    
    // )


//     function validation(){
//                  if(document.Formfill.Email.value==""){
//                     alert("Enter Your mailid!");
//                  }else{
//                     alert("succeesfully logged in!")
//                  }
// }

// function validation(){
//         if(document.Formfill.Email.value==""){
//         document.getElementById("form1").placeholder="Enter your mail!";
//     } else if(Password.value==""){
//         document.getElementById("form1").placeholder="Enter your Password!";
//     }else if(Password.value.length<6){
//     document.getElementById("form1").placeholder="Password must be atleast 6-digits*";
//     }
//  }

// function validation(){
//     if(document.Formfill.Email.value==""){
//         document.getElementById("result").innerHTML="Enter your password!";
//         return false;
//     }else if(document.Formfill.Password.value==""){
//         document.getElementById("result").innerHTML="Enter your password!";
//         return false;
//     }else if(document.Formfill.Password.value.length<6){
//         document.getElementById("result").innerHTML="password must be atleast 6-digits*";
//         return false;
//     }
// } 

 
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