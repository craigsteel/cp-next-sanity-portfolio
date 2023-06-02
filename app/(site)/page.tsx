import Header from '@/components/Header';
import { getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { CldVideoPlayer } from 'next-cloudinary';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default async function Home() {

  const projects = await getProjects();

    return (

      <div>

        <Header />

          {projects.map((project) => (

            <div key={project._id}
                className='relative bg-gradient-to-tr from-slate-900 from-10% via-blue-950 via-50% to-slate-950 flex opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] rounded-lg p-5 my-20 hover:scale-105 transition duration-500 ease-in-out'>

              <div className='w-1/3 flex flex-col'>

                <h2 className='uppercase text-2xl pb-3 font-extralight'>
                  {project.number}
                </h2>

                <h2 className='uppercase text-3xl font-light'>
                  {project.name}
                </h2>

                <div className="pr-16">
                  <PortableText
                    value={project.content} />

                </div>

                <Link className='text-sm flex items-center space-x-2 absolute bottom-10 left-5 opacity-60 hover:opacity-100 bottom transition duration-200 ease-in-out'
                  href={`/projects/${project.slug}`}>
                  <p className='font-light'>
                    Read the full story</p> <FaChevronRight className='pt-1'/>
                </Link>

              </div>

                <div className='bottom-[-30px] right-[-40px] absolute z-10'>
                  {project.mobile && (
                    <Image
                      src={project.mobile}
                      alt={project.name}
                      width={190}
                      height={393}
                      loading="lazy"
                      quality={100}
                      className="object-cover rounded-lg drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]"
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
                      quality={100}
                      loading="lazy"
                      className="object-cover rounded-lg drop-shadow-[0px_10px_10px_rgba(0,0,0,0.8)]"
                    />
                  )}
                </div>
              </div>
          ))}
        </div>
  );
}
