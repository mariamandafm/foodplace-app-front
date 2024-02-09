import { api } from "../services/api.js";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AuthProvider";

export function MyOrders() {
  const [orders, setOrders] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    api
      .get("menu/orders/history/", {
        headers: {
          Authorization: `Token ${auth.token}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section id="my-orders" className="my-orders d-flex  section-bg">
        <div className="container pt-5">
          <div className="section-header">
            <h2>Last Orders</h2>
            <div className="row">
              {orders
                .filter((order) => order.status != "NOT_PLACED")
                .slice(0, 6)
                .map((order) => {
                  return (
                    <div className="col-lg-4">
                      <div className="card mt-3 border-0">
                        <div className="card-body text-start">
                          <div>
                            <div className="d-flex justify-content-between">
                              <h6 className="card-title ">
                                Order ID: {order.id}
                              </h6>
                              <span className="badge status-badge">
                                {order.status}
                              </span>
                            </div>

                            <span>Total: ${order.total_price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div class="row justify-content-between gy-5"></div>
        </div>
      </section>
    </>
  );
}
