import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionLeft?: Boolean;
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                className='h-20 w-20 xl:w-30 xl:h-30 rounded-full border border-gray-500 
                filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white 
            h-20 w-20 xl:w-30 xl:h-30 rounded-full transition duration-300 ease-in-out z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl item-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill