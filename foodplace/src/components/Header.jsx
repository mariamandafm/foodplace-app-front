export function Header() {
  return (
    <>
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
            </nav>
          </div>

          <a class="btn-book-a-table" href="#book-a-table">
            Login
          </a>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </>
  );
}
