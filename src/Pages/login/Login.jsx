import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Auth";
import { client } from "../../axios";
export const Login = () => {
  const { handleLogin, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    uname: "",
    pass: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, []);
  const [checkboxVal, setCheckboxVal] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const login = () => {
    const { uname, pass } = inputVal;
    if (uname !== "" && pass !== "") {
      client
        .post("/users/login", { email: uname, password: pass })

        .then((data) => {
          localStorage.setItem("auth", data.data.token);
          handleLogin();
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => {
          window.alert(err.response.data.message);
        });
    } else {
      alert("Inputs are Required");
    }
  };
  return (
    <div className="cover-bg">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-lg-5 col-md-6 bg-white p-4">
            <div className="row d-flex flex-column align-items-center pb-5">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src={require("../../assets/images/logo.jpg")}
                  width={100}
                  height={100}
                  alt="logo"
                />
              </div>
              <h5 className="orange-text-color fw-bold text-center">
                Shri Badan Singh Higher Secondary School
              </h5>
              <div className="mb-3 col-12 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  placeholder="Username"
                  name="uname"
                  value={inputVal.uname}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="input2"
                  placeholder="Password"
                  name="pass"
                  value={inputVal.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkboxVal}
                  id="checkbox"
                  onChange={(e) => setCheckboxVal(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="checkbox">
                  &nbsp;Remember Me
                </label>
              </div>
              <div className="col-8 mt-5 d-grid">
                <button
                  class="btn orange-bg-color text-white"
                  type="button"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
