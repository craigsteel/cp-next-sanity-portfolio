/* eslint-disable react/jsx-no-undef */
import { getPage, getProjects, getPages, getProject } from "@/sanity/sanity-utils";
import project from "@/sanity/schemas/project-schema";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from 'next/image';

type Props = {
    params: { slug: string }
  }

export default async function Page({ params }: Props) {

  const slug = params.slug;
  const projects = await getProjects();
  const page = await getPage(slug);

  return (

      <><div className="flex flex-col">
      <h1 className="text-xl text-white uppercase font-light">
        {page.title}
      </h1>
      <PortableText value={page.content} />
    </div>
      <div className="flex flex-wrap space-x-5">
        {projects.map((project) => (

          <div key={project._id}
            className='relative w-[30%] bg-gradient-to-tr from-black from-25% via-blue-900 via-60% to-slate-700 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_40px_rgba(0,0,205,0.4)] rounded-lg p-5 my-20 hover:scale-105 transition duration-200 ease-in-out'>

            <div className='flex flex-col'>

              <h2 className='uppercase text-2xl font-extralight'>
                {project.number}
              </h2>

              <h2 className='uppercase text-2xl font-light'>
                {project.name}
              </h2>

              <div className="text-8">
                <PortableText
                  value={project.content} />
              </div>

              <Link className='left-5'
                href={`/projects/${project.slug}`}>
                <p className='font-light text-sm py-5 opacity-60 hover:opacity-100 hover:font-medium'>
                  Read the full story
                </p>
              </Link>

              <div className='w-full aspect-video'>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={902}
                    height={508}
                    className="object-cover m-auto rounded-lg pt-0" />
                )}
              </div>

            </div>

          </div>
        ))}
      </div></>

  )
}
