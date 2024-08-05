
        emailjs.init("AHQl0faZM6Bezuysi");
        
        
        let generatedVerificationCode = function  generateOTP() {
          return  Math.floor(10000 + Math.random() * 90000);
      }
  
        
         const userEmail = document.getElementById('email').value;
         const templateParams = {
                to_email: userEmail,
                OTP : generatedVerificationCode(),
                
              };
              
              
       
          
       function sendOTP(){
        
       if(email.value==""){
        document.getElementById('email');
        alert('Enter the email!');
       }
       else{
        emailjs.send('service_anp74yc', 'Email_OTP', templateParams)
        alert('OTP sent to your email successfully');
       }
    }

    // function verifyOTP(){
        
    //     if(verify.value==""){
    //      document.getElementById('email');
    //      alert('Enter the otp!');
    //     }
    //     else if(OTP.value !== verify.value){
    //       alert('Invalid OTP!');
    //      }
    //     else{
    //         alert('otp verified successfully');
    //         window.location.assign("Multistep2.html");
    //     }
    //  }
     function verifyCode() {

      
        const userenteredVerificationCode = Number(document.getElementById('verificationCode').value);
      console.log("generatedVerificationCode"+ templateParams.OTP);
      console.log(userenteredVerificationCode);
      // if(userenteredVerificationCode !=null ){
      
      
        if (userenteredVerificationCode === templateParams.OTP) {
          console.log("success");
            alert('Verification successful!');
        
        } else {
          alert('Verification failed. Please check the code.');
        
    }}
    // }