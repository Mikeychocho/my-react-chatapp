import React from 'react'
import { Link } from 'react-router-dom'

import {FaUserShield, FaUsers, FaUsersCog, FaUserFriends} from 'react-icons/fa'


const SettingsProfile = () => {
  return (
    <div className='w-[90vw] h-full md:w-full md:border-r-[1px] border-Secondary_2/30 mx-auto '>
        {/* Profile section */}
        <div>
            <div className='w-full mx-auto flex flex-col items-center '>
                <div className='my-6 flex flex-col items-center '>
                    <h2 className='text-Secondary/40 text-2xl font-font_2 font-bold '>Your Public Profile</h2>
                </div>
                <img 
                    src='../assets/my_img_2.jpg' alt=''
                    className='w-[180px] h-[180px] rounded-full object-cover object-center ring-[1px] ring-Secondary_2/20 p-3 bg-Light_Blue/20 ' 
                />
                <div className='my-6 flex flex-col text-center '>
                    <h2 className='text-Secondary_2 text-2xl font-font_3  font-semibold select-none '>Mikey Chocho</h2>
                    <p className='text-Light_Blue font-font_2 select-none '>Programmer</p>
                </div>

                <div className='mb-4'>
                    <h2 className='text-Secondary font-font_4 max-w-[300px] text-center text-[18px] '>
                        <span className='text-Secondary_2 font-font_3 font-bold '>Bio: </span>
                        I'm a react developer with a year experience and this is my chatapp layout
                    </h2>
                </div>
                <div className='flex w-[180px] justify-between text-center '>
                    <div>
                        <h2 className='font-bold text-[15px] font-font_3 text-Secondary_2 '>112</h2>
                        <h2 className='text-Light_Blue text-[20px] font-font_4 '>All Friends</h2>
                    </div>
                    <div>
                        <h2 className='font-bold text-[15px] font-font_3 text-Secondary_2 '>40</h2>
                        <h2 className='text-Light_Blue text-[20px] font-font_4 '>Active Friends</h2>
                    </div>
                </div>

                <div className='my-3 flex flex-col items-center '>
                    <h2 className='text-Secondary font-semibold select-none font-font_3 '>Profile Privacy</h2>
                    <div className='flex w-[300px] my-2 justify-between '>
                        <Link to=''
                            className='w-full h-full flex flex-col items-center text-Secondary hover:bg-Light_Blue/10 pt-1 rounded-[15px] transition ease-in-out duration-300 mx-1 focus-within:ring-2 focus-within:ring-Secondary_2/60 focus:bg-Light_Blue/20 focus-within:offset-2 '
                        >
                            <FaUsers className=''/>
                            <h2 className='text-[18px] font-font_4 '>Public</h2>
                        </Link>
                        <Link to=''
                            className='w-full h-full flex flex-col items-center text-Secondary hover:bg-Light_Blue/10 pt-1 rounded-[15px] transition ease-in-out duration-300 mx-1 focus-within:ring-2 focus-within:ring-Secondary_2/60 focus:bg-Light_Blue/20 focus-within:offset-2 '
                        >
                            <FaUserFriends className=''/>
                            <h2 className='text-[18px] font-font_4 '>Friends</h2>
                        </Link>
                        <Link to=''
                            className='w-full h-full flex flex-col items-center text-Secondary hover:bg-Light_Blue/10 pt-1 rounded-[15px] transition ease-in-out duration-300 mx-1 focus-within:ring-2 focus-within:ring-Secondary_2/60 focus:bg-Light_Blue/20 focus-within:offset-2 '
                        >
                            <FaUsersCog className=''/>
                            <h2 className='text-[18px] font-font_4 '>Custom</h2>
                        </Link>
                        <Link to=''
                            className='w-full h-full flex flex-col items-center text-Secondary hover:bg-Light_Blue/10 pt-1 rounded-[15px] transition ease-in-out duration-300 mx-1 focus-within:ring-2 focus-within:ring-Secondary_2/60 focus:bg-Light_Blue/20 focus-within:offset-2 '
                        >
                            <FaUserShield className=''/>
                            <h2 className='text-[18px] font-font_4 '>Only me</h2>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

        <hr className='text-Secondary/10'/>


        <div className=''>
            <div className='flex flex-col items-center mt-5'>
                <h2 className='text-Secondary/40 text-2xl font-font_2 font-bold '>Edit Public Profile</h2>
                <div className='my-6'>
                    <div className=' '>
                        <div className='flex flex-col gap-5  '>
                            <div className='grid grid-cols-2 w-full items-center justify-center gap-6 whitespace-nowrap '>
                                <label className='w-[120px] text-end text-Secondary font-semibold select-none'>Full Name</label>
                                <input type='text' placeholder='Emmanuel Michael'
                                    className='px-2 placeholder:font-font_2 text-Secondary_2 rounded-[10px] h-8 ring-1 ring-Secondary/20 outline-none focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                                />
                            </div>
                            <div className='grid grid-cols-2 w-full items-center justify-center gap-6 whitespace-nowrap '>
                                <label className='w-[120px] text-end text-Secondary font-semibold select-none'>Phone Number</label>
                                <input type='text' placeholder='09039108667'
                                    className='px-2 placeholder:font-font_2 text-Secondary_2 rounded-[10px] h-8 ring-1 ring-Secondary/20 outline-none focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                                />
                            </div>
                            <div className='grid grid-cols-2 w-full items-center justify-center gap-6 whitespace-nowrap '>
                                <label className='w-[120px] text-end text-Secondary font-semibold select-none'>Email</label>
                                <input 
                                    type='text' placeholder='chochoprogrammer@gmail.com'
                                    className='px-2 placeholder:font-font_2 text-Secondary_2 rounded-[10px] h-8 ring-1 ring-Secondary/20 outline-none focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                                />
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-2 my-8 items-center '>   
                        <div className='flex flex-col w-full items-center my-5 gap-3 '>
                            <h2 className='text-Secondary font-semibold select-none text-[18px] '>Birthday</h2>
                            <input 
                                type='date'
                                className='outline-none text-Secondary/80 text-[18px] uppercase rounded-xl cursor-pointer px-2 py-1 hover:ring-Secondary_2/20 hover:ring-1 transition ease-in-out duration-200 focus:ring-Secondary_2/40 font-font_3 focus:ring-0 '
                            />
                        </div>

                        <div className='flex flex-col w-full items-center my-5 gap-3 '>
                            <h2 className='text-Secondary font-semibold select-none text-[18px] '>Country</h2>
                            <input 
                                placeholder='Nigeria'
                                type='country'
                                className='outline-none max-w-[180px] font-font_4 text-Secondary/80 text-[18px] uppercase rounded-xl px-2 py-1 hover:ring-Secondary_2/20 hover:ring-1 transition ease-in-out duration-200 focus:ring-Secondary_2/40 font-font_3 focus:ring-2 '
                            />
                        </div>

                        <div className='flex flex-col w-full items-center my-5 gap-3 '>
                            <h2 className='text-Secondary font-semibold select-none text-[18px] '>State</h2>
                            <input 
                                placeholder='ondo'
                                type='state'
                                className='outline-none max-w-[180px] font-font_4 text-Secondary/80 text-[18px] uppercase rounded-xl px-2 py-1 hover:ring-Secondary_2/20 hover:ring-1 transition ease-in-out duration-200 focus:ring-Secondary_2/40 font-font_3 focus:ring-2 '
                            />
                        </div>

                        <div className='flex flex-col w-full items-center my-5 gap-3 '>
                            <h2 className='text-Secondary font-semibold select-none text-[18px] '>Address</h2>
                            <input 
                                placeholder='futa north'
                                type='address'
                                className='outline-none max-w-[180px] font-font_4 text-Secondary/80 text-[18px] uppercase rounded-xl px-2 py-1 hover:ring-Secondary_2/20 hover:ring-1 transition ease-in-out duration-200 focus:ring-Secondary_2/40 font-font_3 focus:ring-2 '
                            />
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center '>
                        <h2 className='font-semibold select-none text-[18px] text-Secondary '>Bio</h2>
                        <textarea className='w-full max-w-[350px] h-[60px] truncate resize-none rounded-xl outline-none hover:ring-1 ring-Secondary/20 focus:ring-Secondary_2/40 font-font_3 focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-200 '/>
                    </div>

                    <div className='mt-5 '>
                        <button type='submit' 
                            className='w-full h-[35px] text-Light font-semibold text-[18px] bg-Secondary/80 rounded-md hover:bg-Light_Blue hover:ring-2 hover:ring-Secondary_2/80 transition ease-in-out duration-200 active:bg-Light '>Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsProfile