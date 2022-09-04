import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as IosIcons from 'react-icons/io5'
const Sign = () => {
    const [toggleSign, setToggleSign] = useState(true);
  return (
    <div 
        style={{backgroundImage: 'url("../assets/Mountain_4.jpg")'}}
        className='w-screen h-screen flex items-center bg-no-repeat bg-cover relative select-none '
    >
        <div className='w-screen h-full bg-Secondary_2 absolute opacity-20 '></div>

        <div className='flex flex-col relative w-[380px] h-[500px] overflow-hidden mx-auto h-full items-center py-5 bg-Light/60 rounded-3xl '>
            <div className='flex items-center gap-1 relative'>
                <Link to='' className='focus:animate-bounce'>
                    <IosIcons.IoRocketSharp className='text-Primary_2 animation focus:animate-bounce min-w-[30px] min-h-[30px]'/>
                </Link>
                <h2 className='text-white font-font_1 text-[35px] pb-[7px]'>
                    chatapp.
                </h2>
            </div>

            <div className='flex relative w-[230px] h-[40px] items-center justify-around bg-gradient-to-r from-Secondary_2/50 to-Light_Blue/50 rounded-2xl flex-shrink-0 '>
                <div style={{left: toggleSign ? '0' : '50%', transition: '.3s ease-in-out'}} className='absolute bg-Primary_2 w-[115px] h-full z-1 rounded-2xl left-0 '>
                </div>
                <div onClick={() => setToggleSign(true)} className='z-10 text-[18px] font-semibold text-Light '>
                    Sign In
                </div>

                <div onClick={() => setToggleSign(false)} className='z-10 text-[18px] font-semibold text-Light '>
                    Sign Up
                </div>
            </div>      
            
            <div
                style={{right: toggleSign ? '20px' : '420px', transition: '.5s ease-in-out'}}
                className='absolute top-[120px] w-[340px] flex flex-col w- gap-3 mt-2 '
            >
                <div className='flex relative w-full justify-between items-center '>
                    <input type='email' required placeholder='Email or Username' className='Input ' />
                    <div className='absolute left-3 text-Secondary_2/80 pb-1 '>
                        <IosIcons.IoPerson />
                    </div>
                </div>

                <div className='flex relative w-full justify-between items-center '>
                    <input type='password' placeholder='Password' required className='Input '/>
                    <div className='absolute left-3 text-Secondary_2/80 pb-1 '>
                        <IosIcons.IoLockClosed />
                    </div>
                </div>

                <div className='flex pl-2 w-full gap-3 mt-4'>
                    <input type='checkbox' required/>
                    <span className='text-Secondary_2/80 text-[15px] font-font_3 font-semibold '>Remember me</span>
                </div>
                
                <div className='flex flex-col w-full items-center justify-center'>
                    <Link to='' className='text-[13px] text-Secondary_2 font-semibold underline active:text-Light_Blue '>forget password?</Link>
                </div>

                <div className='mr-2 w-full'>
                    <Link to='/chat'>
                        <button type='submit'
                            className='w-full h-[40px] text-Secondary rounded-xl text-[20px] font-semibold bg-Light/60 hover:text-Secondary/90 transition ease-in-out duration-200 focus:ring-2 ring-Secondary focus:text-Secondary/80 active:text-Light_Blue '
                        >
                            Login
                        </button>
                    </Link>
                </div>

                <div className='flex items-center gap-5 mt-2 '>
                    <h2 className='text-[16px] font-semibold text-Secondary_2 '>Or login with</h2>
                    <div className='flex gap-4'>
                        <IosIcons.IoLogoGoogle  className='w-6 h-6 text-Primary'/>
                        <IosIcons.IoLogoFacebook  className='w-6 h-6 text-Secondary'/>
                    </div>
                </div>

                <div className='flex flex-col w-full items-center justify-center'>
                    <Link to='' onClick={() => setToggleSign(false)} className='text-[13px] text-Secondary_2 font-semibold underline active:text-Light_Blue '>Don't have an account? Sign Up instead</Link>
                </div>

            </div>

            <div 
                style={{left: toggleSign ? '420px' : '20px', transition: '.5s ease-in-out'}}
                className='absolute top-[120px] flex flex-col w-[340px] gap-3 mt-2 '
            >
                <div className='flex relative w-full justify-between items-center '>
                    <input 
                        type='email' required placeholder='Fullname'
                        className='Input '
                    />

                    <div className='absolute left-3 text-Secondary_2/80 pb-1 '>
                        <IosIcons.IoPerson />
                    </div>
                </div>

                <div className='flex relative w-full justify-between items-center '>
                    <input type='email' required placeholder='Phone number' className='Input '
                    />
                    <div className='absolute left-3 text-Secondary_2/80 pb-1 '>
                        <IosIcons.IoCall />
                    </div>
                </div>

                <div className='flex relative w-full justify-between items-center '>
                    <input type='email' required placeholder='Email' className='Input '
                    />
                    <div className='absolute left-3 text-Secondary_2/80 pb-1 '>
                        <IosIcons.IoMail />
                    </div>
                </div>

                <div className='flex relative w-full justify-between items-center '>
                    <input type='password' placeholder='Password' required className='Input '
                    />
                    <div className='absolute left-3 text-Secondary_2/80 pb-1 '>
                        <IosIcons.IoLockClosed />
                    </div>
                </div>

                <div className='flex pl-2 w-full gap-3 mt-4'>
                    <input type='checkbox' required/>
                    <span className='text-Secondary_2/80 text-[15px] font-font_3 font-semibold '>I agree with the terms and conditions</span>
                </div>
                

                <div className='mr-2 w-full'>
                    <Link to='/chat'>
                        <button type='submit'
                            className='w-full h-[40px] text-Secondary rounded-xl text-[20px] font-semibold bg-Light/60 hover:text-Secondary/90 transition ease-in-out duration-200 focus:ring-2 ring-Secondary focus:text-Secondary/80 active:text-Light_Blue '
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>

                <div className='flex items-center gap-5 '>
                    <h2 className='text-[16px] font-semibold text-Secondary_2 '>Or Signup with</h2>
                    <div className='flex gap-4'>
                        <IosIcons.IoLogoGoogle  className='w-6 h-6 text-Primary'/>
                        <IosIcons.IoLogoFacebook  className='w-6 h-6 text-Secondary'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Sign