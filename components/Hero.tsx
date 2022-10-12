import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My Name's Fedy", "Developer", "Designer", "Creator"],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image src='/assets/img/photo_profile.jpg' alt="Picture of the author" width={200} height={200} className="w-56 h-56 relative rounded-full mx-auto object-cover" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 tracking-[8px]'>
                    Software Engineer
                </h2>
                <h1 className='text-2xl lg:text-3xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7Ab0A' />
                </h1>
                <div>
                    <Link href="#about">
                        <button className='hero-button'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='hero-button'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='hero-button'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='hero-button'>Projects</button>
                    </Link>
                </div >
            </div >
        </div >
    )
}