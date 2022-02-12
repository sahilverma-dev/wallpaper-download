import Head from "next/head";
import React from "react";

const OpenGraphs = ({ title, description, image, url }) => {
  return (
    <Head>
      <title>{`${title} - Wallpaper Downloading`}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} - Wallpaper Dowloader`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content={image} />
      <meta property="twitter:domain" content={url} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={`${title} - Wallpaper Dowloader`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default OpenGraphs;
