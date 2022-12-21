import React from 'react';

const Rooms = () => {
  return (
    <section className='max-w-[1100px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 mb-[30%] md:mb-[40%] lg:mb-[20%] px-4 grid lg:grid-cols-3 gap-4'>

        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Welcome to our luxurious hotel! Our rooms are the perfect blend of comfort and style, providing you with everything you need to make your stay enjoyable and memorable.</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                 alt="Room 1" 
                 className='object-cover w-full h-full'
            />
            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                 alt="Room 2" 
                 className='object-cover w-full h-full row-span-2'
            />
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                 alt="Room 3" 
                 className='object-cover w-full h-full'
            />
        </div>

    </section>
  );
};

export default Rooms;
