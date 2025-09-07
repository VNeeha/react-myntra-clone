// STYLES
import styles from "../css/Header.module.css";

// EXERNAL FUNCTIONALITIES
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// REACT- ICONS
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";

const Header = () => {
  const bagItems = useSelector((store) => store.bag);

  return (
    <header className={`${styles.header}`}>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light px-3 container-fluid fixed-top ${styles.headerContent}`}
      >
        {/* Brand / Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="images/myntra_logo.webp"
            alt="Myntra Home"
            style={{ height: "40px" }}
          />
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home & Living
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Beauty
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Studio <sup className="text-danger">New</sup>
              </a>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
          </form>

          {/* Action buttons */}
          <div className="d-flex align-items-center gap-3">
            <div className="text-center">
              <IoPersonCircleSharp size={22} /> <div>Profile</div>
            </div>
            <div className="text-center">
              <FaGrinHearts size={20} /> <div>Wishlist</div>
            </div>
            <Link
              to="/bag"
              className="text-center text-decoration-none text-dark position-relative"
            >
              <BsFillHandbagFill size={20} />
              <div>Bag</div>
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                {bagItems.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
