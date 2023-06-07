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
				<header className="w-1/2 mb-3 ml-[80px]">
					<h1 className="text-xl text-white uppercase font-light">
						{project.name}
					</h1>
					<div className="mb-3">
						<PortableText value={project.content}></PortableText>
					</div>

					<a href={project.url}
						title="View Live Site"
						target="_blank"
						rel="noopener noreferrer"
						className="projectButton left-[80px]">
							View {project.name} Live Site
						</a>

				</header>

				<div className="w-full aspect-ratio mt-10 pt-10 drop-shadow-[0px_0px_90px_rgba(0,0,0,0.8)]">
					<Image
						src={project.image}
						alt={project.name}
						width={1000}
						height={508}
						quality={80}
						className="rounded-lg mx-auto"
					/>
				</div>

				<div className="z-10 px-5 mt-[-150px] drop-shadow-[0px_0px_90px_rgba(0,0,0,0.8)]">
					<Image
						src={project.imagetwo}
						alt={project.name}
						width={900}
						height={508}
						quality={100}
						className="rounded-lg mx-auto"
						/>
					<div className='top-[-100px] right-[100px] absolute z-50'>
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
				<div className="">
					<Image
						src={project.imagethree}
						alt={project.name}
						width={900}
						height={508}
						quality={80}
						className="rounded-lg mx-auto"
						loading = 'lazy'
						/>
					</div>

				</div>
			</div>

			<div className='h-508 w-1200 aspect-ratio'>
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


