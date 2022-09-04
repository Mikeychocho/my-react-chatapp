import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Data from '../database/ChatDatabase.json'

import * as IosIcons from 'react-icons/io5'
import * as VscIcons from 'react-icons/vsc'

const ChatScreen = ({activeProfile}) => {
    const [ToggleBtn, setToggleBtn] = useState(false);
    const Toggle_ChatEllipsis = () => {
        setToggleBtn(!ToggleBtn);
    }
    const [ToggleBtn1, setToggleBtn1] = useState(false);
    const Toggle_CallBtn = () => {
        setToggleBtn1(!ToggleBtn1);
    }

    //Append input section
    const SendMessage = () => {
        const li_ = document.createElement('li')
        li_.setAttribute('class', 'max-w-[45vw] whitespace-normal flex p-2 odd:mr-2 mx-auto text-Light odd:mr-0 even:ml-0 odd:bg-Secondary_2/80 even:bg-Primary_2 rounded-xl odd:rounded-br-none even:rounded-bl-none md:max-w-[28vw] lg:max-w-[23vw]');

        const message_area = document.querySelector('#message_area_')
        const textarea = document.querySelector('#textarea_')
        const text = textarea.value

        li_.innerHTML = text
        message_area.appendChild(li_)

    }

  return (
    <div className='border-black/20 border-r-[1px] h-[525px] overflow-hidden '>
        <div className='flex flex-col w-screen md:w-full'>
                    <div className='flex flex-col p-2'>
                        <div 
                            className='flex justify-between items-center pb-[8px] border-Secondary/30 border-b-[1px] '
                        >
                                <Link to='' 
                                    className='flex items-center w-[40vw] gap-[3%]'
                                >
                                    <img src={Data[activeProfile].image} alt=''
                                        className='min-w-[40px] h-[40px] object-cover rounded-full '
                                    />
                                    <h2 className='flex items-baseline text-[20px] text-Secondary font-font_4 '>
                                        {Data[activeProfile].firstname} {Data[activeProfile].surname}
                                        <div className='w-[10px] h-[10px] mx-1 bg-green-500 rounded-full'></div>
                                    </h2>
                                    
                                </Link>
                               
                            <div className='flex items-center relative'>
                                <Link to=''>
                                    <IosIcons.IoSearch 
                                        className='w-[35px] h-[35px] text-Primary_2 hover:bg-black/5 rounded-full p-1 transition ease-linear duration-200 '
                                    />
                                </Link>

                                <Link to='' onClick={Toggle_CallBtn}>
                                    <IosIcons.IoCallSharp 
                                        className='w-[30px] h-[30px] text-Primary_2 hover:bg-black/5 rounded-full p-1 transition ease-linear duration-200 '
                                    />
                                </Link>

                                <Link to='' onClick={Toggle_ChatEllipsis}>
                                    <IosIcons.IoEllipsisVerticalSharp 
                                        className='w-[30px] h-[30px] text-Primary_2 hover:bg-black/5 rounded-full p-[4px] transition ease-linear duration-200 '
                                    />
                                </Link>

                                <div style={{display: ToggleBtn ? 'block' : 'none', transition: 'ease-in-out .2s', right: '2px', userSelect: ToggleBtn ? '' : 'none'}}
                                    className='absolute w-[120px] top-[45px] whitespace-nowrap bg-gradient-to-tr from-Secondary to-Secondary_2 rounded-bl-lg py-2'>
                                    <ul className='px-2'>
                                        <li onClick={Toggle_ChatEllipsis}>
                                            <Link to='' className='flex items-center gap-[5px] text-Light_Blue px-1 py-2 hover:bg-Light/10 rounded-md focus:border-2 focus:border-offset-2 focus:border-Light_Blue transition ease-in-out duration-200'>
                                                <IosIcons.IoNotificationsOffSharp />
                                                <h2>Mute</h2>
                                            </Link>
                                        </li>
                                        <li onClick={Toggle_ChatEllipsis}>
                                            <Link to='' className='flex items-center gap-[5px] text-Light_Blue px-1 py-2 hover:bg-Light/10 rounded-md focus:border-2 focus:border-offset-2 focus:border-Light_Blue transition ease-in-out duration-200'>
                                                <IosIcons.IoTrashBin />
                                                <h2>Clear Chat</h2>
                                            </Link>
                                        </li>
                                        <li onClick={Toggle_ChatEllipsis}>
                                            <Link to='' className='flex items-center gap-[5px] text-Light_Blue px-1 py-2 hover:bg-Light/10 rounded-md focus:border-2 focus:border-offset-2 focus:border-Light_Blue transition ease-in-out duration-200'>
                                                <IosIcons.IoCloudOfflineSharp />
                                                <h2>Block</h2>
                                            </Link>
                                        </li>
                                        <li onClick={Toggle_ChatEllipsis}>
                                            <Link to='' className='flex items-center gap-[5px] text-Light_Blue px-1 py-2 hover:bg-Light/10 rounded-md focus:border-2 focus:border-offset-2 focus:border-Light_Blue transition ease-in-out duration-200'>
                                                <VscIcons.VscWarning />
                                                <h2>Report</h2>
                                            </Link>
                                        </li>
                                        <li onClick={Toggle_ChatEllipsis}>
                                            <Link to='' className='flex items-center gap-[5px] text-Light_Blue px-1 py-2 hover:bg-Light/10 rounded-md focus:border-2 focus:border-offset-2 focus:border-Light_Blue transition ease-in-out duration-200'>
                                                <IosIcons.IoSkull />
                                                <h2>Unfriend</h2>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div style={{display: ToggleBtn1 ? 'block' : 'none', transition: 'ease-in-out .2s', right: '130px'}} 
                                    className='absolute flex justify-between whitespace-nowrap top-[45px] h-[40px] w-min'>
                                    <Link to='' 
                                        onClick={Toggle_CallBtn}
                                        className='flex mt-2 items-center gap-[4px] w-[100px] text-Secondary_2 bg-Light_Blue rounded-xl px-1 py-2 hover:bg-Secondary hover:text-Light rounded-md border-2 border-offset-2 border-Secondary transition ease-in-out duration-200 '
                                    >
                                        <IosIcons.IoVideocam />
                                        <h2 className='text-[13px]'>Video Call</h2>
                                    </Link>
                                    <Link to='' 
                                        onClick={Toggle_CallBtn} 
                                        className='flex mt-2 items-center gap-[4px] w-[100px] text-Secondary_2 bg-Light_Blue rounded-xl px-1 py-2 hover:bg-Secondary hover:text-Light rounded-md border-2 border-offset-2 border-Secondary transition ease-in-out duration-200'
                                    >
                                        <IosIcons.IoCallSharp />
                                        <h2 className='text-[13px]'>Voice Call</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <ul id='message_area_' className='slider_ flex flex-col mt-4 pb-2 h-[395px] w-full scrollbar-smooth overflow-y-auto'>
                                <li 
                                    className='max-w-[45vw] whitespace-normal flex p-2 odd:mr-2 mx-auto text-Light odd:mr-0 even:ml-0 odd:bg-Secondary_2/80 even:bg-Primary_2 rounded-xl odd:rounded-br-none even:rounded-bl-none md:max-w-[28vw] lg:max-w-[23vw] '
                                >
                                    {Data[activeProfile].message1}
                                </li>
                                <li 
                                    className='max-w-[45vw] whitespace-normal flex p-2 odd:mr-2 mx-auto text-Light odd:mr-0 even:ml-0 odd:bg-Secondary_2/80 even:bg-Primary_2 rounded-xl odd:rounded-br-none even:rounded-bl-none md:max-w-[28vw] lg:max-w-[23vw] '
                                >
                                    {Data[activeProfile].message2}
                                </li>
                                <li 
                                    className='max-w-[45vw] whitespace-normal flex p-2 odd:mr-2 mx-auto text-Light odd:mr-0 even:ml-0 odd:bg-Secondary_2/80 even:bg-Primary_2 rounded-xl odd:rounded-br-none even:rounded-bl-none md:max-w-[28vw] lg:max-w-[23vw] '
                                >
                                    {Data[activeProfile].message3}
                                </li>
                            </ul>
                        </div>

                        {/* Input section */}

                        <div className='flex items- align-top w-full h-[40px] border-t-[2px] pt-5 px-2 border-Secondary_2/30 mx-1'>
                            <div className='flex items-center justify-evenly w-[10vw]'>
                                <button className='w-full '>
                                    <IosIcons.IoAttach className='w-[35px] h-[35px] p-[2px] rounded-full text-Secondary_2 hover:bg-Light_Blue/20 transition ease-in-out duration-200 '/>
                                </button>
                                <button className='w-full'>
                                    <IosIcons.IoImage className='w-[35px] h-[35px] p-[2px] rounded-full text-Secondary_2 hover:bg-Light_Blue/20 transition ease-in-out duration-200 ' />
                                </button>
                            </div>

                            <div className='w-full mx-2 items-center flex justify-center'>
                                <textarea id='textarea_' type='text' placeholder='Message' 
                                    className='slider_ w-full h-[40px] p-[5px] resize-none rounded-xl outline-Secondary shadow-sm shadow-Secondary_2/80 '
                                />
                            </div>

                            <div className='flex items-center justify-evenly w-[10vw]'>
                                <button onClick={SendMessage} className='w-full'>
                                    <IosIcons.IoNavigateSharp className='w-[35px] h-[35px] p-[2px] rounded-full text-Secondary_2 hover:bg-Light_Blue/20 transition ease-in-out duration-200 '/>
                                </button>
                                <button className='w-full'>
                                    <IosIcons.IoMicSharp className='w-[35px] h-[35px] p-[2px] rounded-full text-Secondary_2 hover:bg-Light_Blue/20 transition ease-in-out duration-200 '/>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
    </div>
  )
}

export default ChatScreen