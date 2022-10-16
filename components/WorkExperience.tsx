import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {}

function WorkExperience({ }: Props) {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Experience
        </h3>

        <div className='w-full overflow-x-scroll overflow-y-hidden flex space-x-8 p-5 mt-16 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  )
}

export default WorkExperience