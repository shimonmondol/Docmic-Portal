import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span class="footer-title text-sky-800">Docmic.</span>
                    <p>Simply dummy text of the printing </p>
                    <p>and typesetting industry. Lorem</p> 
                    <p>Ipsum has bee</p>
     
                    <h1>Copyright @222 Medicom All Rights Reserved</h1>
                </div> 
  
                <div>
                    <span class="footer-title text-violet-800">Quick Links</span> 
                    <a class="link link-hover">About Us</a> 
                    <a class="link link-hover">Our Pricing</a> 
                    <a class="link link-hover">Our Gallery</a> 
                    <a class="link link-hover">Appointment</a>
                    <a class="link link-hover">Privacy Policy</a>
                </div> 
                <div>
                    <a class="link link-hover">Services</a> 
                    <a class="link link-hover">Our Doctors</a> 
                    <a class="link link-hover">Our Latest News </a> 
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact Us</a>
                </div> 
                <div>
                    <span class="footer-title text-violet-800">Opening Hours</span>
                    
                    <a class="link link-hover pe-3"><span class="text-violet-800">Mon-Tue </span>08:00 AM- 05:00 PM</a>
                    
                    <a class="link link-hover pe-3"><span class="text-violet-800">Wed-Thu </span>09:00 AM- 06:00 PM</a>
                    
                    <a class="link link-hover pe-3"><span  class="text-violet-800">Fri-Sat </span>10:00 AM- 07:00 PM</a>
                    
                    <a class="link link-hover pe-3"><span class="text-violet-800">Sunady </span>Emergency Only</a>
                    
                    <a class="link link-hover pe-3"><span class="text-violet-800">Personal </span>Mon- 05:00 PM</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;