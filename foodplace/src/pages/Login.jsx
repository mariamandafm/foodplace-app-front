import { useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../hooks/AuthProvider";

export function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email && input.password) {
      auth.loginAction(input);
      console.log("Login")
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center book-a-table section-bg login py-5">
        <div class="logo me-auto me-lg-0 ">
          <h1 className="text-center">
            FoodPlace<span>.</span>
          </h1>
        </div>
        <div className="col-6">
          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="form-floating mb-3">
              <input
                id="floatingInput"
                className="form-control"
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                id="floatingPassword"
                className="form-control"
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="text-center d-flex">
              <button type="submit" className="flex-fill">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
