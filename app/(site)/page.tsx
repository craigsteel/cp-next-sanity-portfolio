import { getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';



export default async function Home() {

  const projects = await getProjects();

    return (

      <div>

        <h1 className='text-3xl font-extrabold md:leading-tight md:text-7xl pb-4 tracking-wide'>
          <span>Hi, I&apos;m Craig and thanks for visiting my portfolio which focuses on UI/UX Design.</span>
        </h1>

        <p className='font-light text-2xl leading-10'>
          I am a multidisciplinary UI/UX creative based in the UK. With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.
        </p>

        <h2 className='mt-4 font-light text-gray-400 text-xl pl-5 pt-5'>
          FEATURED PROJECTS
        </h2>

          {projects.map((project) => (

            <div key={project._id} className='relative bg-gradient-to-tr from-black from-25% via-blue-900 via-60% to-slate-950 flex opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_40px_rgba(0,0,205,0.4)] rounded-lg p-5 my-20 hover:scale-105 transition duration-200 ease-in-out'>

              <div className='w-1/3 flex flex-col'>

                <h2 className='uppercase text-2xl font-extralight'>
                  {project.number}
                </h2>

                <h2 className='uppercase text-3xl font-light'>
                  {project.name}
                </h2>

                <div className="text-sm pr-10">
                <PortableText
                  value={project.content}>
                  </PortableText>
                </div>

                  <Link className='absolute bottom-10 left-5' href={`/projects/${project.slug}`}>
                    <p className='font-light text-sm opacity-60 hover:opacity-100 hover:font-medium bottom'>
                      Read the full story
                    </p>
                  </Link>
              </div>
                <div className='bottom-[-40px] right-[-50px] absolute z-10 opacity-100 drop-shadow-[0_0px_10px_rgba(0,0,0,0.4)]'>
                  {project.mobile && (
                    <Image
                      src={project.mobile}
                      alt={project.name}
                      width={213}
                      height={440}
                      className="object-cover rounded-lg transition duration-200 ease-in-out"
                    />
                  )}
              </div>

                <div className='w-2/3'>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={902}
                      height={508}
                      className="object-cover rounded-lg transition duration-200 ease-in-out"
                    />
                  )}
                </div>

              </div>

          ))}

        </div>
  );
}
