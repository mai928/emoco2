import React from 'react'
import SeperatedForm from '../seperatedForm/SeperatedForm'

const Contact = () => {
    return (
        <section className=' p-3 lg:py-20 lg:px-20 '>

           {/* <h1 className='text-center text-color_heading text-7xl mb-20 font-Outfit  '>Keep In Touch</h1> */}

            <div className="gap-10  block lg:flex lg:flex-row ">
                <div className="lg:w-1/2">
                    <div className='border-[1px] border-gray-200 rounded-md py-10  ps-5 lg:ps-20 bg-[#154c79]'>
                        <h3 className=' text-center lg:text-start text-lg lg:text-5xl font-semibold font-Outfit leading-relaxed text-white'>Contact Information</h3>


                        <div className="flex gap-4 items-center  mt-10">
                            <div className=" p-2 lg:p-3 bg-white-400 rounded-full">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    className="fill-white"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />

                                </svg>        </div>
                            {/* {data?.email} */}
                            <p className="text-white lg:text-base font-Outfit">mmm@gmail.com</p>

                        </div>


                        <div className="flex items-center gap-4 mt-6">
                            <div className=" p-2 lg:p-3 bg-white-400 rounded-full ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    className="fill-white"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </div>
                            {/*               {data?.address}
 */}
                            <p className="text-white  lg:text-base font-Outfit">
                                address
                            </p>
                        </div>
                        <div className="flex gap-4 items-center  mt-6">
                            <div className=" p-2 lg:p-3 bg-white-400 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    className="fill-white"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </div>
                            {/* {data?.phone1} */}
                            <p className="text-white lg:text-base font-Outfit">
                                01187655433
                            </p>
                        </div>

                        <div className="flex gap-4 items-center  mt-6">
                            <div className=" p-2 lg:p-2 bg-white-400 rounded-full">


                                <svg xmlns="http://www.w3.org/2000/svg" width={30}
                                    height={30}
                                    className="fill-white" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>

                            </div>
                            {/* {data?.phone1} */}

                            <p className="text-white  lg:text-base font-Outfit">
                                01187655433
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-10 lg:mt-0 lg:w-1/2  text-center">
                    <h3 className="mb-2 lg:text-start text-2xl font-IntoLightTw0 text-secondary_color">{("Have a Question")}</h3>
                    <p className=" lg:text-start text-2xl lg:text-5xl font-Outfit font-semibold my-5 text-color_heading">
                        {("Send Us a message")}
                    </p>
                    <SeperatedForm />
                </div>
            </div>

            {/* 
    <div className='mt-10'>
      <div><iframe loading="lazy"
        className="h-[450px] w-full border-0 rounded-md " src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Anwar%20Al%20Mofti,%20Al%20Manteqah%20Al%20Oula,%20Nasr%20City,%20Cairo%20Governorate%204450233+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div>

      <div>
        <Link href="https://www.gps.ie/"></Link>
      </div>
    </div> */}
        </section>
        
    )
}

export default Contact