import { getProjects } from "@/sanity/sanity-utils";
import project from "@/sanity/schemas/project-schema";
import { PortableText } from "@portabletext/react";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { CldVideoPlayer } from 'next-cloudinary';


export default async function cloudinaryVideo() {

	return (
		<CldVideoPlayer
			id='sea-turtle'
			src={project.type}
			width={902}
			height={518}
			quality={""}
			className="object-cover rounded-lg transition duration-200 ease-in-out"
			/>
		);
	}
