import React from 'react'
import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id,name,prompt,photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img className='w-full h-auto object-cover rounded-xl' alt={prompt} src={photo}></img>
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#02020f9c] p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto'>{prompt}</p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='text-white w-7 h-7 rounded-full bg-green-700 flex items-center justify-center text-xs font-bold'>{name[0]}</div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button type='button' onClick={() => {
            downloadImage(_id, photo)
          }} className='outline-none bg-transparent border-none'>
            <img src={download} alt="dwnload" className='invert h-6 w-6 object-contain'></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
