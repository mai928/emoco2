import React from 'react'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { services } from '@/data';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import Image from 'next/image';



const Services = () => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };


    const [isHover, setHovered] = useState(false);
    const [Id, setID] = useState("");

    const handleHoverOn = (id) => {
        setHovered(true);
        setID(id);
    };

    const breakpoints = {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        310: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
    };


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);





    return (
        <section className="py-10 lg:py-12 px-5 lg:px-20 ">
            <div>
                <div className="py-5 text-center ">
                    <div className="flex  justify-center items-center mb-3">

                        <p className="text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl">
                            {("OUR Services")}
                        </p>
                    </div>

                    <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit">
                        {"We Are Swimming"} <br />{"Pool Builders "}
                    </h3>
                </div>

                <Swiper
                    slidesPerView={4}
                    breakpoints={breakpoints}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    modules={[Navigation, Autoplay, Pagination]}

                >
                    <div>
                        {services?.map((item, index) => (
                            <SwiperSlide key={index} className=" mt-5">

                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <Image width={224} height={500} className='w-56 rounded-md' alt={'img'} src={item.src} />
                                        <h2 className="text-xl font-bold font-Outfit  mb-2 mt-4">{item.title}</h2>
                                        <div className="text-paragraph_color text-base font-Outfit font-[500] mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} />

                                        {/* ${encodeURIComponent(item.slug) */}
                                        <Link href={`/services`} className={''} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} className='  p-5 rounded-full bg-secondary_color fill-white' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
                <div className="flex justify-center mt-10">
                    <Link href={'/services'} className={'w-36  md:w-48 lg:w-56 py-3 font-Outfit font-bold text-xl bg-primary_color hover:bg-secondary_color text-white rounded-lg text-center'} >{"Show More"}</Link>
                </div>
            </div>
        </section>
    )
}

export default Services







