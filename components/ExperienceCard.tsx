import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        src='/assets/img/photo_profile.jpg' 
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[150px] 
        xl:h-[150px] object-cover object-center'/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of ...</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
               <Image src="/assets/img/js.png" alt="" width={20} height={20}/>
               <Image src="/assets/img/js.png" alt="" width={20} height={20} />
               <Image src="/assets/img/js.png" alt="" width={20} height={20} />
            </div>
            <p>Started work.. - Ende...</p>

            <ul className='list-disc space-y-4 text-lg'>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
            </ul>
        </div>
    </article>
  )
}