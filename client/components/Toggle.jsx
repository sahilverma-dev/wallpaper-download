import { useTheme } from "next-themes";

import { BsSunFill as SunIcon } from "react-icons/bs";
import { RiMoonLine as MoonIcon } from "react-icons/ri";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      className="flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default Toggle;
