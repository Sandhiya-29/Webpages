import React, {useState} from 'react';
import Slider from "react-slick";
import logo from './IMG-20240816-WA0002.jpg';
import image1 from './IMG-20240813-WA0006.jpg';
import image2 from './IMG-20240813-WA0000.jpg'
import image3 from './IMG-20240819-WA0004.jpg';
import image4 from './IMG-20240813-WA0007.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import comfort from './Comfort.jpg';
import pure from './Pure.jpg';
import rest from './Rest.jpg';
import ethinically from './ethically-sourced-natural-organic-products-vector-stock-illustration_100456-11478.avif'
import eco from './360_F_513495270_SUar4hixSNKwpRKWphIHjNudK9RFhuCV.jpg'
import nature from './organic-logo-template-in-white-background-free-vector.jpg'
import { useNavigate, useLocation } from 'react-router-dom';
import instagram from './download (1).jpeg';
import facebook from './download.png';
import twitter from './new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10794.avif'
import mattress1 from './IMG-20240813-WA0012~2.jpg';
import mattress2 from './IMG-20240813-WA0005~2 (1).jpg';
import mattress3 from './IMG-20240813-WA0009.jpg';
import kids from './IMG-20240816-WA0008.jpg';
import pillow1 from './IMG-20240813-WA0003~2.jpg';
import elliptical from './istockphoto-610776534-612x612.jpg';
import pillow2 from './IMG-20240813-WA0002~2.jpg';
import pillow from './IMG-20240813-WA0001~2.jpg';
import elliptical2 from './IMG-20240813-WA0010~2.jpg';
import contour from './IMG-20240813-WA0000~2.jpg';
import contour2 from './IMG-20240813-WA0010~3.jpg';
import pillow3 from './IMG-20240813-WA0002~3.jpg';
import lumbar from './thomsen-lumbar-pillow-500x500.webp';
import lumbar2 from './IMG-20240813-WA0011~2.jpg';
import pillow4 from './413orJLrjnL._AC_UF894,1000_QL80_.jpg';
import travel from './41weOiLqaUL._SR290,290_.jpg';
import pillow5 from './IMG-20240813-WA0008~2.jpg';
import travel2 from './51r5cqehCjL._AC_UF350,350_QL80_.jpg';

