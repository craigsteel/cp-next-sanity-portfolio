
"use client"

import React from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { getPages } from '@/sanity/sanity-utils';
import { motion } from "framer-motion"


export default async function Navbar() {

	const pages = await getPages();

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
          duration: 2,
        }}
        className='flex center justify-between'>

        <Link href="/"
          className='mb-5 text-lg opacity-70 hover:opacity-100 transition duration-300'>
            Craig Parfitt UI/UX Designer  -  0786 656 2170
        </Link>

        <div className='flex gap-4 text-lg opacity-70 hover:opacity-100 transition duration-300'>
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className='text-lg opacity-70 hover:opacity-100 transition duration-300'>
              {page.title}
            </Link>
          ))}

          <SocialIcon
            href="mailto:craig@craigsteel-design.com"
            network="email"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 40, width: 40 }}
            className='cursor-pointer opacity-70 hover:opacity-100 transition duration-300'>
          </SocialIcon>
        </div>

      </motion.div>
    );
}