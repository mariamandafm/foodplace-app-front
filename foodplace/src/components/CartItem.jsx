import { useEffect, useState, useMemo, useCallback } from "react";
import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

export function CartItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const auth = useAuth();
  const navigate = useNavigate();

  const deleteItem = () => {
    api
      .delete(`menu/order-items/${props.orderItemId}/`, {
        headers: {
          Authorization: `Token ${auth.token}`,
        },
      })
      .then(() => {
        props.fetchOrder();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const updateQuantity = useCallback(
    debounce(newQuantity => {
      api
        .patch(
          `menu/order-items/${props.orderItemId}/`,
          {
            quantity: newQuantity,
          },
          {
            headers: {
              Authorization: `Token ${auth.token}`,
            },
          }
        )
        .then(() => {
          //navigate(0);
          props.fetchOrder()
          console.log("Quantity updated")
        })
        .catch((error) => {
          console.error("Error updating quantity:", error);
        });
    }, 1000), [])

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  }


  return (
    <>
      <div className="row mb-3 d-flex justify-content-between align-items-center">
        <div className="col-3 col-md-2 col-lg-2 col-xl-2">
          <img
            src={props.foodItem.image}
            className="img-fluid rounded-3"
            alt={props.foodItem.name}
          />
        </div>
        <div className="col-5 col-md-3 col-lg-3 col-xl-3 food-item-text">
          <h6 className="text-black mb-0">{props.foodItem.name}</h6>
        </div>
        <div className="col-4 col-md-3 col-lg-3 col-xl-2 d-flex food-item-text">
          <input 
            min="0" 
            value={quantity} 
            type="number" 
            className="form-control"
            onChange={handleQuantityChange} />
        </div>
        <div className="col-8 col-md-3 col-lg-2 col-xl-2 offset-lg-1 food-item-text">
          <h6 className="mb-0 food-item-text">$ {props.foodItem.price}</h6>
        </div>
        <div className="col-4 col-md-1 col-lg-1 col-xl-1 text-end food-item-text">
          <button className="button-text-only" onClick={() => deleteItem()}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <hr className="my-4"></hr>
    </>
  );
}
