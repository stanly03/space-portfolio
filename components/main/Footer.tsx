import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
    


} from "react-icons/rx"

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">

            <div className="font-bold text-[16px] ">Community</div>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <FaYoutube/>
              <span className='text-[15px] ml-[6px]'>Youtube</span> 
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxGithubLogo/>
              <span className='text-[15px] ml-[6px]'>Github</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxDiscordLogo/>
              <span className='text-[15px] ml-[6px]'>Discord</span>
            </p>
          </div>

           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">

            <div className="font-bold text-[16px] z-0 ">Social Media</div>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxInstagramLogo/>
              <a href="https://nike-omega-three.vercel.app/" ><span className='text-[15px] ml-[6px]'>Instagram</span></a>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxTwitterLogo/>
              <span className='text-[15px] ml-[6px]'>Twitter</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxLinkedinLogo/>
              <span className='text-[15px] ml-[6px]'>LinkedIn</span>
            </p>
          </div>

           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">

            <div className="font-bold text-[16px] ">About</div>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
             
              <span className='text-[15px] ml-[6px]'>Become Sponsor</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              
              <span className='text-[15px] ml-[6px]'>Learning About Me</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              
              <span className='text-[15px] ml-[6px]'>jesustan049@gmail.com</span>
            </p>
          </div>
        </div>

          
        <div className="mb-[20px] text-[15px] text-center">&copy; Fullstack Developer 2025 Inc, All rights reserved </div>
      </div>
    </div>
  )
}

export default Footer