import { set } from "lodash";
import { useState } from "react";

export function CartSummary(props) {
    const [updateSummary, setUpdateSummary] = useState(false);
  return (
    <>
      <h5>Summary</h5>
      <form>
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
      <p className="pt-3">Items: {props.order[0].total_items}</p>
      <hr />
      <p>Total: $ {props.order[0].total_price}</p>
    </>
  );
}
