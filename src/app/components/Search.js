"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { BsXLg, BsSearch, BsChevronDown } from "react-icons/bs";


import OptionsTab from './OptionsTab';
import { FiSearch, FiImage, FiPlay, FiMap, FiFileText, FiMessageSquare } from "react-icons/fi";

export default function Search() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex flex-col sm:flex-row  w-full p-6 items-center'>
                <Image src="/logo.png" height={40} width={120} alt='' className='cursor-pointer pb-4 sm:pb-0' />
                <form className='flex border border-gray-200 rounded-lg flex-grow w-full  sm:max-w-3xl items-center px-6 py-2 ml-10 mr-5 ml- shadow-lg'>
                    <input type='search' placeholder='search' className='flex-grow w-full focus:outline-none' />
                    <BsXLg className='sm:mr-3 hidden   h-7 font-bold cursor-pointer text-gray-500 sm:inline-flex border-r-2 pr-4 border-gray-400' />
                    <BsSearch className='hover:text-red-500 h-7 font-extrabold cursor-pointer' />
                </form>
                <div className='ml-auto  justify-center items-center space-x-4 hidden sm:inline-flex'>
                    <div className="relative inline-block text-left">
                        <div>
                            <button onClick={toggleVisibility} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400   hover:text-gray-700" id="menu-button" aria-expanded="true" aria-haspopup="true">

                                Privacy, simplified.

                                <BsChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
                            </button>
                        </div>

                        {isVisible && (
                            <div className="absolute -left-16 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <BsXLg />
                                            </div>
                                            <div>
                                                <a href="#" className="font-semibold text-gray-900">
                                                    Analytics
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                                <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className='flex w-full justify-evenly text-sm lg:space-x-36 border-b-[1px] lg:pl-48 lg:text-base pl-6 lg:justify-start '>
                <div className='flex space-x-6 overflow-x-auto scrollbar-hidden '>
                    <OptionsTab Icon={FiSearch} title="All" selected onClick={() => handleTabClick('All')} />
                    <OptionsTab Icon={FiImage} title="Images" onClick={() => handleTabClick('Images')} />
                    <OptionsTab Icon={FiPlay} title="Videos" onClick={() => handleTabClick('Videos')} />
                    <OptionsTab Icon={FiFileText} title="News" onClick={() => handleTabClick('News')} />
                    <OptionsTab Icon={FiMessageSquare} title="Answer" onClick={() => handleTabClick('Answer')} />
                    <OptionsTab Icon={FiMap} title="Maps" onClick={() => handleTabClick('Maps')} />
                </div>
                {/* right  */}
                <div className='hidden sm:flex space-x-4'>
                    <p className='link '>Settings</p>
                    <p className='link'>tools</p>
                </div>
            </div>

        </header>
    )
}
