import Link from 'next/link'
import React from 'react'
import Carousel from './Carousel'
import { FcNews } from "react-icons/fc";

export default function WebSearch() {
  return (
    <div>
      <div className='flex justify-between text-sm lg:space-x-36 lg:pl-48 lg:text-base  lg:justify-start '>
        <div className='flex '>
          <div className='max-w-xl sm:max-w-3xl'>

            <ol>
              <li className='px-3 sm:px-0'>
                <div className=" max-w-xl sm:max-w-3xl  p-6 bg-white border-[1px] sm:border-none border-gray-200 rounded-lg shadow sm:shadow-none dark:bg-gray-800 dark:border-gray-700">
                  <a href=''>http://localhost:3000/search</a>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-blue-900 dark:text-white">Google</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                  <ul className='flex  sm:flex-wrap overflow-x-auto sm:space-y-4  justify-start items-cente'>
                    <li className='sm:w-6/12 sm:px-4'>

                      <a href="#" class="inline-flex whitespace-nowrap p-2 border sm:p-0 bg-gray-100 sm:bg-transparent sm:border-none rounded-md font-medium text-lg items-center text-blue-600 hover:underline">
                        See our guideline

                      </a>
                      <p className='text-gray-500 hidden sm:block'>Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                    </li>
                    <li className='sm:w-6/12 px-4'>

                      <a href="#" className="inline-flex whitespace-nowrap p-2 border sm:p-0 bg-gray-100 sm:bg-transparent sm:border-none rounded-md font-medium text-lg items-center text-blue-600 hover:underline">
                        See our guideline

                      </a>
                      <p className='text-gray-500 hidden sm:block'>Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                    </li>
                    <li className='sm:w-6/12 px-4'>

                      <a href="#" className="inline-flex whitespace-nowrap p-2 border sm:p-0 bg-gray-100 sm:bg-transparent sm:border-none rounded-md font-medium text-lg items-center text-blue-600 hover:underline">
                        See our guideline

                      </a>
                      <p className='text-gray-500 hidden sm:block'>Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                    </li>
                    <li className='sm:w-6/12 px-4'>

                      <a href="#" className="inline-flex whitespace-nowrap p-2 border sm:p-0 bg-gray-100 sm:bg-transparent sm:border-none rounded-md font-medium text-lg items-center text-blue-600 hover:underline">
                        See our guideline

                      </a>
                      <p className='text-gray-500 hidden sm:block'>Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                    </li>
                  </ul>
                </div>

              </li>
            </ol>
            <div className="">
              <a className='flex space-x-2 justify-start items-center mb-4'>
                <FcNews Text className='h-5 w-5' />
                <h1 className="text-lg hover:underline font-medium">News for google</h1>
              </a>

              <Carousel>
                {/* Place your card components here */}
          
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>
<div className='min-w-80 bg-red-500 h-48'>dfgfdfg</div>



                {/* Add more cards as needed */}
              </Carousel>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className=' space-x-2 hidden sm:flex-inline'>
          <p className='link '>Settings</p>
          <p className='link'>tools</p>
        </div>
      </div>
    </div>
  )
}
