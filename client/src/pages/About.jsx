import React from 'react'

const About = () => {
  return (
    <div className='flex gap-12 py-4 h-[100%]'>
      <div className='basis-1/2 flex flex-col justify-evenly'>
        <h1 className='text-4xl font-bold'>About Us</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia nisi laboriosam ab fugit numquam, sunt earum animi! Ab tenetur veritatis facilis ea temporibus maxime quam sit beatae porro nam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vel? Debitis nostrum earum possimus quisquam libero odit. Pariatur accusamus architecto ipsam quisquam suscipit mollitia velit nostrum? Doloremque ad repudiandae asperiores.
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit possimus, et harum, voluptate tenetur perspiciatis, eos tempore laboriosam modi repellendus incidunt vitae. Pariatur voluptates, possimus autem ratione laborum corrupti.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ducimus, tenetur vitae praesentium dolorem autem enim doloremque recusandae est sint facilis ipsa fugit at vero cum deserunt iste porro. Necessitatibus?
        </div>
      </div>
      <div className='basis-1/2'>
          <img src={'/aboutimg.jpg'} alt="About Us image" className='rounded-md' />
      </div>
    </div>
  )
}

export default About