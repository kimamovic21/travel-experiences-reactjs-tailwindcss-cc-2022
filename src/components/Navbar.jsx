import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav (!nav);
    // if (!nav) {
    //     document.body.style.overflow = 'hidden';
    // } 
    // else {
    //     document.body.style.overflow = 'scroll';
    // };
};

  return (
    <nav className='absolute w-full flex justify-between p-4 items-center'>
        <h2 className='text-[#f5f5f5] font-bold text-2xl z-10'>Experiences</h2>
        <FaBars onClick={handleNav} className='z-20 text-[#f5f5f5] cursor-pointer' size={30}/>
        <div className={
            nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 flex-col z-10 ease-in duration-500' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8'>Home</li>
                <li className='font-bold text-3xl p-8'>Destinations</li>
                <li className='font-bold text-3xl p-8'>Reservations</li>
                <li className='font-bold text-3xl p-8'>Amenities</li>
                <li className='font-bold text-3xl p-8'>Rooms</li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;




// 1. stiliziramo nav roditelj element
// 2. dodajemo useState hook
// 3. kreiramo funkciju handleNav
// 4. dodajemo onClick dogadaj