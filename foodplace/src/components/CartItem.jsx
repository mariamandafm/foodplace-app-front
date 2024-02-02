import { useState } from "react";
import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

export function CartItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const auth = useAuth();
  const navigate = useNavigate();

  const deleteItem = () => {
    api.delete(`menu/order-items/${props.orderItemId}/`, {
      headers: {
        Authorization: `Token ${auth.token}`,
      },
    }).then(() => {
      navigate(0);
    }).catch((error) => {
      console.error("Error deleting item:", error);
    });
  }

  return (
    <>
      <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src={props.foodItem.image}
            class="img-fluid rounded-3"
            alt={props.foodItem.name}
          />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">{props.foodItem.type}</h6>
          <h6 class="text-black mb-0">{props.foodItem.name}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            class="btn btn-link"
            onClick={() => setQuantity(quantity - 1)}	
          >
            <i class="bi bi-dash"></i>
          </button>
          <span>{quantity}</span>

          <button
            class="btn btn-link"
            onClick={() => setQuantity(quantity + 1)}
          >
            <i class="bi bi-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 class="mb-0">$ {props.foodItem.price}</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <button 
            class="button-text-only"
            onClick={() => deleteItem()}
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <hr class="my-4"></hr>
    </>
  );
}
