import React from 'react'
import { Link } from 'react-router-dom'

const UserBoxOrWhatever = ({id, image, firstname, surname, message3, changeProfile}) => {
  return (
    <div>
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
                        <h2 className='text-[12px] text-Secondary_2 font-semibold  lg:text-end'>22:22 PM</h2>
                        <h2 className='text-[14px] text-Light bg-Secondary_2/80 px-[6px] rounded-full '>6</h2>
                    </div>
                </div>
            </Link>
        </li> 
    </div>
  )
}

export default UserBoxOrWhatever