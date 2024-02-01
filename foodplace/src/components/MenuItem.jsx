import menu_item from "../assets/img/menu/menu-item-3.png";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export function MenuItem(props) {
  const navigate = useNavigate();
  const auth = useAuth();

  const addToCart = () => {
    api.post(
      "menu/orders/",
      {
        "order_items": [{"food_item": props.menuItem.id}]
      },
      {
        headers: {
          Authorization: `Token ${auth.token}`,
        },
      }
    ).then(() => {
      navigate("/cart");
    });
  };

  return (
    <>
      <div class="col-lg-4 menu-item text-center">
        <a href="../assets/img/menu/menu-item-1.png" class="glightbox">
          <img src={props.menuItem.image} class="menu-img img-fluid" alt="" />
        </a>
        <h4>{props.menuItem.name}</h4>
        {props.menuItem.description ? (
          <p class="ingredients">{props.menuItem.description}</p>
        ) : null}
        <p class="price">${props.menuItem.price}</p>
        <button className="btn-default mx-auto" onClick={() => addToCart()}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
