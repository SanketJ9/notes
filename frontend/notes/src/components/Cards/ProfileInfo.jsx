import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = () => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium dark:bg-slate-600 bg-slate-100'>
            {getInitials("Sanket Jadhav")}
        </div>

        <div>
            <p className='text-sm font-medium'>Sanket jadhav</p>
            <button className='text-sm dark:text-slate-300 text-slate-700 underline'>
                Logout
            </button>
        </div>
    </div>

  )
}

export default ProfileInfo