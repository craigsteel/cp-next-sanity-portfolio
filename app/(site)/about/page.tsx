'use client'
import JourneyCard from "@/components/JourneyCard";
import ToolsUsed from "@/components/ToolsUsed";
import WorkFlow from "@/components/WorkFlow";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from 'next/image';


export default function About() {

	return (

		<><motion.div
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
          <span>About Me</span>
        </h1>

        <p className='font-light text-2xl md:mr-[165px] leading-10'>
          My passion for design has enabled me to pursue a career that I love, whether in advertising with its dynamic pace of the studio, deadlines and creative teams, to the corporate world of annual reporting, strategic marketing of brands to UX/UI Design and Development of web applications.
          Over the years I have gained a vast amount of knowledge in leading teams, presenting, pitching to clients, working alongside developers, managing budgets and working to tight deadlines.
        </p>

        <h2 className='mt-4 font-light text-gray-400 text-xl pl-5 pt-5'>

        </h2>
      </div>

    </motion.div><section className="about">

        <JourneyCard />
        <ToolsUsed />
        <WorkFlow />

      </section></>

	)
}