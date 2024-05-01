import React from 'react'
import { FiSearch, FiImage, FiPlay, FiMap, FiFileText, FiMessageSquare } from "react-icons/fi";
import OptionsTab from './OptionsTab';

export default function HeaderOption() {
    return (
        <div>


            {/* left  */}
            <div className='flex w-full justify-evenly text-sm lg:space-x-36 border-b-[1px] lg:pl-48 lg:text-base lg:justify-start '>
                <div className='flex space-x-6 overflow-x-auto scrollbar-hidden '>
                    <OptionsTab Icon={FiSearch} title="All" selected />
                    <OptionsTab Icon={FiImage} title="Images" />
                    <OptionsTab Icon={FiPlay} title="Videos" />
                    <OptionsTab Icon={FiFileText} title="News" />
                    <OptionsTab Icon={FiMessageSquare} title="Answer" />
                    <OptionsTab Icon={FiMap} title="Maps" />
                </div>
                {/* right  */}
                <div className='flex space-x-4'>
                    <p className='link '>Settings</p>
                    <p className='link'>tools</p>
                </div>
            </div>
        </div>
    )
}
