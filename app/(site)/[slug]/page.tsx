import { getPage, getPages } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {

    const page = await getPage(params.slug);

    return (
        <div>
            <h1 className="text-xl text-white uppercase font-light">
                {page.title}
            </h1>

            <PortableText value={page.content} />

        </div>
    )
}