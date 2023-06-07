import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/project";
import { Page } from "@/types/page";

export async function getProjects(): Promise<Project[]> {

	return createClient(clientConfig).fetch(
		groq`*[_type == "project"]{
			_id,
			_createdAt,
			number,
			name,
			"slug": slug.current,
			"projectImages": image.asset->url,
			"image": image.asset->url,
			"imagetwo": imagetwo.asset->url,
			"imagethree": imagethree.asset->url,
			"mobile": mobile.asset->url,
			url,
			content,
			public_id,
			cloudinary,
		}`
	)
}

export async function getProject(slug: string): Promise<Project> {

	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
			_id,
			_createdAt,
			number,
			name,
			"slug": slug.current,
			"projectImages": image.asset->url,
			"image": image.asset->url,
			"imagetwo": imagetwo.asset->url,
			"imagethree": imagethree.asset->url,
			"mobile": mobile.asset->url,
			url,
			content,
			public_id,
			cloudinary,
		}`,
		{ slug }
	);
}

export async function getPages(): Promise<Page[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page"]{
			_id,
			_createdAt,
			title,
			"slug": slug.current,
			"image": image.asset->url,
			"imagetwo": imagetwo.asset->url,
			"imagethree": imagethree.asset->url,
			"mobile": mobile.asset->url,
			url,
			content,
		}`
	)
}

export async function getPage(slug: string): Promise<Page> {

	return createClient(clientConfig).fetch(
		groq`*[_type == "page" && slug.current == $slug][0]{
			_id,
			_createdAt,
			title,
			"slug": slug.current,
			"image": image.asset->url,
			"imagetwo": imagetwo.asset->url,
			"imagethree": imagethree.asset->url,
			"mobile": mobile.asset->url,
			url,
			content,
		}`,
		{ slug }
	);
}