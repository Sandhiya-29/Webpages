"use strict";

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const progressEl = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let currectActive = 1;

    

function nextOne() {
    form1.style.left = "-450px";
    form2.style.left = "25px";

    currectActive++;
    if(currectActive > circles.length){
        currectActive = circles.length;
    }

    
        // if(Username.value== "" || Email.value== "" || Password.value== "" || Cpassword.value== "" ){
        //     document.getElementById("next1").innerHTML="Enter the given details!"
        // }
    

    update();
    }

    

function backOne(){
    form1.style.left = "25px";
    form2.style.left = "450px";

    currectActive--;
  if (currectActive < 1) {
    currectActive = 1;
  }
  update();
}
function nextTwo(){
    form2.style.left="-450px";
    form3.style.left="25px";

    currectActive++;
    if(currectActive > circles.length){
        currectActive = circles.length;
    }
    update();
}
function backTwo(){
    form2.style.left="25px";
    form3.style.left="450px";
    
    currectActive--;
  if (currectActive < 1) {
    currectActive = 1;
  }
  update();
}
function update(){
    circles.forEach((circle,indx) =>{

        if(indx < currectActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
        const actives=document.querySelector('.active');

        progressEl.style.width = ((actives.length -1) / (circles.length +1)) * 100 + "%";
    });
}
const btnsEvents = () => {
    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const back1 = document.getElementById("back1");
    const back2 = document.getElementById("back2");

      next1.addEventListener("click", nextOne);
    back1.addEventListener("click", backOne);
    next2.addEventListener("click",nextTwo);
    back2.addEventListener("click", backTwo);

    
   
};


document.addEventListener("DOMContentLoaded", btnsEvents);


function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username!";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Username atleast should be five letter";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your mail!";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password!";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="password must be atleast 6-digits*";
        return false;
    }
    else if(document.Formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML="Enter confirm password!";
        return false;
    }
    
    else if(document.Formfill.Cpassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="password dose'nt matched!";
        return false;

    }

// const Username = document.getElementById('Username')
// const Email = document.getElementById('Email')
// const Password = document.getElementById('Password')
// const Cpassword = document.getElementById('Cpassword')
// const form = document.getElementById('form1')
// const errorElement=document.getElementById('error')


// form.addEventListener('submit', (e) =>{
//     let messages = []
//     if(Username.value =="") {
//         messages.push('username is required')
//     }

//     if(Password.value ==""){
//         messages.push('password is required')
//     }

//     if(messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })
}
function validate() {
    let Username = document.getElementById('Username').value;
    let Email = document.getElementById('Email').value;
    let Password = document.getElementById('Password').value; 
    let Cpassword = document.getElementById('Cpassword').value;

    if (Username === ' ') {
        alert('Enter the Username');
    }else if (Username.value.length <6) {
        alert('Username must atleast six letters!');
    }
     
    else if(Email === ' ') {
        alert('Enter your mailid!');
    }
    else if(Password === ' ') {
        alert('Enter Password');
    }
    else if (Password.vaue.length <6) {
        alert('Password must be 6 characters');
    }
    else if (Cpassword === ' ') {
        alert('Enter confirm password');
    }
    else if (Cpassword.value!==Password.value) {
        alert('Password does not matched!');
    }

    else {
        alert('Saved Successfully')
    }
    }

















// form1.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const Usernamevalue = Username.value.trim();
// 	const Emailvalue = Email.value.trim();
// 	const Passwordvalue = Password.value.trim();
// 	const Cpasswordvalue = Cpassword.value.trim();
	


//     if(Usernamevalue === '') {
// 		setError(Username, 'Username cannot be blank');
// 	} else {
// 		setSuccess(Username);
// 	}
	
// 	if(Emailvalue === '') {
// 		setError(Email, 'Email cannot be blank');
// 	} 
// 	 else {
// 		setSuccess(Email);
// 	}
	
// 	if(Passwordvalue === '') {
// 		setError(Password, 'Password cannot be blank');
//     } else {
// 		setSuccess(Password);
// 	}
	
// 	if(Cpasswordvalue === '') {
// 		setError(Cpassword, 'Confirm password cannot be blank');
// 	} else if(Passwordvalue !== Cpasswordvalue) {
// 		setError(Cpassword, 'Password does not match');
// 	} else{
// 		setSuccess(Cpassword);
// 	}
// }

// function setError(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control error';
	
// }

// function setSuccess(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
//}












    // var result=document.getElementById('result');
    // result.classList.validation('active');
    



function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
    
}
