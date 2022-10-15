import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden' >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src='/assets/img/photo_profile.jpg'
        className='w-20 h-20 rounded-full md:rounded-full xl:w-32 
        xl:h-32 object-cover object-center'/>

      <div className='px-0 md:px-10'>
        <h4 className='text-1xl font-light'>CEO of ...</h4>
        <p className='font-bold text-1xl mt-1'>PAPAFAM</p>
        <div className='flex space-x-2 my-2 '>
          <div><Image src="/assets/img/js.png" alt="" width={20} height={20} className="rounded-full" /></div>
          <div><Image src="/assets/img/js.png" alt="" width={20} height={20} className="rounded-full" /></div>
          <div><Image src="/assets/img/js.png" alt="" width={20} height={20} className="rounded-full" /></div>
        </div>
        <p className='uppercase py-1 text-gray-300 text-sm'>Started work.. - Ended...</p>

        <ul className='list-disc space-y-1 ml-5 text-sm'>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point Summary Point Summary Point</li>
        </ul>
      </div>
    </article>
  )
}