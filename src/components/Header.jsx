import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTags , faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  
  };

  const navLinkClasses =
    "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter";
  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
        <a
          href="/"
          className={navLinkClasses}
        >
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Easy Stickers</span>
        </a>
        <nav className="flex items-center py-2 z-10">
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 dark:text-light text-primary"
            />
          </button>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className={navLinkClasses}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={navLinkClasses}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className={navLinkClasses}>
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className={navLinkClasses}>
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className="text-primary py-2">
                <FontAwesomeIcon icon={faCartShopping} className="dark:text-light" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
