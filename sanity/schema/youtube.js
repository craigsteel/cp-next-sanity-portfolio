import React from "react";
import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";
import { DocumentVideoIcon } from "@sanity/icons";

// const Preview = props => (<pre>{JSON.stringify(pops, null, 2)}</pre>)

const Preview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeID(id);
  return <YouTube videoID={id} />;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  icon: DocumentVideoIcon,
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  component: {
    preview: Preview,
  },
};
