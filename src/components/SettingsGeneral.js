import React, { useState } from 'react'

const SettingsGeneral = () => {

  //function for delete button
  const [toggleDelete, setToggleDelete] = useState(false);

  return (
    <div className='w-full bg-Light h-full mb-5 p-0 select-none mx-auto '>
        <div className='flex flex-col items-center py-6 '>
            <h2 className='text-Secondary/40 text-2xl font-font_2 font-bold '>Appearance</h2>
            <div className='flex flex-col w-full gap-3 items-center my-5'>
              <div className='flex w-full max-w-[300px] justify-between items-center '>
                <h2 className='text-Secondary font-semibold '>Dark Mode</h2>
                <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                  <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
                </div>
              </div>
              <div className='flex w-full max-w-[300px] justify-between items-center '>
                <h2 className='text-Secondary font-semibold '>Active Status</h2>
                <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                  <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
                </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col items-center pb-6 text-center '>
          <h2 className='text-Secondary/40 text-2xl font-font_2 font-bold '>Password and Security</h2>
          <div>
            <div className='flex flex-col w-full items-center'>
              <div className='flex flex-col my-1'>
                <h2 className='text-Secondary font-semibold '>Reset Password</h2>

                <div className='h-full flex flex-col gap-3 my-4'>
                  <input required placeholder='Current Password' type='password'
                    className='outline-none min-w-[250px] px-2 rounded-xl h-[30px] ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                  />

                  <input required placeholder='New Password' type='password'
                    className='outline-none min-w-[250px] px-2 rounded-xl h-[30px] ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                  />
                  
                  <input required placeholder='Confirm Password' type='password'
                    className='outline-none min-w-[250px] px-2 rounded-xl h-[30px] ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                  />
                </div>

                <div className='flex flex-col my-6 gap-4'>
                  <h2 className='text-Secondary font-semibold '>Remove Account from other devices</h2>
                  <div className='flex flex-col gap-2'>
                    <input type='password' placeholder='Password' required
                      className='outline-none min-w-[200px] px-2 rounded-xl h-[30px] ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                    />
                    <button type='submit' 
                      className='w-full h-[35px] text-Light font-semibold text-[18px] bg-Light_Blue rounded-xl hover:text-Secondary/50 hover:bg-Light_Blue/60 hover:ring-2 ring-Secondary/50 transition ease-in-out duration-200 active:bg-Light '>Sign Out
                    </button>
                  </div>
                </div>

                <div className='flex flex-col my-6 gap-4'>
                  <h2 className='text-Secondary font-semibold '>Temporary Block</h2>
                  <p className='text-[15px] font-font_2 text-Light_Blue '>You won't be able to login until</p>

                  <input 
                    type='date'
                    className='outline-none text-Secondary/80 text-[18px] uppercase rounded-xl cursor-pointer px-2 py-1 hover:ring-Secondary_2/20 hover:ring-1 transition ease-in-out duration-200 focus:ring-Secondary_2/40 font-font_3 focus:ring-0 '
                  />

                  <div className='flex flex-col gap-2'>
                    <input type='password' placeholder='Password' required
                      className='outline-none min-w-[260px] px-2 rounded-xl h-[30px] ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                    />

                    <button type='submit' 
                      className='w-full h-[35px] text-Light font-semibold text-[18px] bg-Light_Blue rounded-md hover:text-Secondary/50 hover:bg-Light_Blue/60 hover:ring-2 ring-Secondary/50 transition ease-in-out duration-200 active:bg-Light '>Block
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-6'>
              <h2 className='text-Secondary font-semibold my-3 '>Report account</h2>
              <div>
                <div>
                  <input type='text' placeholder="Enter Friend's name"
                    className='w-[200px] h-[30px] outline-none px-2 rounded-xl ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                  />
                </div>

                <div className='my-4'>
                  <h2 className='text-Secondary'>Reason for report</h2>
                  <div>
                    <div className='flex w-full justify-between'>
                      <h2 className='text-Light_Blue font-font_3'>Harrasment</h2>
                      <input type='checkbox' className='text-Light_Blue bg-Light_Blue'/>
                    </div>

                    <div className='flex w-full justify-between'>
                      <h2 className='text-Light_Blue font-font_3'>Spam</h2>
                      <input type='checkbox' className='text-Light_Blue bg-Light_Blue'/>
                    </div>

                    <div className='flex w-full justify-between'>
                      <h2 className='text-Light_Blue font-font_3'>Others</h2>
                      <input type='checkbox' className='text-Light_Blue bg-Light_Blue'/>
                    </div>
                    
                    <button type='submit' 
                      className='w-full h-[35px] text-Light font-semibold text-[18px] bg-Secondary_2 rounded-md hover:bg-Secondary_2/80 ring-Secondary/50 transition ease-in-out duration-200 active:bg-Light '>Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='text-Secondary font-semibold my-2'>Delete account</h2>
              <div>
                <div>
                  <span className='text-[15px] font-font_2 font-semibold text-Primary_2 bg-Primary/20 px-2 rounded-md '>Warning!!</span>
                  <h2 className='text-Light_Blue font-font_3 whitespace-normal '>
                    Deleted account cannot be recovered, all data will be lost
                  </h2>
                </div>

                <button id='delete-Toggle'
                  onClick={() => {
                    setToggleDelete(!toggleDelete);
                  }} 
                  type='submit' 
                  className='w-full h-[35px] text-Light font-semibold text-[18px] bg-Secondary/80 rounded-md hover:bg-Secondary/70 ring-Secondary/50 transition ease-in-out duration-200 active:bg-Light '>{!toggleDelete ? 'Proceed Anyways' : 'Hide Delete'}
                </button>

                <div style={{display: toggleDelete ? 'flex' : 'none'}} className='flex-col gap-2 my-2'>
                  <input type='password' placeholder='Password' required
                    className='outline-none min-w-[260px] px-2 rounded-xl h-[30px] ring-1 ring-Secondary_2/20 text-Secondary_2 focus:ring-2 focus:ring-Secondary_2/40 font-font_3 ring-offset-2 transition ease-in-out duration-200 '
                  />

                  <button type='submit' 
                    className='w-full h-[35px] text-Light font-semibold text-[18px] bg-Primary/80 rounded-md hover:bg-Primary/70 ring-Secondary/50 transition ease-in-out duration-200 active:bg-Light '>Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center w-full'>
            <h2 className='text-Secondary/40 text-2xl font-font_2 font-bold '>Notifications</h2>

            <h2 className='text-Secondary font-semibold'>Control which notification you choose to see</h2>

            <div className='flex w-full max-w-[300px] justify-between items-center '>
              <h2 className='text-Light_Blue font-semibold '>Calls</h2>

              <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
              </div>
            </div>

            <div className='flex w-full max-w-[300px] justify-between items-center '>
              <h2 className='text-Light_Blue font-semibold '>New Message</h2>

              <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
              </div>
            </div>

            <div className='flex w-full max-w-[300px] justify-between items-center '>
              <h2 className='text-Light_Blue font-semibold '>Friend Request</h2>

              <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
              </div>
            </div>

            <h2 className='text-Secondary font-semibold'>Notification behavior</h2>

            <div className='flex flex-col items-center w-full justify-between '>
              <div className='flex w-full max-w-[300px] justify-between items-center '>
                <h2 className='text-Light_Blue font-semibold '>Sound</h2>

                <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                  <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
                </div>
              </div>

              <div className='flex w-full max-w-[300px] justify-between items-center '>
                <h2 className='text-Light_Blue font-semibold '>Vibrate</h2>

                <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                  <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col items-center w-full justify-between '>
              <div className='flex w-full max-w-[300px] justify-between items-center '>
                <h2 className='text-Light_Blue font-semibold '>Wake up screen</h2>

                <div  className='relative w-[45px] h-[20px] bg-Light_Blue rounded-xl '>
                  <div className='absolute left-[1px] top-[1px] w-[18px] h-[18px] bg-Light rounded-full '></div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsGeneral