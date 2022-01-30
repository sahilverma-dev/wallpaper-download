import React, { useState } from "react";

import axios from "axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WallpaperCard from "../../components/WallpaperCard";
import Link from "next/link";
import OpenGraphs from "../../components/OpenGraph";

const SingleWallpaper = ({ data }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };
  return (
    <>
      <OpenGraphs
        title={data.caption}
        description={data.caption}
        image={data.primarySrc}
        url={`/wallpaper/${data?.link}`}
      />
      <div>
        <Header />
        <div className="max-w-7xl mx-auto p-3">
          <img
            src={data?.primarySrc}
            alt={data.caption}
            className="w-auto mx-auto h-screen object-cover rounded"
          />
          <p className="mt-3 text-sm md:text-xl">{data.caption}</p>
          <div className="flex items-center my-4 gap-2 flex-wrap">
            <h2 className="font-bold">Tags :</h2>
            {data?.tags?.map((item, index) => (
              <div
                key={index}
                className="py-1 px-2 rounded dark:bg-slate-800 dark:text-white bg-gray-300 text-sm"
              >
                <Link
                  href={`/search/${item?.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="my-3">
            <h2 className="font-bold">Resolutions :</h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 my-2 gap-2">
              {data?.resolutions?.map((item, index) => (
                <div
                  key={index}
                  className="py-1 px-2 rounded text-center dark:bg-slate-800 dark:text-white bg-gray-300 text-sm"
                >
                  <a
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <h2 className="my-4 text-xl font-semibold">Similar Wallpapers</h2>
          <div className="masonry sm:masonry-sm lg:masonry-md min-h-screen">
            {data?.similar?.map((item, index) => (
              <div key={index}>
                <WallpaperCard
                  link={`/wallpaper/${item.link}`}
                  src={item.src}
                  res={item.res}
                  pulsing={pulsing}
                  imageLoading={imageLoading}
                  imageLoaded={imageLoaded}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SingleWallpaper;

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await axios(`${process.env.API_BASE}wallpaper/${id}`);
  console.log(params);
  return {
    props: { data },
  };
};
