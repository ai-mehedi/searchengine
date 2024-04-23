import React from 'react'

export default function OptionsTab({ Icon, title, selected }) {
  return (
    <div className={`flex text-gray-600 items-center space-x-1 border-b-2 hover:border-blue-500 pb-2 hover:text-blue-500 cursor-pointer border-transparent ${selected&&'text-blue-500 border-blue-500'}`}>
      <Icon className='h-4' />
      <p className='inline-flex'>{title}</p>
    </div>
  )
}
