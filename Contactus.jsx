import React, {useState} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import logo from './IMG-20240816-WA0002.jpg';
import instagram from './download (1).jpeg';
import facebook from './download.png';
import twitter from './new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10794.avif';
import './Contactus.css'
function Contactus() {

    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigate = (path) => {
        navigate(path);
          };



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form fields
        if (!name || !email || !phonenumber || !message) {
            setErrorMessage('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:3008/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phonenumber, message }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setFeedbackMessage('Email sent successfully!');
                setErrorMessage(''); // Clear any previous errors
            } else {
                setErrorMessage(data.message || 'Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
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
               <h3>About Us</h3>
               </a>
               <a href="#c" onClick={() => handleNavigate('/Contactus')}>
               <h3 style={{ color: location.pathname === '/Contactus' ? 'white' : ' #07d870', backgroundColor: 
                location.pathname === '/Contactus' ? 'rgb(3, 100, 3)' : '#fbfafa' }} className='contact-us'>Contact Us</h3>
               </a>
        </div>
        
        <div className="contactus">
                <div className="leftflex">
                    <div className="contactpara">
                    <p>Your thoughts matter to us, and we're keen to discuss our product</p>
                    <p>Contact us with any questions, and we'll be in touch shortly</p>
                    <p>Contact us: No.77, Arulananda Nagar, 1st Cross Thanjavur </p>
                    <p>  Phone: +91 97903 66846</p>
                    
                    </div>
                </div>
                <div className="rightflex">
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        {feedbackMessage && <p style={{ color: 'green' }}>{feedbackMessage}</p>}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="first-name"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Id</label>
                            <input className='email'
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input className="number"
                                type="tel"
                                id="phonenumber"
                                name="phonenumber"
                                placeholder="Enter Phone Number"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Enter your message</label>
                            <textarea className='textarea'
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <button type="submit">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
                                
            <div className='footer' id='footer'>
                <p className="contact"><span style={{color:'white', fontSize:'21px', fontWeight: '800',
                    textDecoration:'underline' }}>Contact us:</span> No.77, Arulananda Nagar, 1st Cross Thanjavur | Phone: +91 97903 66846</p>
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

export default Contactus;