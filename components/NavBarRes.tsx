'use client'
import Link from "next/link";
import React, { useState, useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function NavbarRes() {

	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

		const handleNav = () => {
			setNav(!nav);
		};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('#010617')
				setTextColor('#ffffff')
			} else {
				setColor('transparent')
				setTextColor('#ffffff')
			}
		}
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300">
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">

					<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className="p-4">
					<Link href="/">
						<h1 style={{color: `${textColor}`}} className='text-lg md:pl-10 opacity-70 space-x-4 hover:opacity-100 transition duration-300'>
        				<span>Craig Parfitt UI/UX Designer</span><span>-</span><span>0786 656 2170</span></h1>
							</Link>
							</li>

							<li className="p-4 opacity-70 text-lg hover:opacity-100 transition duration-300">
								<Link href="about">About</Link>
							</li>
							<li className="p-4 opacity-70 text-lg hover:opacity-100 transition duration-300">
								<Link href="projects">Projects</Link>
							</li>
							<li className="p-4 opacity-70 text-lg hover:opacity-100 transition duration-300">
								<Link href="contact">Contact</Link>
							</li>
						</ul>

						{/* Mobile Button */}
					<div onClick={handleNav} className="block sm:hidden z-10">
							{nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
						</div>

						{/* Mobile Menu */}
						<div className={
							nav
								? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
								: "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
							}
						>
							<ul>
								<li className="p-4 text-4xl hover:text-gray-500">
									<Link href="about">About</Link>
								</li>
								<li className="p-4 text-4xl hover:text-gray-500">
									<Link href="projects">Projects</Link>
								</li>
								<li className="p-4 text-4xl hover:text-gray-500">
									<Link href="contact">Contact</Link>
								</li>
							</ul>
						</div>

			</div>
		</div>
	);
};

export default NavbarRes