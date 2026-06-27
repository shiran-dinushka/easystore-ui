import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags , faSun, faMoon, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../store/cart-context";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
       localStorage.setItem("theme", newTheme);
      return newTheme;
    });  
  };

  const { totalQuantity } = useCart();

  const navLinkClasses =
    "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter";
  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
        <Link
          to="/"
          className={navLinkClasses}
        >
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Easy Stickers</span>
        </Link>
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
              <NavLink to="/" className={({ isActive }) => (isActive ? `underline ${navLinkClasses}` : navLinkClasses)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? `underline ${navLinkClasses}` : navLinkClasses)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? `underline ${navLinkClasses}` : navLinkClasses)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? `underline ${navLinkClasses}` : navLinkClasses)}>
                Login
              </NavLink>
            </li>
            <li>
            <Link to="/cart" className=" relative text-primary py-2">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="text-primary dark:text-light w-6"
                />
                <div className="absolute -top-2 -right-6 text-xs bg-yellow-400 text-black font-semibold rounded-full px-2 py-1 leading-none">
                  {totalQuantity}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
