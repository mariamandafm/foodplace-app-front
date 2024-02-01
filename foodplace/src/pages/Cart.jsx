import { Header } from "../components/Header";
import { CartItem } from "../components/CartItem";
import { useEffect, useState } from "react";
import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";

export function Cart() {
  const auth = useAuth();
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
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      <Header />
      <section id="cart d-flex align-items-center">
        <div className="container pt-5">
          <div className="row">
            <div className="col-7">
              <h3 className="cart-title mb-5">Cart</h3>
              { 
                orderItems.map((item) => {
                  return <CartItem key={item.id} foodItem={item.food_item} />
                })
              }
            </div>
            <div className="col-5 section-bg">Data</div>
          </div>
        </div>
      </section>
    </>
  );
}
