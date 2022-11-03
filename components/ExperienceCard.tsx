import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden' >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className='w-20 h-20 rounded-full md:rounded-full xl:w-32 
        xl:h-32 object-cover object-center'/>

      <div className='px-0 md:px-10'>
        <h4 className='text-1xl font-light'>CEO of ...</h4>
        <p className='font-bold text-1xl mt-1'>PAPAFAM</p>
        <div className='flex space-x-2 my-2 '>
          {experience.technologies?.map(techonology => (
            <Image key={techonology._id} loader={() => `${urlFor(techonology.image).url()}?`} src={urlFor(techonology.image).url()} unoptimized={true} 
            alt="" width={20} height={20} className="rounded-full" />
          ))}
        </div>
        <p className='uppercase py-1 text-gray-300 text-sm'>{new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-1 ml-5 text-sm h-52 scrollbar-thin overflow-scroll scrollbar-track-black  scrollbar-thumb-[#F7AB0A]/80'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}