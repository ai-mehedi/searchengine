import Image from 'next/image'
import React from 'react'
import { BsXLg, BsSearch,BsChevronDown } from "react-icons/bs";
import HeaderOption from './HeaderOption';
import Menuoption from './Menuoption';

export default function Search() {
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image src="/logo.png" height={40} width={120} alt='' className='cursor-pointer' />
                <form className='flex border border-gray-200 rounded-lg flex-grow max-w-3xl items-center px-6 py-2 ml-10 mr-5 ml- shadow-lg'>
                    <input type='search' placeholder='search' className='flex-grow w-full focus:outline-none' />
                    <BsXLg className='sm:mr-3 hidden   h-7 font-bold cursor-pointer text-gray-500 sm:inline-flex border-r-2 pr-4 border-gray-400' />
                    <BsSearch className='hover:text-red-500 h-7 font-extrabold cursor-pointer' />
                </form>
                <div className='ml-auto flex justify-center items-center space-x-4'>
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400   hover:text-gray-700" id="menu-button" aria-expanded="true" aria-haspopup="true">

                                Privacy, simplified.
                                
                                <BsChevronDown className="-mr-1 h-5 w-5 text-gray-400"/>
                            </button>
                        </div>


                        <div className="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                         fgdgdf
                        </div>
                    </div>
                    <Menuoption/>
                </div>
            </div>
            <HeaderOption/>
        </header>
    )
}
