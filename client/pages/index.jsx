import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useState } from "react";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

import Link from "next/link";
import WallpaperCard from "../components/WallpaperCard";
import OpenGraphs from "../components/OpenGraph";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

const Home = () => {
  const [data, setData] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const [error, setError] = useState(false);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  const getData = async () => {
    try {
      const { data: res } = await axios(
        `${process.env.NEXT_PUBLIC_API_BASE}?num=${currentPage}`
      );

      if (res) {
        setIsLoading(false);
        setError(false);
        setData(res);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setData([]);
    setcurrentPage(selected + 1);
  };
  return (
    <div>
      <OpenGraphs
        title="Wallpaper Downloader"
        url=""
        description="Download latest and beautiful wallpapers."
        image="https://picsum.photos/200/300"
      />
      <Header />
      <div className="max-w-7xl mx-auto">
        {!error && (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <div className="masonry sm:masonry-sm lg:masonry-md min-h-screen p-3">
                  {data?.images?.map((item, index) => (
                    <WallpaperCard
                      link={`/wallpaper/${item.link}`}
                      src={item.src}
                      key={item?.src}
                      res={item.res}
                      pulsing={pulsing}
                      imageLoading={imageLoading}
                      imageLoaded={imageLoaded}
                      title={item.title}
                    />
                  ))}
                </div>
                <div className="max-w-7xl w-screen mx-auto overflow-x-scroll">
                  <ReactPaginate
                    pageCount={50}
                    pageRange={1}
                    onPageChange={handlePageChange}
                    containerClassName={
                      "bg-transprent py-3 flex justify-between items-center"
                    }
                    previousLinkClassName={
                      "md:px-4 md:py-3 md:text-sm dark:text-black block text-xs px-3 py-2 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    nextLinkClassName={
                      "md:px-4 md:py-3 md:text-sm dark:text-black block text-xs px-3 py-2 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    breakClassName={
                      "md:px-4 md:py-3 md:text-sm dark:text-black text-xs px-3 py-2 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    pageClassName={
                      "md:px-5 md:py-3 md:text-sm text-xs px-3.5 py-2 mx-1 font-medium rounded bg-gray-300 dark:text-black hover:bg-gray-600 hover:text-white"
                    }
                    disabledClassName={"opacity-50 cursor-default"}
                    activeClassName={
                      "z-10 bg-blue-600 text-white hover:bg-blue-600 hover:text-white border-[#e68d07]"
                    }
                  />
                </div>
              </>
            )}
          </>
        )}
        {error && <NotFound />}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
