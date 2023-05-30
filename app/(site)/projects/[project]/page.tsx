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

				<div className='w-full'>
					<Image
						src={project.image}
						alt={project.name}
						width={902}
						height={508}
						className="object-cover m-auto rounded-lg pt-20"
					/>
			</div>

		</div>
    )
}

