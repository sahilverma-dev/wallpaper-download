import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useState } from "react";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WallpaperCard from "../../components/WallpaperCard";

import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

const Home = () => {
  const [data, setData] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { query } = router.query;
  //  console.log(query);
  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data: res } = await axios(
        `${process.env.NEXT_PUBLIC_API_BASE}search?q=${query}&page=${currentPage}`
      );
      if (res) {
        setError(false);
        setData(res);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    if (query) getData();
  }, [currentPage, query]);

  const handlePageChange = ({ selected }) => {
    setData([]);
    setcurrentPage(selected + 1);
  };
  return (
    <div>
      <Header />
      {!error && (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="max-w-7xl mx-auto p-3">
                <div className="my-3 text-xl font-semibold">
                  <h2>Showing wallpapers related to {query}</h2>
                </div>
                <div className="flex items-center my-4 gap-2 flex-wrap">
                  <h2 className="font-bold">Related Tags :</h2>
                  {data?.relatedTags?.map((item, index) => (
                    <div
                      key={item?.link}
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
                <div className="masonry sm:masonry-sm lg:masonry-md min-h-screen">
                  {data?.images?.map((item) => (
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
                      "md:px-4 md:py-3 md:text-sm block text-xs px-3 py-2 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    nextLinkClassName={
                      "md:px-4 md:py-3 md:text-sm block text-xs px-3 py-2 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    breakClassName={
                      "md:px-4 md:py-3 md:text-sm text-xs px-3 py-2 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    pageClassName={
                      "md:px-5 md:py-3 md:text-sm text-xs px-3.5 py-2 mx-1 font-medium rounded bg-gray-300 hover:bg-gray-600 hover:text-white"
                    }
                    disabledClassName={"opacity-50 cursor-default"}
                    activeClassName={
                      "z-10 bg-blue-600 text-white hover:bg-blue-600 hover:text-white border-[#e68d07]"
                    }
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
      {error && <NotFound />}
      <Footer />
    </div>
  );
};
export default Home;
