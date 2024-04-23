import React from 'react'

export default function Blog() {
  return (
      <div>
        <h1 className='text-4xl font-bold py-4'>Artist's</h1>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-start h-[200px] '>
            <div className='w-[50%] flex items-center bg-gray-500 rounded-md gap-4 p-6'>
              <div>
                <img src={'/defuser.png'} alt="user" className='w-[80%]' />
                <span>Name : munuu murtikar</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto explicabo provident, voluptatibus similique, nemo a itaque et odio expedita nam asperiores exercitationem sit quia pariatur ratione eos quis vero!
              </div>
            </div>
          </div>
          <div className='flex justify-end h-[200px] '>
            <div className='w-[50%] flex items-center bg-gray-500 rounded-md gap-4 p-6'>
              <div>
                <img src={'/defuser.png'} alt="user" className='w-[80%]' />
                <span>Name :santosh murtikar</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto explicabo provident, voluptatibus similique, nemo a itaque et odio expedita nam asperiores exercitationem sit quia pariatur ratione eos quis vero!
              </div>
            </div>
          </div>
          <div className='flex justify-start h-[200px] '>
            <div className='w-[50%] flex items-center bg-gray-500 rounded-md gap-4 p-6'>
              <div>
                <img src={'/defuser.png'} alt="user" className='w-[80%]' />
                <span>Name : shiva murtikar</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto explicabo provident, voluptatibus similique, nemo a itaque et odio expedita nam asperiores exercitationem sit quia pariatur ratione eos quis vero!
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
