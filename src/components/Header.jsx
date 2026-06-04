import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTags } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="link">
          <FontAwesomeIcon icon={faTags} />
          <span className="brand-title">Easy Stickers</span>
        </a>
        <nav className="nav">
          <ul>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className="nav-link">
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
