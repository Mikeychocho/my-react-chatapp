import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as IosIcons from 'react-icons/io5'
import * as VscIcons from 'react-icons/vsc'

const Navbar = () => {

    const [ToggleBtn, setToggleBtn] = useState(true);
    const Toggle_ = () => {
        setToggleBtn(!ToggleBtn);
    }
    const [ToggleMenu, setToggleMenu] = useState(true);
    const Toggle_M = () => {
        setToggleMenu(!ToggleMenu);
    }

  return (
    <div>
        {
            //Logo, Menubar and Search button
        }
        <div className='bg-gradient-to-b from-Secondary to-Secondary_2 min-w-screen h-[13vh] select-none border-b-[1px] border-Light_Blue/20'>
            <div className='flex h-full justify-between'>
                <div className='flex z-10 items-center w-min'>
                    <div className='flex items-center gap-1 mx-2 md:mx-4'>
                        <Link to='' className='focus:animate-bounce'>
                            <IosIcons.IoRocketSharp className='text-Primary_2 animation focus:animate-bounce min-w-[30px] min-h-[30px]'/>
                        </Link>
                        <h2 className='text-Light text-[35px] pb-[7px] font-font_1'>
                            chatapp.
                        </h2>
                    </div>
                    <div className='flex relative items-center gap-2 min-w-0'>
                        <VscIcons.VscListSelection 
                            onClick={Toggle_M}
                            style={{opacity: ToggleMenu ? '100' : '0'}}
                            className='relative text-Primary_2 min-w-[40px] min-h-[40px] transition ease-in-out duration-500 rounded-xl p-1 hover:bg-Light/10'
                        />
                        <IosIcons.IoCloseOutline 
                            onClick={Toggle_M}
                            style={{opacity: ToggleMenu ? '0' : '100'}}
                            className='absolute -left-1 text-Primary_2 min-w-[42px] min-h-[42px] transition ease-in-out duration-500 rounded-xl p-1 right-1 hover:bg-Light/10'
                        />
                        
                    </div>
                </div>

                {
                    //Menu List
                }
                <div style={{left: ToggleMenu ? '-400px' : '0', transition: '.5s ease-in-out'}} className='whitespace-nowrap z-10 h-[330px] w-[200px] top-[80px] absolute bg-gradient-to-t to-Secondary_2 from-Secondary rounded-br-xl transition ease-in-out duration-500 sm:w-[300px] '>
                    <ul className='h-[90%] w-[200px] flex flex-col items-center justify-around px-2 py-2 sm:w-[300px] '>
                        <li className='w-full h-[90%] flex items-center font-semibold text-Light_Blue text-[18px] hover:bg-white/10 transition ease-in-out duration-200 px-8 rounded-xl focus-within:ring-2 focus-within:ring-Light_Blue focus-within:text-Primary'>
                            <Link to='/' onClick={Toggle_M} 
                            className='border-b-[1px] w-full focus:border-none transition ease-in-out duration-200'>
                                Home
                            </Link>
                        </li>
                        <li className='w-full h-[90%] flex items-center font-semibold text-Light_Blue text-[18px] hover:bg-white/10 transition ease-in-out duration-200 px-8 rounded-xl focus-within:ring-2 focus-within:ring-Light_Blue focus-within:text-Primary'>
                            <Link to='/chat' onClick={Toggle_M} 
                            className='border-b-[1px] w-full focus:border-none transition ease-in-out duration-200'>
                                Chat
                            </Link>
                        </li>
                        <li className='w-full h-[90%] flex items-center font-semibold text-Light_Blue text-[18px] hover:bg-white/10 transition ease-in-out duration-200 px-8 rounded-xl focus-within:ring-2 focus-within:ring-Light_Blue focus-within:text-Primary'>
                            <Link to='/' onClick={Toggle_M} 
                            className='border-b-[1px] w-full focus:border-none transition ease-in-out duration-200'>
                                About Us
                            </Link>
                        </li>
                        <li 
                            className='w-full h-[90%] flex items-center font-semibold text-Light_Blue text-[18px] hover:bg-white/10 transition ease-in-out duration-200 px-8 rounded-xl focus-within:ring-2 focus-within:ring-Light_Blue focus-within:text-Primary sm:hidden'
                        >
                            <Link to='/settings' onClick={Toggle_M} 
                            className='border-b-[1px] w-full focus:border-none transition ease-in-out duration-200'>
                                Settings
                            </Link>
                        </li>
                        <li className='w-full h-[90%] flex items-center font-semibold text-Light_Blue text-[18px] hover:bg-white/10 transition ease-in-out duration-200 px-8 rounded-xl focus-within:ring-2 focus-within:ring-Light_Blue focus-within:text-Primary'>
                            <Link to='/' onClick={Toggle_M} 
                            className='border-b-[1px] w-full focus:border-none transition ease-in-out duration-200'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className='flex sm:w-full h-max'>
                        <Link to='' className='mx-auto text-Light/50 font-serif text-[12px] sm:text-[15px] '>ChatApp Copyright &copy; from 2009</Link>
                    </div>
                </div>

                <div className='flex items-center max-w-[300px] relative'>
                    <textarea type='text' placeholder='Search' 
                        className='rounded-xl w-[18vw] placeholder-white/0 text-[18px] resize-none whitespace-nowrap text-center sm:text-start sm:pl-[40px] pt-[10px] h-[45px] overflow-hidden outline-none ring-Light_Blue ring-offset-2 sm:h-[50px] sm:placeholder-Secondary/80 sm:w-[30vw] hover:cursor-text focus:z-10'
                    />
                    <div className='flex items-center'>
                        <IosIcons.IoSearch className='absolute z-1 bg-transparent text-Secondary_2/80 left-2 w-[30px] h-[30px]'/>
                    </div>
                </div>

                {
                    //Toggle Sign Out button, Settings button and Profile Pic
                }
                <div className='flex items-center w-full justify-end mr-4'>
                    <div className='flex min-w-0 justify-between items-center'>
                        <div className='relative mx-2 md:mx-4'>
                            <VscIcons.VscTriangleDown onClick={Toggle_} 
                                className='text-Light w-[18px] h-[18px] z-10 transition ease-in-out duration-300 hover:bg-Light_Blue/20 rounded-full p-[1px]'
                            />
                            <Link to='/signin' className='absolute -left-7 top-5'>
                                <button style={{opacity: ToggleBtn ? '0' : '100'}} 
                                    className='whitespace-nowrap text-[14px] bg-Primary/20 text-Light font-semibold hover:text-Secondary_2 hover:bg-Light/80 rounded-xl ring-Primary_2 focus:ring-1 hover:font-bold focus:font-bold focus:bg-Light focus:text-Primary px-2 focus-within:ring-2 focus:ring-Primary transition ease-in-out duration-300 shadow-md shadow-black/20'
                                >
                                    <h2 className=''>
                                        Sign Out
                                    </h2>
                                </button>
                            </Link>
                        </div>

                        <div className='flex items-center min-w-0 flex-shrink-0'>
                            <Link to='/settings'>
                                <IosIcons.IoSettings 
                                    className='hidden text-Primary_2 w-[30px] h-[30px] p-[5px] mx-2 rounded-full hover:bg-Light/10 transition ease-in-out duration-200 md:mx-4 md:w-[35px] md:h-[35px] sm:block'
                                />
                            </Link>
                            <Link to=''>
                                <img src='../assets/my_img_2.jpg' alt='' 
                                    className='object-cover rounded-full ml-3 w-[45px] h-[45px] border-2 md:border-[3px] border-Light md:h-[50px] md:w-[50px] sm:ml-0 '
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar