/* eslint-disable react/jsx-no-undef */
import { getPage, getProjects, getPages, getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";

type Props = {
    params: { slug: string }
  }

export default async function allProjects({ params }: Props) {

  const slug = params.slug;
  const projects = await getProjects();
  const page = await getPage(slug);

  return (

    <>
      <div className="w-full m-10">
      <h1 className="text-xl text-white uppercase font-light">
        {page.title}
      </h1>
      <PortableText value={page.content} />
    </div>

        <div className="grid gap-20 grid-cols-2 m-10">
        {projects.map((project) => (
          <div key={project._id}
            className='relative hover:scale-105 transition duration-500 ease-in-out bg-gradient-to-tr from-black from-25% via-blue-900 via-60% to-slate-700 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_40px_rgba(0,0,205,0.4)] rounded-lg p-5'>

              <h2 className='uppercase text-2xl font-light'>
                {project.name}
              </h2>

              <div className="text-8">
                <PortableText
                  value={project.content} />
              </div>

              <div className='w-full aspect-video'>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={902}
                    height={508}
                    className="relative object-cover m-auto rounded-lg py-5" />
                )}
              </div>

              <div className="relative flex rounded uppercase text-[12px] space-x-2 opacity-60 hover:opacity-100 transition duration-300 ease-in-out">
                <Link
                  href={`/projects/${project.slug}`}>
                  Read the full story
                </Link>
              </div>

            </div>
        ))}
        </div>
    </>

  )
}
