
import Image from 'next/image'
import React from 'react'

import Menuoption from './Menuoption';


export default function Header() {
  
  return (
    <div className='mx-auto container py-4 px-2' >
      <nav className='pb-6'>
        <div className='flex justify-between items-center'>
          <Image src="/logo.png" height={100} width={140} alt='ayaate' />
          <Menuoption />
        </div>
      </nav>

      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
        <div className='hidden sm:block '>
          <img src='./img/google.gif' className='h-20' alt='ads' />
        </div>
        <div className='sm:col-span-2 flex flex-col justify-center items-center space-y-3 relative'>
          <div className='w-full flex items-center border rounded-lg shadow-md px-2'>
            <img src='./img/search.png' className='h-10 w-10' alt='' />
            <input type='search' className=' outline-none w-full bg-transparent p-2 py-3' placeholder='Ayaate Search! ' />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div className='absolute pt-28'>

          </div>
        </div>
        <div className='hidden sm:block '>
        </div>
      </div>
    </div>
  )
}
