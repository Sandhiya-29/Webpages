import React from 'react';
 import aboutus from '../Components/IMG-20240813-WA0004.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './IMG-20240816-WA0002.jpg';
import instagram from './download (1).jpeg';
 import facebook from './download.png';
 import twitter from './new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10794.avif';

function Aboutus () {

    const navigate = useNavigate();
    const location = useLocation();
   
          const handleNavigate = (path) => {
               navigate(path);
                 };

    
      
    return(
        <div>
        <div className="header">
        <a href="#l" onClick={() => handleNavigate('/')}>
              <img className='logo' src={logo} alt="logo" width="160px" height='50px' />
              </a>
              <a href="#l" onClick={() => handleNavigate('/')}>
              <h3>Home</h3>
              </a>
              <a href="#a" onClick={() => handleNavigate('/Aboutus')}>
               <h3 style={{ color: location.pathname === '/Aboutus' ? 'green' : 'white' }}>About Us</h3>
               </a>
               <a href="#c" onClick={() => handleNavigate('/Contactus')}>
               <h3 className='contact-us'>Contact Us</h3>
               </a>
        </div>
        <div className='about-us' id='aboutus'>
                    <h1>About Us</h1>
                    <img src={aboutus} alt="aboutus" width="1250px" />
            </div>
            <div className='footer' id='footer'>
                <p><span style={{color:'white', fontSize:'22px' , fontWeight:'800', textDecoration:'underline'}}>Contact us:</span> No.77, Arulananda Nagar, 1st Cross Thanjavur | Phone: +91 97903 66846</p>
                <p>Follow us on social media</p>
                <div className='social-icons'>
                    <a href='#f'><img src={facebook} alt='Facebook' /></a>
                    <a href='#t'><img src={twitter} alt='Twitter' /></a>
                    <a href='#i'><img src={instagram} alt='Instagram' /></a>
                </div>
            </div>


        </div>
    )
}


export default  Aboutus;