function Mattress()  {

 
 const navigate = useNavigate();

       const handleNavigate = (path) => {
            navigate(path);
              };
const location = useLocation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const banners = [
        { id: 1, image: image1, alt: "Banner 1" },
        { id: 2, image: image2, alt: "Banner 2" },
        { id: 3, image: image3, alt: "Banner 3" },
        {id: 4, image: image4, alt: "Banner4"},
    ];
  
    
      const [isHovered, setIsHovered] = useState(false);
     const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
     const [isHover, setIsHover] =  useState(false);
     const [isHover2, setIsHover2] = useState(false);
     const [isHover3, setIsHover3] = useState(false);
     const [isHover4, setIsHover4] = useState(false);
     const [ishover5, setIsHover5] = useState(false);
     

      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const handleMouseEnter2 = () => {
        setIsHovered2(true);
      };
    
      const handleMouseLeave2 = () => {
        setIsHovered2(false);
      };
      const handleMouseEnter3 = () => {
        setIsHovered3(true);
      };
    
      const handleMouseLeave3 = () => {
        setIsHovered3(false);
      };
      const handleMousehover = () => {
        setIsHover(true);
      };
    
      const handleMouseunhover = () => {
        setIsHover(false);
      };
      const handleMousehover2 = () => {
        setIsHover2(true);
      };
    
      const handleMouseunhover2 = () => {
        setIsHover2(false);
      };
      const handleMousehover3 = () => {
        setIsHover3(true);
      }
      const handleMouseunhover3 =() => {
        setIsHover3(false);
      }
      const handleMousehover4 = () => {
        setIsHover4(true);
      }
      const handleMouseunhover4 = () => {
        setIsHover4(false);
      }
      const handleMousehover5 = () => {
        setIsHover5(true);
      }
      const handleMouseunhover5 = () => {
        setIsHover5(false);
      }
  
  const handleScrollToImage = () => {
    const imageElement = document.getElementById("image");
    imageElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToImage2 = () => {
    const imageElement = document.getElementById("image2");
    imageElement.scrollIntoView({ behavior: "smooth" });
  };
  
     return(
        <div>
            <div className="header">
              <a href="#l" onClick={() => handleNavigate('/')}>
              <img className='logo' src={logo} alt="logo" width="160px" height='50px' />
              </a>
              <a href="#l" onClick={() => handleNavigate('/')}>
              <h3 style={{ color: location.pathname === '/' ? 'green' : 'white' }}>Home</h3>
              </a>
            <div>
             <h3 onClick={handleScrollToImage}>Mattress  </h3>
             </div> 
             <div>
               <h3 onClick={handleScrollToImage2}>Pillows</h3>
               </div>
               <a href="#a" onClick={() => handleNavigate('/Aboutus')}>
               <h3>About Us</h3>
               </a>
               <a href="#c" onClick={() => handleNavigate('/Contactus')}>
               <h3 className='contact-us'>Contact Us</h3>
               </a>
            </div>
            <div className='banner'>
            <Slider {...settings}>
                {banners.map(banner => (
                    <div key={banner.id}>
                        <img src={banner.image} alt={banner.id} />
                    </div>
                ))}
            </Slider>
            </div>
            <br />
            <h1 className="matt-heading" id ="image">Mattress</h1>
            <div className="content">
                <div className='image-box' >
               <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>  
                 <img className="content-img" src={comfort} alt="mattres" />
                  < h2 className='definition'>
                   Nature Comfort Mattress</h2>
                   {isHovered && (
        <div className="popup">
          <h1 className="heading2">Nature Comfort Mattress</h1>
         <img src={mattress1} alt="mattress" width="300px" />
         <p className="para">Latex mattresses are designed to 
          support and pressure point relief.

      </p>
        </div>
      )}
                  </div>
                  </div>
                  <div className='image-box'>
                    <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <img className='content-img2' src={pure} alt="pillow" />
                  <h2 className='definition'>Nature Pure Mattress</h2>
                  {isHovered2 && (
        <div className="popup2">
          <h1 className="heading2">Nature Pure Mattress</h1>
         <img src={mattress2} alt="mattress" width="300px" />
         <p className="para">A Natural Pure Mattress is a mattress made from
         100% natural.

      </p>
        </div>
      )}
                  </div>
                  </div>
                  <div className='image-box'>
                    <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                  <img className='content-img2' src={rest} alt="pillow"  />
                  <h2 className='definition'>Nature Rest Mattress</h2>
                  {isHovered3 && (
        <div className="popup3">
          <h1 className="heading2">Nature Rest Mattress</h1>
         <img src={mattress3} alt="mattress" width="300px" />
         <p className="para">Nature's Rest is producing high quality Natural Latex mattresses.

      </p>
        </div>
      )}
                  </div>
                  </div>
            </div>
            <h1 className="pill-heading" id ="image2">Pillows</h1>
            <div className="content2">
                <div className='image-box2' >
               <div onMouseEnter={handleMousehover} onMouseLeave={handleMouseunhover}> 
              
                 <img className="content-img" src={kids} alt="pillow" />
                  < h2 className='definition'>
                   Kids Pillows</h2>
                   {isHover && (
        <div className="popup-1">
          <h1 className="heading2">Kids Pillow</h1>
          <div className='image'>
         <img src={pillow} alt="pillow"  width="300px"/>
         <img src={pillow1} alt="pillow" width="300px"  />
         </div>
         <p className="para">A kids latex pillow is a pillow made from natural latex.
      </p>
        </div>
      )}
                  </div>
                  </div>
                  <div className='image-box2'>
                    <div onMouseEnter={handleMousehover2} onMouseLeave={handleMouseunhover2}>
                      <div className="image">
                  <img className='content-img2' src={elliptical} alt="pillow" width="400px" height="400px" />
                  </div>
                  <h2 className='definition'>Elliptical Pillows</h2>
                  {isHover2 && (
        <div className="popup-2">
          <h1 className="heading2">Elliptical Pillow</h1>
          <div className='image'>
            <img src={elliptical2} alt="elliptical" width="300px" />
         <img src={pillow2} alt="mattress" width="300px" />
         </div>
         <p className="para">An elliptical pillow is
         shaped like an ellipse and made from natural or synthetic latex.
      </p>
        </div>
      )}
                  </div>
                  </div>
                  <div className='image-box'>
                    <div onMouseEnter={handleMousehover3} onMouseLeave={handleMouseunhover3}>
                  <img className='content-img2' src={contour} alt="pillow"  />
                  <h2 className='definition'>Contour Pillows</h2>
                  {isHover3 && (
        <div className="popup-3">
          <h1 className="heading2">Contour Pillow</h1>
          <div className='image'>
         <img src={contour2} alt="pillow" width="300px" />
         <img src={pillow3} alt="pillow" width="300px"/>
         </div>
         <p className="para">A contour pillow is to
        support the natural alignment of your head, neck, and shoulders. .

      </p>
        </div>
      )}
                  </div>
                  </div>
            </div>
            <div className="content3" id="image2">
                <div className='image-box3' >
               <div onMouseEnter={handleMousehover4} onMouseLeave={handleMouseunhover4}> 
              
                 <img className="content-img4" src={lumbar} alt="pillow" />
                  < h2 className='definition'>
                   Lumbar Pillows</h2>
                   {isHover4 && (
        <div className="popup-4">
          <h1 className="heading2">Lumbar Pillow</h1>
          <div className='image'>
         <img src={lumbar2} alt="pillow"  width="300px"/>
         <img src={pillow4} alt="pillow" width="300px"  />
         </div>
         <p className="para">A Lumbar pillow is support to the 
         lower back helping to alleviate back pain or improve posture. 
      </p>
        </div>
      )}
                  </div>
                  </div>
                  <div className='image-box3'>
                    <div onMouseEnter={handleMousehover5} onMouseLeave={handleMouseunhover5}>
                      <div className="image">
                  <img className='content-img5' src={travel} alt="pillow" width="400px"
                   height="400px" />
                  </div>
                  <h2 className='definition'>Travel Pillows</h2>
                  {ishover5 && (
        <div className="popup-5">
          <h1 className="heading2">Travel Pillows</h1>
          <div className='image'>
            <img src={travel2} alt="travel" width="300px" />
         <img src={pillow5} alt="pillow" width="300px" />
         </div>
         <p className="para">Made with 100% Organic Natural Latex,
         great support for your head and neck.
      </p>
        </div>
      )}
                  </div>
                  </div>
                  </div>

             <div>
              <img className='ethically' src={ethinically} alt="ethinically" />
              <img className='eco' src={eco} alt='eco' />
              <img className='nature' src={nature} alt='nature' />
            </div> 
           
    
            <div className='footer' id='footer'>
                <p><span style={{color:'white', fontSize:'22px', fontWeight:'800', textDecoration:'underline'}}>Contact us:</span> No.77, Arulananda Nagar, 1st Cross Thanjavur | Phone: +91 97903 66846</p>
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



export default Mattress