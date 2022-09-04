import React from 'react'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import SettingsGeneral from '../components/SettingsGeneral'
import SettingsProfile from '../components/SettingsProfile'

const Settings = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div
            className='flex flex-col m-0 p-0 bg-Light md:grid grid-cols-2 select-none'
        >
            <div> <SettingsProfile /> </div>
            <div> <SettingsGeneral /> </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Settings