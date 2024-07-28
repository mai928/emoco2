'use client'
import wave from '../../../public/assets/wave.svg'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const sliderData = [
    {
        slider: '/assets/banner3.jpg',
        heading: "Agriculture Farming Product1",
        desc: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable",
    },
    {
        slider: '/assets/banner2.jpg',
        heading: "Agriculture Organic Product2",
        desc: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable",
    },
];

const Slider = () => {
    const { i18n } = useTranslation();
    const [showNavigation, setShowNavigation] = useState(false);

    useEffect(() => {
        const handleMouseOver = () => setShowNavigation(true);
        const handleMouseOut = () => setShowNavigation(false);

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <section className='relative z-0'>
            <Swiper
                className="static"
                loop={true}
                autoplay={{ delay: 5000 }}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide relative">
                        <div className='relative'>
                            <Image width={1920} height={1080} className='w-full h-auto' alt='img' src={slide.slider} />
                            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'></div>
                        </div>
                        <div className='absolute top-7 lg:top-36 start-10 lg:start-64 lg:w-[55%]'>
                            <h2 className='font-IntoLightTw0 text-lg md:text-5xl lg:text-6xl xl:text-7xl text-white'>{slide.heading}</h2>
                            <p className='lg:mt-12 mb-10 text-white font-Outfit text-[12px] lg:text-[17px] font-semibold lg:font-bold w-[80%]'>{slide.desc}</p>
                            <Link href={'/'} className='bg-primary_color cursor-pointer font-Outfit text-base lg:text-xl text-white lg:font-[600] py-2 lg:py-5 px-4 lg:px-10 rounded-md hover:bg-secondary_color'>Discover More</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {showNavigation && (
                <>
                    <div className={`swiper-button-next text-white`}></div>
                    <div className={`swiper-button-prev text-white`}></div>
                </>
            )}
            <div className='absolute bottom-0 left-0 z-10'>
                <Image width={1000}  className='responsive-image' src={wave} alt='wave' />
            </div>
        </section>
    );
};

export default Slider;
