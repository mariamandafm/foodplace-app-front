import { Header } from "../components/Header";
import { CartItem } from "../components/CartItem";
import { useEffect, useState } from "react";
import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

export function Cart() {
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
    api
      .patch(
        `menu/orders/${order[0].id}/`,
        {
          status: "PENDING",
        },
        {
          headers: {
            Authorization: `Token ${auth.token}`,
          },
        }
      )
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <Header />
      <section id="cart d-flex align-items-center">
        <div className="container pt-5">
          
            {order.length > 0 ? (
              <div className="row">
                <div className="col-8">
                  <h3 className="cart-title mb-5">Cart</h3>
                  {orderItems.map((item) => {
                    return (
                      <CartItem
                        key={item.id}
                        foodItem={item.food_item}
                        quantity={item.quantity}
                        orderItemId={item.id}
                      />
                    );
                  })}
                </div>
                <div className="col-4">
                  <div className="section-bg p-3">
                    <h5>Summary</h5>
                    <form>
                      <div className="pt-2">
                        <label>Address:</label>
                        <select class="form-select">
                          <option value="">Home</option>
                        </select>
                      </div>
                      <div className="pt-3">
                        <label>Payment method:</label>
                        <select class="form-select">
                          <option value="CASH">Cash</option>
                          <option value="CARD" disabled>
                            Credit Card
                          </option>
                        </select>
                      </div>
                    </form>
                    <p className="pt-3">Items: {order[0].total_items}</p>
                    <hr />
                    <p>Total: $ {order[0].total_price}</p>
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
            ) : <h3 className="cart-title mb-5">Cart is empty</h3>}
        </div>
      </section>
    </>
  );
}
