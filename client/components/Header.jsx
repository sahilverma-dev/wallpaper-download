import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { menuData } from "../constants/menuData";

// icons
import { FiSearch as SearchIcon } from "react-icons/fi";
import { BiMenu as MenuOpenIcon } from "react-icons/bi";
import { IoCloseOutline as MenuCloseIcon } from "react-icons/io5";

// components
import Toggle from "../components/Toggle";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const searchQuery = (e) => {
    e.preventDefault();
    if (query) router.push(`/search/${query.toLocaleLowerCase()}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className="shadow-sm sticky top-0 left-0 z-50 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link href="/">
                <img
                  src="/logo-big.png"
                  className="w-auto h-12 aspect-square object-cover cursor-pointer rounded-lg"
                />
              </Link>
            </div>

            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              {menuData.map((item, index) => (
                <Link className="text-gray-500" href={item.route} key={index}>
                  {item?.title}
                </Link>
              ))}
            </nav>
            <div className="flex justify-end gap-2 flex-1">
              <form onSubmit={(e) => searchQuery(e)}>
                <div className="relative items-center justify-end hidden space-x-2 sm:flex">
                  {/* search */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search.."
                      onChange={(e) => setQuery(e.target.value)}
                      value={query}
                      className="border-2 px-3  outline-none py-2 text-sm font-medium rounded-lg"
                    />
                    {query && (
                      <button
                        type="reset"
                        className="absolute top-0 right-0 mr-5 text-xs h-full"
                        onClick={() => setQuery("")}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="p-3 text-sm font-medium text-white bg-blue-600 rounded-lg"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </form>
              <div className="p-3 h-full text-sm font-medium text-white bg-blue-600 rounded-lg">
                <Toggle />
              </div>
              <div className="md:hidden">
                <button
                  className="p-3  text-gray-600 dark:text-white bg-gray-300 dark:bg-slate-900 rounded-lg"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed sm:hidden top-[72px] right-0 h-full w-screen bg-slate-900 z-50">
          <form className="flex-1" onSubmit={(e) => searchQuery(e)}>
            <div className="relative items-center justify-end space-x-2 p-2  w-full flex">
              {/* search */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search.."
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  className="border-2 px-3 w-full outline-none py-2 text-sm font-medium rounded"
                />
                {query && (
                  <button
                    type="reset"
                    className="absolute top-0 right-0 mr-5 text-xs h-full"
                    onClick={() => setQuery("")}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="p-3 h-full text-sm font-medium text-white bg-blue-600 rounded"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center">
            {menuData.map((item, index) => (
              <div
                key={index}
                className="p-2 my-3 font-semibold"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Link href={item.route}>
                  <div className="w-full text-center cursor-pointer text-white">
                    {item?.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
