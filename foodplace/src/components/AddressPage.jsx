import { useEffect, useState } from "react";
import { api } from "../services/api.js";
import { useAuth } from "../hooks/AuthProvider";

export function AddressPage({ onButtonClick, setOrderInfo }) {
  const auth = useAuth();

  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({
    city: "",
    state: "",
    CEP: "",
    street: "",
    number: "",
    complement: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("user/address/", address, {
        headers: {
          Authorization: `Token ${auth.token}`,
        },
      })
      .then(() => {
        fetchAddresses();
        setAddress({
          city: "",
          state: "",
          CEP: "",
          street: "",
          number: "",
          complement: "",
        });
      })
      .catch((err) => {
        setErrors(JSON.parse(err.request.response));
      });
  };

  const fetchAddresses = () => {
    api
      .get("user/address/", {
        headers: {
          Authorization: `Token ${auth.token}`,
        },
      })
      .then((response) => {
        setAddresses(response.data);
      });
  };

  const chooseAddress = (choosedAddress) => {
    setOrderInfo((prevData) => ({
        ...prevData,
        address: choosedAddress,
    }));
    onButtonClick("confirmationPage");
  }

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 col-md-7 pe-4">
            <h5 className="cart-title">Delivery address</h5>
            {addresses.map((address) => {
              return (
                <button
                  class="btn-address card w-100 mb-3 text-start"
                  onClick={() => chooseAddress(address)}
                >
                  <div class="card-body">
                    <h6 class="card-title">
                      {address.city}-{address.state}
                    </h6>
                    <span class="card-text d-block">
                      {address.CEP}, {address.street}, {address.number}
                    </span>
                    <small>{address.complement}</small>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="col-12 col-md-5">
            <div className="section-bg p-3">
              <h6>New address</h6>
              <form onSubmit={handleSubmit}>
                <span>
                  {errors.city && (
                    <small className="error">{errors.city}</small>
                  )}
                </span>
                <div className="form-floating mb-1">
                  <input
                    id="floatingInput"
                    className="form-control"
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="City"
                  />
                  <label for="floatingInput">City</label>
                </div>
                <span>
                  {errors.state && (
                    <small className="error">{errors.state}</small>
                  )}
                </span>
                <div className="form-floating mb-1">
                  <input
                    id="floatingInput"
                    className="form-control"
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                  <label for="floatingInput">State</label>
                </div>

                <span>
                  {errors.CEP && <small className="error">{errors.CEP}</small>}
                </span>
                <div className="form-floating mb-1">
                  <input
                    id="floatingInput"
                    className="form-control"
                    type="number"
                    name="CEP"
                    value={address.CEP}
                    onChange={handleChange}
                    placeholder="CEP"
                  />
                  <label for="floatingInput">CEP</label>
                </div>

                <div className="d-flex mb-1">
                  <div>
                    <span>
                      {errors.street && (
                        <small className="error">{errors.street}</small>
                      )}
                    </span>
                    <div className="form-floating me-1">
                      <input
                        id="floatingInput"
                        className="form-control"
                        type="text"
                        name="street"
                        value={address.street}
                        onChange={handleChange}
                        placeholder="Street"
                      />
                      <label for="floatingInput">Street</label>
                    </div>
                  </div>
                  <div>
                    <span>
                        {errors.number && (
                        <small className="error">{errors.number}</small>
                        )}
                    </span>
                    <div className="form-floating ">
                        <input
                        id="floatingInput"
                        className="form-control"
                        type="number"
                        name="number"
                        value={address.number}
                        onChange={handleChange}
                        placeholder="Number"
                        />
                        <label for="floatingInput">Number</label>
                    </div>
                  </div>
                </div>
                <span>
                  {errors.complement && (
                    <small className="error">{errors.complement}</small>
                  )}
                </span>
                <div className="form-floating mb-1">
                  <input
                    id="floatingInput"
                    className="form-control"
                    type="text"
                    name="complement"
                    value={address.complement}
                    onChange={handleChange}
                    placeholder="Complement"
                  />
                  <label for="floatingInput">Complement</label>
                </div>
                <div className="text-end mt-2">
                  <button type="submit" className="flex-fill btn-default">
                    Create address
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
