import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

import * as IosIcons from 'react-icons/io5'

const Home = () => {
  return (
    <div className='select-none'>
        <div style={{backgroundImage: 'url("../assets/chat_img_1.jpg")'}}   
            className='w-full overflow-hidden h-full pb-[18vw] relative bg-fixed bg-cover bg-no-repeat bg-center select-none md:pb-[8vw] scroll-smooth shadow-md '>
            <div className='absolute bg-gradient-to-br from-black to-Secondary/50 w-screen h-full opacity-95'></div>
            <div className='relative '>
                {/* Navbar */}
                <div className='fixed z-50 flex w-screen min-h-[60px] items-center justify-between bg-gradient-to-b from-Secondary_2 to-Secondary_2/95 shadow-black/60 shadow-md '>
                    <div className='flex items-center gap-1 mx-2 md:mx-4'>
                        <a href='#' className='animation focus:animate-bounce'>
                            <IosIcons.IoRocketSharp className='text-Primary_2 animation focus:animate-bounce min-w-[22px] min-h-[22px] md:min-w-[30px] md:min-h-[30px] '/>
                        </a>
                        <h2 className='text-Light/90 text-[25px] pb-[7px] font-font_1 md:text-[35px] pt-1 '>
                            chatapp.
                        </h2>
                    </div>

                    <div className='flex w-[40vw] justify-around '>
                        <Link to='home' smooth={true} duration={500} className='text-Light/90 cursor-pointer whitespace-nowrap text-[15px] font-font_2 md:font-semibold md:text-[20px] '>
                            Home
                        </Link>
                        <Link to='about' smooth={true} duration={500} offset={-40} className='text-Light/90 cursor-pointer whitespace-nowrap text-[15px] font-font_2 md:font-semibold md:text-[20px] '>
                            About Us
                        </Link>
                        <Link to='contact' smooth={true} duration={500} offset={-60} className='text-Light/90 cursor-pointer whitespace-nowrap text-[15px] font-font_2 md:font-semibold md:text-[20px] '>
                            Contact Us
                        </Link>
                    </div>

                    <a href='/signin'>
                        <button className='text-Light/90 px-2 mr-[4vw] h-[30px] rounded-md mr-2 font-semibold text-[14px] ring-1 ring-Light/80 hover:bg-Light/90 hover:text-Secondary_2/80 hover:ring-Secondary focus:bg-Primary_2 focus:text-Light transition ease-in-out duration-200 md:h-[40px] md:text-[18px] md:px-4 md:mr-[3vw] '>
                            Get Started
                        </button>
                    </a>

                </div>

                {/* Body */}
                <div name='home' className='pt-20 '>
                    <div className='flex flex-col md:items-center '>
                        <h2 className='flex text-start text-4xl font-bold w-[80vw] text-Light m-4 md:text-5xl md:text-center lg:text-6xl md:m-0 md:my-4 md:w-[90vw] text-center '>Chatting has never been made more easier and secure</h2>
                        <h2 className='flex text-start text-xl font-semibold w-[80vw] text-Light m-4 md:text-2xl md:text-center md:w-min md:whitespace-nowrap md:m-0 md:my-4 '>Get started now to connect with Friends</h2>
                    </div>
                    <a href='/signin' className='w-full flex md:items-center'>
                        <button className='text-Light/90 bg-Secondary px-6 my-[2vw] mx-4 h-[50px] rounded-md font-semibold text-[22px] focus:ring-2 ring-Light/90 hover:ring-2 hover:bg-Light/20 focus:bg-Secondary transition ease-in-out duration-200 md:mx-auto md:w-[50vw] md:h-[60px] md:text-[28px] md:px-4 shadow-black/80 shadow-md '>
                            Get Started
                        </button>
                    </a>
                </div>
            </div>
            <div className='flex w-[90vw] justify-evenly mx-auto mt-10 relative '>
                <div className='w-[25vw] h-[150px] flex flex-col justify-evenly items-center bg-Light/90 rounded-xl justify-center shadow-black/80 shadow-md '>
                    <h2 className='text-5xl font-bold text-Secondary_2 '>100%</h2>
                    <h2 className='text-xl font-font_3 text-Secondary '>Free</h2>
                </div>
                <div className='w-[25vw] h-[150px] flex flex-col justify-evenly items-center bg-Light/90 rounded-xl justify-center shadow-black/80 shadow-md '>
                    <h2 className='text-5xl font-bold text-Secondary_2 '>4x4</h2>
                    <h2 className='text-xl font-font_3 text-Secondary '>Responsive</h2>
                </div>
                <div className='w-[25vw] h-[150px] flex flex-col justify-evenly items-center bg-Light/90 rounded-xl justify-center shadow-black/80 shadow-md '>
                    <h2 className='text-5xl font-bold text-Secondary_2 '>24/7</h2>
                    <h2 className='text-xl font-font_3 text-Secondary '>Reliable</h2>
                </div>
            </div>
        </div>

        <div name='about' className='bg-[#cccccc] py-8 flex flex-col items-center text-center '>
            <div className='w-[90vw] flex flex-col items-center '>
                <h2 className='text-5xl text-Secondary_2 font-bold w-full mx-auto '>Trusted by messaging companies all text over the world</h2>
                <h2 className='text-[15px] text-Secondary w-[80vw] my-2 font-font_3 font-semibold md:text-[18px] '>Made by Chatapp developers in Nigeria @Chocho with top notch server and we aim to provide efficient service to everyone across the world</h2>
            </div>

            <div className='flex items-center w-[90vw] justify-around my-8 '>
                <div className='relative flex-shrink-0 z-1 w-[180px] h-[280px] md:w-[220px] md:h-[320px] '>
                    <img src='../assets/p_img_1.jpg' alt='' className='w-full h-full object-cover rounded-2xl object-right shadow-black/40 shadow-md '/>
                </div>
                <div className='absolute flex-shrink-0 z-10 w-[220px] h-[320px] md:w-[280px] md:h-[360px] '>
                    <img src='../assets/p_img_3.jpg' alt='' className='w-full h-full object-cover rounded-2xl object-center shadow-black/40 shadow-md '/>
                </div>
                <div className='relative flex-shrink-0 z-1 w-[180px] h-[280px] md:w-[220px] md:h-[320px] '>
                    <img src='../assets/p_img_2.jpg' alt='' className='w-full h-full object-cover rounded-2xl object-center shadow-black/40 shadow-md '/>
                </div>
            </div>
        </div>

        <div name='contact' className='flex flex-col items-center bg-[#cccccc] w-full py-5'>
            <div className='flex text-center justify-center items-center my-5 w-full '>
                <h2 className='text-4xl text-Secondary font-bold'>Contact Us Now</h2>
            </div>
            <form  className='flex flex-col gap-2 mx-auto'>
                <input type='text' placeholder='Fullname' required className='outline-none text-Secondary p-2 rounded-md border-[1px] border-Secondary w-[50vw] min-w-[250px] ' />
                <input type='email' placeholder='Email' required className='outline-none text-Secondary p-2 rounded-md border-[1px] border-Secondary w-[50vw] min-w-[250px] ' />
                <textarea placeholder='' className='outline-none text-Secondary p-2 rounded-md border-[1px] border-Secondary w-[50vw] min-w-[250px] '/>
                <button type='submit' className='text-xl font-semibold bg-Secondary rounded-md h-[35px] w-min px-6 text-Light hover:bg-Light hover:ring-2 ring-Secondary hover:text-Secondary active:bg-Secondary/80 active:text-Light '>
                    Send
                </button>
            </form>

            <div className='flex flex-col items-center '>
                <h2 className='text-2xl text-Secondary font-semibold mt-8 mb-16'>Live Chat on</h2>
                <div className='flex flex-col my-5 gap-[3vw] md:flex-row'>
                    <div className='min-h-[200px] w-[70vw] mb-5 relative flex flex-col justify-between bg-white rounded-xl shadow-md shadow-black/40 border-t-[1px] border-Light md:w-[28vw] '>
                        <h2 className='text-Secondary pt-[100px] px-5'>All text call texts are to be answered within 05:00 to 20:00</h2>
                        <a href='tel:2348114222755' target='_blank' className='cursor-pointer flex items-center text-lg gap-5 text-Secondary font-semibold bg-Light px-5 py-3 rounded-b-xl'>Contact Us<IosIcons.IoArrowForwardSharp className='text-xl'/> </a>
                        <div className='absolute -top-8 left-8 h-[60px] w-[60px]'><IosIcons.IoCall text className='w-full h-full text-Light bg-Secondary_2/90 rounded-xl p-2' /></div>
                    </div>
                    <div className='min-h-[200px] w-[70vw] mb-5 relative flex flex-col justify-between bg-white rounded-xl shadow-md shadow-black/40 border-t-[1px] border-Light md:w-[28vw] '>
                        <h2 className='text-Secondary pt-[100px] px-5'>All text call texts are to be answered within 05:00 to 20:00</h2>
                        <a href="mailto:chochoprogrammer@gmail.com?subject=Hi%20I'm" className='cursor-pointer flex items-center text-lg gap-5 text-Secondary font-semibold bg-Light px-5 py-3 rounded-b-xl'>Contact Us<IosIcons.IoArrowForwardSharp className='text-xl'/> </a>
                        <div className='absolute -top-8 left-8 h-[60px] w-[60px]'><IosIcons.IoCard className='w-full h-full text-Light bg-Secondary_2/90 rounded-xl p-2' /></div>
                    </div>
                    <div className='min-h-[200px] w-[70vw] mb-5 relative flex flex-col justify-between bg-white rounded-xl shadow-md shadow-black/40 border-t-[1px] border-Light md:w-[28vw] '>
                        <h2 className='text-Secondary pt-[100px] px-5'>All text call texts are to be answered within 05:00 to 20:00</h2>
                        <a href="https://wa.me/2348114222755?text=Hi,%20I'm%20....%20.%20I%20want%20to%20build%20a%20website" target='_blank' className='cursor-pointer flex items-center text-lg gap-5 text-Secondary font-semibold bg-Light px-5 py-3 rounded-b-xl'>Contact Us<IosIcons.IoArrowForwardSharp className='text-xl'/> </a>
                        <div className='absolute -top-8 left-8 h-[60px] w-[60px]'><IosIcons.IoLogoWhatsapp className='w-full h-full text-Light bg-Secondary_2/90 rounded-xl p-2' /></div>
                    </div>

                </div>
            </div>
        </div>

        <div className='flex flex-col items-center bg-Secondary_2/95 py-2'>
            <h2 className='text-Light md:text-[18px] font-font_2 '>ChatApp Copyright &copy; 2022. All rights reserved</h2>
            <div className='flex w-full justify-around'>
                <IosIcons.IoLogoFacebook className='text-Light w-8 h-8 mt-1'/>
                <IosIcons.IoLogoInstagram className='text-Light w-8 h-8 mt-1'/>
                <IosIcons.IoLogoTwitter className='text-Light w-8 h-8 mt-1'/>
                <IosIcons.IoLogoGithub className='text-Light w-8 h-8 mt-1'/>
            </div>
        </div>
    </div>
  )
}

export default Home