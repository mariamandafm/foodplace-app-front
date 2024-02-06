import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import { Navigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export function Header() {
  const auth = useAuth();

  const currentPath = window.location.pathname;

  return (
    <>
      {auth.isAuthenticated && location.pathname == "/" ? (
        <Navigate to="/user-panel" />
      ) : null}

      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-start justify-content-between">
          <div class="d-flex">
            <Link to="/" class="logo d-flex align-items-center me-auto me-lg-0">
              <h1>
                FoodPlace<span>.</span>
              </h1>
            </Link>
            <nav id="navbar" class="navbar">
              {auth.isAuthenticated ? (
                <ul>
                  {currentPath == "/cart" ? (
                    <li>
                      <Link to="/user-panel">Home</Link>
                    </li>
                  ) : (
                    <>
                      <li>
                        <ScrollLink
                          className="scroll-link"
                          to="my-orders"
                          smooth={true}
                          spy={true}
                          duration={500}
                          offset={-70}
                        >
                          My Orders
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="scroll-link"
                          to="menu"
                          smooth={true}
                          spy={true}
                          duration={500}
                          offset={-70}
                        >
                          Menu
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="scroll-link"
                          to="footer"
                          smooth={true}
                          spy={true}
                          duration={500}
                          offset={-70}
                        >
                          Contact
                        </ScrollLink>
                      </li>
                    </>
                  )}
                  <li className="btn-hide">
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <button
                      className="btn-book-a-table logout btn-hide mt-3"
                      onClick={() => auth.logOut()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <ScrollLink
                      className="scroll-link"
                      to="hero"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-70}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scroll-link"
                      to="about"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-70}
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scroll-link"
                      to="menu"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-70}
                    >
                      Menu
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scroll-link"
                      to="footer"
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-70}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              )}
            </nav>
          </div>
          {auth.isAuthenticated ? (
            <div>
              <Link to="/cart" className="btn-book-a-table btn-show">
                <i class="bi bi-basket2-fill"></i>
              </Link>
              <button
                className="btn-book-a-table logout btn-show"
                onClick={() => auth.logOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-book-a-table">
              Login
            </Link>
          )}
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </>
  );
}
