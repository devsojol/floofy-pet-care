import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="px-12 grid md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div className='space-y-2'>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p>Email: <a href="mailto:support@warmpaws.com" className="hover:text-white">support@warmpaws.com</a></p>
          <p>Phone: <a href="tel:+880123456789" className="hover:text-white">+880 1234-567-89</a></p>
          <p>Address: 123 Pet Street, Dhaka, Bangladesh</p>
        </div>

         {/* Policies */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className=''>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-2 space-y-8" >
            <div className='space-y-4 flex flex-col '>
               <a href="https://facebook.com" target="_blank" className="hover:text-white text-2xl"><FaFacebook /></a>
               <a href="https://instagram.com" target="_blank" className="hover:text-white text-2xl"><FaInstagram /></a>
               <a href="https://twitter.com" target="_blank" className="hover:text-white text-2xl"><FaTwitter /></a>
               <a href="https://linkedin.com" target="_blank" className="hover:text-white text-2xl"><FaLinkedin /></a>
            </div>
   
            <ul className="space-y-4">
               <li> <a href="https://facebook.com" target="_blank" className='hover:text-white'>FaceBook</a> </li>
               <li> <a href="https://instagram.com" target="_blank" className='hover:text-white'>Instagram</a> </li>
               <li> <a href="https://twitter.com" target="_blank" className='hover:text-white'>Twitter</a> </li>
               <li> <a href="https://linkedin.com" target="_blank" className='hover:text-white'>LinkedIn</a> </li>
          </ul>
          </div>
         
        </div>

       

          {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li><a href="/grooming" className="hover:text-white">Winter Grooming</a></li>
            <li><a href="/clothing" className="hover:text-white">Pet Winter Clothing</a></li>
            <li><a href="/health" className="hover:text-white">Health & Nutrition</a></li>
            <li><a href="/shelter" className="hover:text-white">Pet Shelter & Care</a></li>
          </ul>
        </div>

      </div>
      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400 ">
        © 2025 <span className="text-white font-semibold">WarmPaws</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;