import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full mt-24 bg-gray-900 text-gray-200 py-2 px-2'>
        
        <div className='max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li>Travel</li>
                    <li>Booking</li>
                    <li>Flights</li>
                    <li>Cruises</li>
                    <li>Ground</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Tours</li>
                    <li>Refunds</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                <p className='py-4'>The Latest deals, articles and resources sent to your inbox weekly.</p>
                <form className='flex flex-col'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter your email...'/>
                    <button className='p-2 mb-4 rounded-md bg-sky-700 hover:bg-sky-800'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1100px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400'>
            <p className='py-2'>&copy; 2022 Experiences, LLC. All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaPinterest size={30}/>
            </div>
        </div>

    </footer>
  );
};

export default Footer;
