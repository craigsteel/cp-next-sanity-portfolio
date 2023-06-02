import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';


type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {

	const slug = params.project;

	const project = await getProject(slug);

	return (

		<div>
			<div className="relative">
				<header>
					<h1 className="text-xl text-white uppercase font-light">
						{project.name}
					</h1>
				</header>

				<div className="w-1/2 mb-5">
					<PortableText value={project.content}></PortableText>
				</div>

				<a href={project.url}
					title="View Live Site"
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-70 hover:opacity-100 transition duration-200 ease-in-out"
				>
					View {project.name} Live Site
				</a>

			<div className="w-full aspect-video pt-10 drop-shadow-[0px_0px_90px_rgba(0,0,0,0.8)]">
				<Image
					src={project.image}
					alt={project.name}
					width={1200}
					height={508}
					quality={100}
					className="rounded-lg"
				/>
				</div>

			</div>

			<div className='h-508 w-1200 aspect-video'>
				<Image
					src={project.image}
					alt={project.name}
					fill={true}
					quality={100}
					className="z-[-10] top-0 mt-[-80px] opacity-30 blur-sm"
				/>
			</div>
		</div>
	)
}


