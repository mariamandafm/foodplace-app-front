import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import { Navigate } from "react-router-dom";

export function Header() {
  const auth = useAuth();

  return (
    <>
      {auth.isAuthenticated && location.pathname == "/" ? <Navigate to="/user-panel" /> : null}
      
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-start justify-content-between">
          <div class="d-flex">
            <a
              href="index.html"
              class="logo d-flex align-items-center me-auto me-lg-0"
            >
              <h1>
                FoodPlace<span>.</span>
              </h1>
            </a>

            <nav id="navbar" class="navbar">
              {auth.isAuthenticated ? (
                <ul>
                  <li>
                    <a href="#my-orders">My Orders</a>
                  </li>
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                  <li>
                    <a href="#footer">Contact</a>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <a href="#hero">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                  <li>
                    <a href="#footer">Contact</a>
                  </li>
                </ul>
              )}
            </nav>
          </div>
          {auth.isAuthenticated ? (
            <div>
              <Link to="/cart" className="btn-book-a-table"><i class="bi bi-basket2-fill"></i></Link>
            <button 
              className="btn-book-a-table logout"
              onClick= {() => auth.logOut()}
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
