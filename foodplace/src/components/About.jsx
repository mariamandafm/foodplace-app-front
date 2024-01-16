import about from "../assets/img/about.jpg";
import about2 from "../assets/img/about-2.jpg";

export function About() {
    const about_img = about;
  return (
    <>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>About Us</h2>
            <p>
              Learn More <span>About Us</span>
            </p>
          </div>

          <div class="row gy-4">
            <div
              class="col-lg-7 position-relative about-img"
              style={{ backgroundImage: `url(${about2})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
            </div>
            <div
              class="col-lg-5 d-flex align-items-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="content ps-0 ps-lg-5">
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
