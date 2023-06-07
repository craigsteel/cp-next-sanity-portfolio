"use client"
import { cloudinaryApiSecret, cloudinaryApiKey, cloudinaryName} from './../sanity/sanity.api'
import project from "@/sanity/schemas/Project";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { CldVideoPlayer } from 'next-cloudinary';
import { }

type Props = {};

export default function cloudinaryVideo({ }: Props) {

	type source = {
		id: 'cloudinaryApiKey',
		name: 'cloudinaryName',
	}


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
