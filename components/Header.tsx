"use client"

import React from 'react'
import { motion } from 'framer-motion';

type Props = {};

export default function Header({ }: Props) {

	return (
		<motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
      }}>
      <div className='mx-10 mt-16'>
			<h1 className='text-3xl font-extrabold md:text-6xl md:mr-[65px] uppercase pb-4 leading-normal tracking-wide'>
				<span>Hi, I&apos;m Craig and thanks for visiting my portfolio which focuses on UI/UX Design.</span>
			</h1>

			<p className='font-light text-2xl md:mr-[165px] leading-10'>
				I am a multidisciplinary UI/UX creative based in the UK. With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.
			</p>

			<h2 className='mt-4 font-light text-gray-400 text-xl pl-5 pt-5'>
				FEATURED PROJECTS
			</h2>
      </div>

			</motion.div>

  );
}