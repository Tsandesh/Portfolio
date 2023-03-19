import React from 'react'
import {MdNightsStay,MdWbSunny} from 'react-icons/md'

const Header = ({darkMode,setDarkMode}) => {
  return (
    <header className='bg-white dark:bg-gray-900 text-grey-900 dark:text-white' >
        <nav className='flex justify-between items-center p-5'>
            <h1 className='text-xl sem'>
                Sandesh Thapa 
            </h1>
            <div className='flex gap-2' onClick={()=>setDarkMode(!darkMode)}>
                <p>Toogle :</p>
                {darkMode?(
                    <MdWbSunny className='text-2xl cursor-pointer'/>
                ):(
                    <MdNightsStay className='text-2xl cursor-pointer'/>
                )}
                
            </div>
        </nav>
    </header>
  )
}

export default Header