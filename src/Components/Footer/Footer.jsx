import React from 'react'

import logo from '../../assests/logo.jpg';
import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';
import {TiSocialYoutube} from 'react-icons/ti';
import {TiSocialPinterest} from 'react-icons/ti';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="logo" className='logo'/>
          </div>
          <p>Take one step ahead towards!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <TiSocialTwitter className='icon'/>
            <TiSocialInstagram className='icon'/>
            <TiSocialYoutube className='icon'/>
            <TiSocialPinterest className='icon'/>
          </div>
        </div>

        
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Train Status</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Check-In</a>
          </li>
          <li>
            <a href="#">Manage your booking</a>
          </li>
        </div>
       {/*  */}
       <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How to</a>
          </li>
          <li>
            <a href="#">Baggage</a>
          </li>
          <li>
            <a href="#">Route Map</a>
          </li>
          <li>
            <a href="#">Our communities</a>
          </li>
        </div>
        {/*  */}
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Chauffuer</a>
          </li>
          <li>
            <a href="#">Our partners</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Transportation</a>
          </li>
          <li>
            <a href="#">Programme Rules</a>
          </li>
        </div>
      </div>


      <div className="copyRightDiv flex">
        <p>
          
        </p>
      </div>
    </div>
  )
}
