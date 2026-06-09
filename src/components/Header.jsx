import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTags } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  const navLinkClasses = "text-center text-lg font-primary font-semibold text-primary py-2";
  return (
    <header className="border-b border-gray-300 sticky top-0 z-20 bg-gray-100">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
        <a href="/" className="text-center text-lg font-primary font-semibold text-primary py-2">
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Easy Stickers</span>
        </a>
        <nav className="flex items-center py-2 z-10">
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
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
