import { useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../hooks/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SingUp() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();
  const auth = useAuth();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email && input.password && input.name) {
      api
        .post("user/create/", input, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          navigate("/login");
        })
        .catch((err) => {
          setErrors(JSON.parse(err.request.response));
        });
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
                id="floatingName"
                className="form-control"
                type="name"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <label for="floatingName">Name</label>
              <span className="error">
                {errors.name && <p className="Title">{errors.name}</p>}
              </span>
            </div>
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
              <span >
                {errors.email && <p className="error">{errors.email}</p>}
              </span>
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
              <span className="error">
                {errors.password && <p className="Title">{errors.password}</p>}
              </span>
            </div>
            <div className="text-center d-flex">
              <button type="submit" className="flex-fill">
                Sing Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
