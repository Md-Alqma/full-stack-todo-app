import React, { useEffect, useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.log(form);

    const result = await login(form);
    console.log(result);

    setErrors(null);
    if (result.status === 200) {
      if (result.data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data.data));
        navigate("/");
        return;
      }

      if (result.data.status === 201) {
        setErrors(result.data.data);

        return;
      }

      if (result.data.status === 202) {
        toast(result.data.message);
        return;
      }
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row justify-content-center mt-4">
        <div className="col-lg-5 card border-primary mt-4">
          <div className="card-body">
            <h4 className="card-title">Login Now</h4>
            <div className="form-group">
              <label htmlFor="exampleInputEmail" className="form-label mt-4">
                Email or Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email or username"
                name="username"
                onChange={handleChange}
              />
              {errors?.username && (
                <small id="emailHelp" className="form-text text-muted">
                  {errors.username.msg}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail" className="form-label mt-4">
                Enter Password
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
              />
              {errors?.password && (
                <small id="emailHelp" className="form-text text-muted">
                  {errors.password.msg}
                </small>
              )}
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary mt-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    // <form class="w-25 mx-auto mt-4">
    //   <fieldset>
    //     <legend>Login Now</legend>
    //     {/* <div class="form-group row">
    //   <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    //   <div class="col-sm-10">
    //     <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com" />
    //   </div>
    // </div> */}
    //     <div class="form-group">
    //       <label for="exampleInputEmail1" class="form-label mt-4">
    //         Email or Username
    //       </label>
    //       <input
    //         type="email"
    //         class="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter email or username"
    //       />
    //       <small id="emailHelp" class="form-text text-muted">
    //         We'll never share your email with anyone else.
    //       </small>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleInputPassword1" class="form-label mt-4">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         placeholder="Enter Password"
    //       />
    //     </div>
    //     <button type="submit" class="btn btn-primary mt-4">
    //       Login
    //     </button>
    //   </fieldset>
    // </form>
  );
};

export default Login;
