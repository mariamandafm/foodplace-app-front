import { CartItem } from "./CartItem";
import { useEffect, useState } from "react";
import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import { CartSummary } from "./CartSummary.jsx";
import { toast } from "react-toastify";

export function CartPage({ onButtonClick, setOrderInfo }) {
  const auth = useAuth();
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const fetchOrder = async () => {
    try {
      const response = await api.get("menu/orders/", {
        headers: {
          Authorization: `Token ${auth.token}`,
        },
      });
      setOrder(response.data);
      if (response.data.length > 0) {
        setOrderItems(response.data[0].order_items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const placeOrder = () => {
      setOrderInfo((prevData) => ({
        ...prevData,
        order: order[0],
      }));
      onButtonClick("addressPage")
  };
  
  return (
    <>
      {order.length > 0 ? (
        <div>
          <div className="row">
            <div className="col-12 col-md-8">
              <h5 className="cart-title mb-5">Cart</h5>
              {orderItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    foodItem={item.food_item}
                    quantity={item.quantity}
                    orderItemId={item.id}
                    fetchOrder={fetchOrder}
                  />
                );
              })}
            </div>
            <div className="col-12 col-md-4">
              <div className="section-bg p-3">
                <CartSummary order={order} />
                <div className="d-flex justify-content-end">
                  <button
                    className="btn-default"
                    onClick={() => placeOrder()}
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="cart-title mb-5 text-center">Cart is empty</h3>
      )}
    </>
  );
}
