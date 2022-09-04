// Contact Profile component: where the profile of a contact in the chat displays
import React, { useState } from 'react'

import Data from '../database/ChatDatabase.json'

import { BsArrowDownLeftSquareFill, BsTelephone } from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import { TiMessages } from 'react-icons/ti'
import * as IosIcons from 'react-icons/io5'

const ContactProfile = ({activeProfile}) => {
    // State for Media and History
    const [toggleBtn, setToggleBtn] = useState(true);

    // State for Ascend and Descend button
    //State for Showing AD button and MD section
    const [toggleBtn_, setToggleBtn_] = useState(true);

  return (
    <div className='w-screen h-min lg:w-[27vw] select-none'>
        <div className='relative flex flex-col w-full items-start px-1 '>
            {/* Profile display section */}
            <div style={{opacity: toggleBtn_ ? '100' : '0', transition: '.3s ease-in-out'}}>
                    <div>
                    <div className='relative w-full h-full flex-shrink-0'>
                        <img 
                            className='w-screen h-[160px] object-cover object-center rounded-b-xl '
                            src={Data[activeProfile].image} alt='' 
                        />
                        <img 
                            className='w-[170px] h-[170px] rounded-full absolute top-[60px] right-[20px] shadow-black/30 shadow-md object-cover ' 
                            src={Data[activeProfile].image} alt='' 
                        />
                        <div className='absolute opacity-75 w-full h-full top-2 right-[0%] xl:left-[90%]'>
                            <button className='animation animate-pulse'>
                                <IosIcons.IoShareSocial 
                                    className='w-[30px] h-[30px] text-Light p-1 hover:bg-Light/10 rounded-full transition ease-in-out duration-200'
                                />
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col max-w-full absolute top-[250px] '>
                        <h2 className='text-4xl my-2 ml-2 font-semibold text-Secondary_2 font-font_4'>{Data[activeProfile].surname} {Data[activeProfile].firstname} </h2>
                        <div className=' bg-Light mr-1 p-1  rounded-[15px] shadow-black/40 shadow-sm flex items-center'>
                            <h2 className='font-bold text-[18px] text-Secondary'>Bio: </h2>
                            <h2 className='font-font_2 text-[14px] ml-3 '>I'm a react developer with 2years of experience and this is my chatapp layout</h2>
                        </div>
                    </div>
                    </div>
            </div>
            


            {/* Media and History Component */}

            <div style={{top: toggleBtn_ ? '470px' : '17px', transition: '.3s ease-in-out'}} className='absolute bottom-0'>
                <div 
                    style={{ background: toggleBtn_ ? 'none' : 'initial',
                        boxShadow: toggleBtn_ ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.1)' 
                    }}
                    className='relative h-[80vh] w-[97vw] md:w-[26vw] bg-Light_Blue/10 rounded-[50px] m-1 '
                >
                    <div className='flex flex-col items-center'>
                        <button id='MH_Btn' onClick={() => setToggleBtn_(!toggleBtn_)} className='w-min flex items-center justify-center bg-Light_Blue h-[25px] my-5 p-4 rounded-full shadow-black/30 shadow-md focus-within:ring-Light focus-within:ring-2 transition ease-in-out duration-200'>
                        { 
                                toggleBtn_ ?
                                <HiIcons.HiSortAscending className='w-[25px] h-[25px] text-Light hover:animation hover:animate-pin' />
                            : 
                                <HiIcons.HiSortDescending className='w-[25px] h-[25px] text-Light hover:animation hover:animate-pin' />
                            
                            }
                        </button>

                        <div className='relative flex w-[50%] md:w-[20vw] justify-around bg-Light_Blue text-center rounded-[30px] shadow-black/30 shadow-md '>
                            <div style={{left: toggleBtn ? '50%' : '0', transition: '.2s ease-in-out'}} 
                                className='z-1 w-[50%] h-full absolute bg-Primary_2 top-0 rounded-[30px] '></div>
                            <div onClick={() => setToggleBtn(!toggleBtn)}       
                                className='z-10 relative w-[100px] bg-none px-2 rounded-xl text-[17px] text-Light font-font_3 '>
                                Media
                            </div>
                            <div onClick={() => setToggleBtn(!toggleBtn)}   
                                className='z-10 relative w-[100px] bg-none px-2 rounded-xl text-[17px] text-Light font-font_3 '>
                                History
                            </div>
                        </div>
                    </div>

                    <div className='my-2 w-screen overflow-x-hidden'>

                        {/* Media Component */}

                        <div 
                            style={{right: toggleBtn ? '700px' : '0', transition: '.3s ease-in-out'}} 
                            className='slider_ overflow-y-auto w-full mx-auto absolute h-[360px] '
                        >
                            <div 
                                className='w-min mx-auto whitespace-nowrap underline underline-offset-[2px] text-Secondary font-font_3'
                            >
                                All Attachments
                            </div>

                            <ul 
                                className='grid grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 mx-4'
                            >
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                                <li className='bg-Light_Blue min-w-[50px] h-[50px] m-[2px] '></li>
                            </ul>
                        </div>
                        
                        {/* History Component */}

                        <div style={{left: toggleBtn ? '0' : '500px', transition: '.3s ease-in-out'}} 
                            className='absolute h-max w-full flex items-center '
                        >
                            <ul className='flex flex-col justify-around mx-auto '>
                                <li className='overflow-x-auto w-full md:w-[20vw] flex '>
                                    <div className='w-full flex flex-col items-center text-center '>
                                        <div className='flex w-min h-min items-center'>
                                            <h2 className='w-full text-Secondary_2 font-font_2 font-semibold underline p-1 underline-offset-[3px] '>Calls</h2>
                                            <span className='text-Secondary_2'><BsTelephone /></span>
                                        </div>
                                        {/* Recieved and Missed calls list */}

                                        <div className='slider_ overflow-auto flex w-full justify-around gap-4 md:gap-0 pr-1'>
                                            <div className='flex flex-col h-[220px]'>
                                                <div className='flex items-center gap-1 '>
                                                    <h2 className='font-font_4 text-[20px] text-Secondary '>Recieved</h2>
                                                    <span className='text-Light_Blue h-full flex items-center pb-[5px] '><BsArrowDownLeftSquareFill /></span>
                                                </div>   
                                                
                                                <ul className='flex flex-col gap-1 h-[300px] '>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>1hr </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>14min
                                                        </div>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>9hr </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>0s
                                                        </div>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>19hr </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>40s
                                                        </div>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>1day </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>10min
                                                        </div>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>1day </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>1min
                                                        </div>
                                                    </li><li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>2days </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>4s
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div className='flex flex-col h-[220px]'>
                                                <div className='flex items-center gap-1 '>
                                                    <h2 className='font-font_4 text-[20px] text-Secondary '>Missed</h2>
                                                    <span className='text-Primary_1 h-full flex items-center pb-[5px] '><BsArrowDownLeftSquareFill /></span>
                                                </div>
                                                <ul className='flex flex-col gap-1 h-[300px] '>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>3hr </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>1min
                                                        </div>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>11hr </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>0s
                                                        </div>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Light_Blue '>
                                                        <h2>
                                                            <span className='font-font_4 text-[15px] '>1days </span> ago
                                                        </h2>
                                                        <div className='font-font_4'>
                                                            <span className='font-font_3'>Duration: </span>14s
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </li>

                                <li className=''>
                                    <div className='w-full flex flex-col items-center text-center '>
                                        <div className='flex w-min h-full items-center'>
                                            <h2 className='w-full text-Secondary_2 font-font_2 font-semibold underline p-1 underline-offset-[3px] '>Chats</h2>
                                            <span className='text-Secondary_2 '><TiMessages /></span>
                                        </div>

                                        {/* Recieved and Missed calls list */}

                                        <div className='slider_ overflow-auto flex w-full justify-around '>
                                            <div className='flex flex-col h-[220px]'>
                                                <div className='flex items-center gap-1 '>
                                                    <h2 className='font-font_4 text-[20px] text-Secondary '>Jun - Aug</h2>

                                                </div>   
                                                
                                                <ul className='flex flex-col gap-1 h-[300px] '>
                                                    <li className='font-font_3 text-[13px] text-Secondary '>
                                                        <span className='mr-1'>Recieved:</span>
                                                        <span className='font-semibold'>109</span>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Secondary '>
                                                        <span className='mr-1'>Sent:</span>
                                                        <span className='font-semibold'>198</span>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div className='flex flex-col h-[220px]'>
                                                <div className='flex items-center gap-1 '>
                                                    <h2 className='font-font_4 text-[20px] text-Secondary '>April - Jun</h2>
                                                </div>
                                                <ul className='flex flex-col gap-1 h-[300px] '>
                                                <li className='font-font_3 text-[13px] text-Secondary '>
                                                        <span className='mr-1'>Recieved:</span>
                                                        <span className='font-semibold'>19</span>
                                                    </li>
                                                    <li className='font-font_3 text-[13px] text-Secondary '>
                                                        <span className='mr-1'>Sent:</span>
                                                        <span className='font-semibold'>22</span>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) }

export default ContactProfile