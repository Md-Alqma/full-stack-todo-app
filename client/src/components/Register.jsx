import React, { useState } from "react";
import { register } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, []);

  const [errors, setErrors] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.log(form);

    const result = await register(form);
    // console.log(result);
    if (result.status === 200) {
      if (result.data.status === 201) {
        setErrors(result.data.data);
        toast(result.data.message);
        return;
      }

      if (result.data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data.data));
        navigate("/");
        return;
      }

      if (result.data.status === 202) {
        toast(result.data.message);
        return;
      }
    } else {
      toast("Something went wrong, please try again");
    }
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-md-center mt-4">
          <div className="col-lg-5 card border-primary mb-3">
            <div className="card-header h4 text-center">
              Register an account
            </div>
            <div className="card-body">
              <div className="form-group">
                <label className="col-form-label mt-4">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Your Name"
                />
                {errors?.name && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.name.msg}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label className="col-form-label mt-4">Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Username"
                />
                {errors?.username && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.username.msg}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label className="col-form-label mt-4">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Your Email"
                />
                {errors?.email && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.email.msg}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label className="col-form-label mt-4">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Your Password"
                />
                {errors?.password && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.password.msg}
                  </small>
                )}
              </div>

              <div className="row justify-content-md-center  form-group mt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="col-sm-6 btn btn-outline-secondary center">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
