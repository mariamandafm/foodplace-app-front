import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function ConfirmationPage({ onButtonClick, orderInfo }) {
    const navigate = useNavigate();
    const auth = useAuth();
    
    const placeOrder = () => {
        api
          .patch(
            `menu/orders/${orderInfo.order.id}/`,
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
            toast.success("Order placed!", {
              position: "top-center",
              autoClose: 2000,
            });
            navigate("/");
          })
          .catch((error) => {
            toast.error("Erro when placing order. Try again!", {
              position: "top-center",
              autoClose: 2000,
            });
          });
      };
    return (
        <div className="row justify-content-md-center">
            <div className="col-auto">
                <h5>Review your order</h5>
                <span className="d-block">Items: {orderInfo.order.total_items}</span>
                
                {orderInfo.order.order_items.map((item) => {
                    return (
                        <div key={item.id} className="d-flex">
                            <span>{item.quantity}<i class="bi bi-x"></i>{item.food_item.name}</span>
                        </div>
                    );
                })}
                <span>Delivery to: </span>
                <span>{orderInfo.address.city}-{orderInfo.address.state},</span>
                <span> {orderInfo.address.street}, {orderInfo.address.number}</span>
                <hr />
                <p>Total: $ {orderInfo.order.total_price}</p>
                <div className="d-flex mt-5">
                    <button
                        className="btn-default flex-fill"
                        onClick={() => placeOrder()}
                    >
                        Place order
                    </button>
                </div>
            </div>
        </div>
    );
}