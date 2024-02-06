
import { MenuItem } from "./MenuItem.jsx";
import { useEffect, useState } from "react";
import { api } from "../services/api.js";

export function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        api.get("menu/food-item/").then((response) => {
            setMenuItems(response.data);
        });
    }, [])

  return (
    <>
      <section id="menu" class="menu">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Our Menu</h2>
            <p>
              Check Our <span>Menu</span>
            </p>
          </div>

          <ul
            class="nav nav-tabs d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li class="nav-item">
              <a
                class="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#menu-starters"
              >
                <h4>Starters</h4>
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-breakfast"
              >
                <h4>Main Courses</h4>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-lunch"
              >
                <h4>Desserts</h4>
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-dinner"
              >
                <h4>Drinks</h4>
              </a>
            </li>
          </ul>

          <div class="tab-content" data-aos="fade-up" data-aos-delay="300">
            <div class="tab-pane fade active show" id="menu-starters">
              <div class="tab-header text-center">
                <p>Menu</p>
                <h3>Starters</h3>
              </div>

              <div class="row gy-5">
                {menuItems.map((menuItem) => {
                    return menuItem.available && menuItem.type == "STARTER"? (
                        <MenuItem menuItem={menuItem} />
                    ) : null;
                })}

              </div>
            </div>

            <div class="tab-pane fade" id="menu-breakfast">
              <div class="tab-header text-center">
                <p>Menu</p>
                <h3>Main Courses</h3>
              </div>

              <div class="row gy-5">
              {menuItems.map((menuItem) => {
                    return menuItem.available && menuItem.type == "MAIN_COURSE"? (
                        <MenuItem menuItem={menuItem} />
                    ) : null;
                })}
              </div>
            </div>

            <div class="tab-pane fade" id="menu-lunch">
              <div class="tab-header text-center">
                <p>Menu</p>
                <h3>Desserts</h3>
              </div>

              <div class="row gy-5">
              {menuItems.map((menuItem) => {
                    return menuItem.available && menuItem.type == "DESSERT"? (
                        <MenuItem menuItem={menuItem} />
                    ) : null;
                })}
              </div>
            </div>

            <div class="tab-pane fade" id="menu-dinner">
              <div class="tab-header text-center">
                <p>Menu</p>
                <h3>Drinks</h3>
              </div>

              <div class="row gy-5">
              {menuItems.map((menuItem) => {
                    return menuItem.available && menuItem.type == "DRINK"? (
                        <MenuItem menuItem={menuItem} />
                    ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
