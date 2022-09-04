import React from 'react'
import * as IosIcons from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-Secondary_2/95 py-2'>
        <h2 className='text-Light md:text-[18px] font-font_2 '>ChatApp Copyright &copy; 2022. All rights reserved</h2>
        <div className='flex w-full justify-around'>
            <IosIcons.IoLogoFacebook className='text-Light w-8 h-8 mt-1'/>
            <IosIcons.IoLogoInstagram className='text-Light w-8 h-8 mt-1'/>
            <IosIcons.IoLogoTwitter className='text-Light w-8 h-8 mt-1'/>
            <IosIcons.IoLogoGithub className='text-Light w-8 h-8 mt-1'/>
        </div>
    </div>
  )
}

export default Footer