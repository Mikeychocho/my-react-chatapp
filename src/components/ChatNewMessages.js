import React from 'react'
import { Link } from 'react-router-dom'

import Data from '../database/ChatDatabase.json'

import * as IosIcons from 'react-icons/io5'

const ChatNewMessages = ({changeProfile}) => {
  return (
    <div>
        <div className='flex w-screen lg:max-w-[22vw] md:w-full'>
                <div className='h-[525px] w-full flex flex-col pt-5 border-Secondary/30 md:pt-1 md:max-w-[300px] md:border-r-[1px]'>
                    <div className='flex flex-col shadow-sm shadow-black/30 rounded-b-xl'>
                        <Link to='' 
                            className='w-[97%] mx-[4px] hover:bg-Secondary/5 rounded-xl transition ease-linear duration-200 focus-within:ring-2 focus-within:ring-Light_Blue '
                        >
                            <div className='flex max-w-min justify-between p-3'>
                                <div className='flex items-center flex-shrink-0'>
                                    <img src='../assets/my_img_2.jpg' alt=''
                                        className='min-w-[55px] h-[55px] rounded-full object-cover' 
                                    />
                                </div>
                                <div className='flex items-center px-4 whitespace-nowrap'>
                                    <div className='flex flex-col flex-85items-start'>
                                        <h2 className='w-[50vw] text-ellipsis truncate font-semibold text-[19px] text-Secondary lg:w-[14vw] '>Chocho Programmer</h2>
                                        <h2 className='text-[15px] text-Secondary_2 font-semibold'>Web Developer</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className='flex items-center my-4'>
                            <div className='relative mx-auto'>
                                <input type='text' placeholder='Search Friends'
                                    className='w-[80vw] h-[35px] text-Secondary_2 text-[20px] transition ease-linear duration-100 rounded-xl px-4 text-center outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Light_Blue placeholder:text-[17px] md:w-full lg:w-[90%] ml-[5%] '
                                />
                                <div className='h-full w-full'>
                                    <IosIcons.IoSearch 
                                        className='absolute top-[14%] left-[8%] w-[25px] h-[25px] text-Secondary_2/50 lg:left-[7%]'
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='max-w-full flex-shrink-0'>
                        <ul className='slider_ overflow-y-scroll h-[358px] scrollbar-smooth pt-2 pb-5'>
                            {Data.map(({id, image, firstname, surname, message3, time, unread}) => {
                                return(
                                    <li key={id} 
                                        className='mx-[4px] '
                                    >
                                        <Link to='' onClick={()=>changeProfile(id)}
                                            className='flex py-3 hover:bg-Secondary/5 rounded-xl transition ease-linear duration-200 focus-within:ring-2 focus-within:ring-Light_Blue '
                                        >
                                            <div className='ml-2'>
                                                <img src={image} alt=''
                                                    className='min-w-[50px] h-[50px] object-cover rounded-full '
                                                />
                                            </div>
                                            <div className='flex flex-1 justify-between mx-2'>
                                                <div className='flex flex-col'>
                                                    <h2 className='text-Secondary text-[18px] font-semibold '>
                                                        {firstname} {surname}
                                                    </h2>
                                                    <h2 className='max-w-[70vw] text-[13px] text-Light_Blue text-ellipsis truncate md:max-w-[170px] lg:max-w-[115px] xl:max-w-[160px]'>{message3}</h2>
                                                </div>
                                                <div className='flex-end flex flex-col items-end'>
                                                    <h2 className='text-[11px] text-Secondary_2 font-semibold  lg:text-end'>{time}</h2>
                                                    <h2 className='text-[14px] text-Light bg-Secondary_2/80 px-[6px] rounded-full '>{unread}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    </li> 
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default ChatNewMessages