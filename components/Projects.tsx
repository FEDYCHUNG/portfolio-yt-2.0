import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex flex-col overflow-hidden text-left 
        md:flex-row max-w-full justify-evenly items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
            snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div key={project} className="w-screen flex-shrink-0 snap-center flex flex-col space-x-5 items-center justify-center p-20 md:p-40 h-screen">
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            alt="project" src="/assets/img/project1.webp" className="h-[375px] w-[600px]" />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                UPS clone
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore id adipisci sed nulla! Aut distinctio voluptatibus tempora quis quidem.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] 
            -skew-y-12'>
            </div>
        </motion.div>

    )
}

export default Projects