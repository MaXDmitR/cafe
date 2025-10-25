import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='footerSection'>
        <h2 className='footerTitle'>Location</h2>
        <p className='footerAddress'>AROMAPLACE, 123 Coffee St, Coffee City, CO 12345</p>
        </div>
        <div className='footerSection'>
            <h2 className='footerTitle'>hours</h2>
            <p className='footerHours'>Mon-Fri: 8am - 8pm<br/>Sat-Sun: 9am - 6pm</p>
        </div>
        <div className='footerSection'>
            <h2 className='footerTitle'>Find us on</h2>
            <div className='footerSocials'>
                <a href="https://www.facebook.com" className='footerSocialLink'><CiFacebook /></a>
                <a href="https://www.instagram.com" className='footerSocialLink'><FaInstagram /></a>
                <a href="https://www.twitter.com" className='footerSocialLink'><FaXTwitter /></a>
            </div>
        </div>
      </div>
      <div className='footerBottom'>
        <p className='footerCopy'>&copy; 2024 AROMAPLACE. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
