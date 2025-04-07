import Image from 'next/image'
import React from 'react'


const Project = () => {

    return (
        <div className='flex flex-col items-center justify-center py-20 'id='project'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className="h-1/2 w-full flex flex-col md:flex-row md:grid-rows-2 gap-10 px-10 text-white text-center">

                <div className='w-1/2'>
                    <Image
                        src='/nike-project.png'
                        alt='title'
                        width={1000}
                        height={1000}
                        className='w-full object-contain bg-transparent'
                    />
                    <p className='mt-4 font-bold text-[30px] text-transparent bg-clip-text  bg-gradient-to-r from-pink-600 to-pink-100'>Nike website</p>
                    <p className='text-start mt-4'>A dynamic, visually striking Nike frontend website built with HTML, CSS, and  JavaScript for seamless navigation, responsive design, interactive elements,  and enhanced user engagement delivering an immersive shopping experience.</p>
                   
                </div>

                <div className='w-1/2 '>
                    <Image
                        src='/SpaceWebsite.png'
                        alt='title'
                        width={1000}
                        height={1000}
                        className='w-full object-contain bg-transparent'
                    />
                    <p className=' font-bold text-[30px] text-transparent bg-clip-text  bg-gradient-to-r from-pink-600 to-pink-100'>Portfolio</p>
                    <p >Crafted using Next.js, Framer Motion, and Tailwind CSS, this portfolio is a dynamic and responsive showcase of my skills and projects. It blends clean UI design with smooth, interactive animations to deliver a modern user experience.Built with a performance-first mindset, it leverages server-side rendering and optimized asset loading. JavaScript is used to add interactive elements and handle user interactions.</p>
                    
                </div>

            </div>
        </div>
    )
}

export default Project