import { motion } from "framer-motion";
import Link from "next/link";

const WallpaperCard = ({
  link,
  src,
  res,
  pulsing,
  imageLoading,
  imageLoaded,
  title,
}) => {
  return (
    <div
      className={`${
        pulsing ? "pulse" : "relative group mb-4 overflow-hidden"
      } loadable`}
    >
      <span className="absolute top-2 right-2 z-20 py-1 px-2 text-xs md:px-3 md:py-2 rounded sm:text-sm text-black bg-white dark:bg-slate-900 dark:text-white">
        {res}
      </span>
      <motion.img
        initial={{ height: "16rem", opacity: 0 }}
        className="rounded "
        animate={{
          height: imageLoading ? "16rem" : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={
          ({ height: { delay: 0, duration: 0.4 } },
          { opacity: { delay: 0.5, duration: 0.4 } })
        }
        onLoad={imageLoaded}
        src={src}
      />
      <Link href={link}>
        <div className="absolute gradient cursor-pointer top-0 left-0 w-full h-full md:opacity-0 md:group-hover:opacity-100 duration-200 rounded-md z-10"></div>
      </Link>
      <div className="absolute left-0 right-0 bottom-0 md:translate-y-[100%]  md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-[0%] duration-200 p-4 z-10">
        <h2 className="font-bold text-white leading-tight mb-0 sm:mb-1.5 text-sm md:text-base">
          {title?.length > 40 ? `${title.substr(0, 40)} ...` : title}
        </h2>
      </div>
    </div>
  );
};

export default WallpaperCard;
