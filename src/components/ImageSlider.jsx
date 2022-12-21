import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageSlider = () => {
  return (
    <section className='max-w-[1100px] mx-auto p-2'>
        <Carousel className='text-center'>
            <div>
                <img src="https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80" alt='Food 1'/>
                <p className="legend">Lobster</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='Food 2'/>
                <p className="legend">Sushi</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='Food 3'/>
                <p className="legend">Pasta</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='Food 4'/>
                <p className="legend">Salmon</p>
            </div>
        </Carousel>
    </section>
  );
};

export default ImageSlider;
