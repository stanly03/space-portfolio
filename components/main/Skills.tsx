    import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constant'
import SkillDataProvider from '@/sub/SkillDataProvider'
import SkillText from '@/sub/SkillText'
import React from 'react'

const Skills = () => {
  return (
<section 
id='skills'
className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 "
style={{transform : "scale(0.9"}}
>
    <SkillText/>
      
    <div className="flex flex-row justify-around flex-wrap gap-5 mt-4 items-center ">
        {Skill_data.map((image,index)=>(
            <SkillDataProvider
             src={image.Image}
             key={index}
             width={image.width}
             height={image.height}
             index={index}
            />
        ))}
    </div>


    <div className="flex flex-row justify-around flex-wrap gap-5 mt-4 items-center ">
        {Frontend_skill.map((image,index)=>(
            <SkillDataProvider
             src={image.Image}
             key={index}
             width={image.width}
             height={image.height}
             index={index}
            />
        ))}
    </div>

    <div className="flex flex-row justify-around flex-wrap gap-5 mt-4 items-center ">
        {Backend_skill.map((image,index)=>(
            <SkillDataProvider
             src={image.Image}
             key={index}
             width={image.width}
             height={image.height}
             index={index}
            />
        ))}
    </div>

    <div className="flex flex-row justify-around flex-wrap gap-5 mt-4 items-center ">
        {Full_stack.map((image,index)=>(
            <SkillDataProvider
             src={image.Image}
             key={index}
             width={image.width}
             height={image.height}
             index={index}
            />
        ))}
    </div>

    <div className="flex flex-row justify-around flex-wrap gap-5 mt-4 items-center ">
        {Other_skill.map((image,index)=>(
            <SkillDataProvider
             src={image.Image}
             key={index}
             width={image.width}
             height={image.height}
             index={index}
            />
        ))}
    </div>

    <div className="w-full h-full absolute ">
        <div className="w-full h-full z-[10] opacity-30 absolute flex  items-center justify-center bg-cover">
            <video 
            src="/cards-video.webm"
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            />
        </div>
    </div>
</section>
)
}

export default Skills