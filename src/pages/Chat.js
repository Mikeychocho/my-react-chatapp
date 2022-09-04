import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Navbar from '../components/Navbar'
import ChatScreen from '../components/ChatScreen'
import ContactProfile from '../components/ChatProfile'
import ChatNewMessages from '../components/ChatNewMessages'

const Chat = () => {
    const [showProfile, setShowProfile] = useState(1)
    
  return (
    <div className='bg-black/5 w-screen overflow-y-hidden md:w-full select-none'>
        <div>
            <Navbar />
        </div>

        <div className='slider_ w-full flex overflow-x-auto overflow-y-hidden h-[87vh] w-full md:snap-none snap-mandatory snap-x transition ease-in-out duration-50 '>
            <div className='snap-start flex-shrink-0'>
                <ChatNewMessages changeProfile={setShowProfile} />
            </div>

            <div className='snap-start flex-shrink-0 md:flex-1'>
                <ChatScreen activeProfile={showProfile} />
            </div>
            
            <div className='snap-start flex-shrink-0 overflow-hidden md:hidden lg:block '>
                <ContactProfile activeProfile={showProfile} />
            </div>
        </div>
        
    </div>
  )
}

export default Chat