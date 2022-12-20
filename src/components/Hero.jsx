import React from 'react';

const Hero = () => {
  return (
    <main className='w-full h-screen'>

        <img className='top-0 left-0 w-full h-screen object-cover' 
            src="https://cdn1.matadornetwork.com/blogs/1/2022/02/Maldives-beach-Coco-Bodu-Hithi-Resort.jpg" 
            alt="Maldives" 
        />

        {/* Overlay div */}
        <div className='bg-black/10 absolute top-0 left-0 w-full h-screen'></div>

        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-[#f5f5f5]'>
            <div className='md:left-[10%] max-w-[1000px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>The Maldives is a tropical nation made up of 26 atolls located in the Indian Ocean. It is known for its crystal clear waters, white sandy beaches, and vibrant coral reefs, making it a popular destination for beach vacations. </p>
                <button className='bg-[#f5f5f5] text-[#333]'>Reserve Now</button>
            </div>
        </div>

    </main>
  );
};

export default Hero;
