'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Popover } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/solid"


function NavResponsive () {
	return (
		<div className="flex flex-row">
		<Popover
			className='container base-full mx-auto items-center border-b-[1px] px-1 py-2 h-24'>

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
			>

        <Link href="/"
          className='mb-5 text-[14px] p-10 pt-10 md:text-lg opacity-70 hover:opacity-100 transition duration-300'>
            Craig Parfitt UI/UX Designer  -  0786 656 2170
				</Link>
       	 <div className="hidden sm:flex items-center justify-end gap-2 md:gap-8 opacity-70 hover:opacity-100 transition duration-300">
						<Link href="about">About</Link>
						<Link href="projects">Projects</Link>
						<Link href="contact">Contact</Link>
					</div>


				<div className="flex grow items-center justify-end md-hidden">
					<Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
						<span className="sr-only">Open Menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</Popover.Button>
				</div>

			</motion.div>
			</Popover>
			</div>
	);
};

export default NavResponsive