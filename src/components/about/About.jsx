import React from 'react'
import about from '../../../public/assets/about.jpg'
import Image from 'next/image'


const About = () => {
    return (
        <section className='px-10 lg:px-16 py-20 bg-wave_gray'>
              <div className="py-5 text-center ">
                    <div className="flex  justify-center items-center mb-3">

                        <p className="text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl">
                            {("About Us")}
                        </p>
                    </div>

                </div>
            <div className=' block lg:flex gap-20 '>
                <div>
                    <Image className='rounded-lg lg:rounded-tl-[7rem] lg:rounded-br-[7rem]' alt='img' src={about} />
                </div>
                <div className='lg:mt-20 text-center lg:text-start'>
                    <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold font-Outfit my-10'>Agriculture & Organic
                        Product Farm</h2>
                    <p className='text-gray-500 font-[500] font-Outfit '>
                        There are many variations of passages of ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even. Comparison new ham melancholy.</p>

                </div>

            </div>
        </section>
    )
}

export default About