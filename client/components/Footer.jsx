// icons
import { FaGithub as GithubIcon } from "react-icons/fa";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { GrInstagram as InstagramIcon } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="text-center">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xs font-medium"> {date.getFullYear()} Company</p>

            <div className="flex justify-center space-x-6">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-blue-500 text-2xl"
              >
                <TwitterIcon />
              </a>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-900 dark:text-gray-400 text-xl"
              >
                <GithubIcon />
              </a>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="text-pink-600 text-xl"
              >
                <InstagramIcon />
              </a>
            </div>

            <nav className="grid grid-cols-2 gap-4 p-6 text-sm font-medium bg-gray-100 dark:text-black rounded-lg sm:grid-cols-3 lg:grid-cols-6">
              <a href="" className="hover:opacity-75">
                Uses
              </a>
              <a href="" className="hover:opacity-75">
                Snippets
              </a>
              <a href="" className="hover:opacity-75">
                Bookmarks
              </a>
              <a href="" className="hover:opacity-75">
                Courses
              </a>
              <a href="" className="hover:opacity-75">
                Downloads
              </a>
              <a href="" className="hover:opacity-75">
                Projects
              </a>
            </nav>

            <p className="max-w-lg mx-auto text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              illo. Laborum ratione corrupti quasi ullam? Voluptatum iusto at
              aperiam voluptas.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
