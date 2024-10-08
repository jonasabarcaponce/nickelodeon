import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import image1 from '../assets/habitaciones/slider-1.png';
import image2 from '../assets/habitaciones/slider-2.png';
import image3 from '../assets/habitaciones/slider-3.png';
import image4 from '../assets/habitaciones/slider-4.png';
import image5 from '../assets/habitaciones/slider-5.png';

const imagesWithTitles = [
    { src: image1, title: 'Swim-up Oceanfront King Suite' },
    { src: image2, title: 'Swim-up Oceanfront Queen Suite' },
    { src: image3, title: 'Swim-up Oceanfront Connecting Suite' },
    { src: image4, title: 'The Pineapple Suite' },
    { src: image5, title: 'The Lair Suite' },
];

const Hotels = () => {
    return (
        <div className="bg-white text-black py-20">
            <div className="flex items-center max-w-[986px] mx-auto px-5 font-bold">
                <div>
                    <h1 className='mb-3 big-responsive-text text-orange-500'>Mas que habitaciones, experiencias.</h1>
                    <p className='medium-responsive-text'>Suites con balcón, piscina infinita, y una decoración única.</p>
                </div>
            </div>
            <Swiper

                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                pagination={{ clickable: true }}
                navigation={true} modules={[Navigation,Autoplay]}
                className='max-w-[986px] mx-auto px-5 first-slider py-10'>
                    
                {imagesWithTitles.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.src} alt={`Gallery item ${index + 1}`} className="w-full h-auto" />
                        <h1 className='small-responsive-text font-bold mt-4 mr-8'>{item.title}</h1>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="flex items-center max-w-[986px] mx-auto px-5 font-bold">
                <div>
                    <a href="tel:+529842359910" className='bg-orange-500 small-responsive-text uppercase py-2 px-10 text-white flex items-center justify-center rounded-2xl'>
                        Cotizar    
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hotels;