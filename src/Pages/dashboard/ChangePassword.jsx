import React, { useState } from "react";
import { client } from "../../axios";

export const ChangePassword = () => {
  const [inputVal, setInputVal] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (inputVal.newPassword !== inputVal.confirmPassword) {
      window.alert("Password not matched");
    } else {
      client
        .put(`/users/profile`, {
          password: inputVal.newPassword,
        })
        .then((res) => {
          setInputVal({
            newPassword: "",
            confirmPassword: "",
          });
          window.alert("Successfully changed");
        })
        .catch((err) => {
          window.alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="container">
      <h3 className="text-center fw-bold orange-text-color">Change Password</h3>
      <div className="col-lg-7 col-md-12 col-sm-12 mt-5">
        <div className="mb-3 row">
          <label htmlFor="input2" className="col-sm-4 col-form-label fw-bold">
            New Password :
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="input2"
              placeholder="New Password"
              name="newPassword"
              value={inputVal.newPassword}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="input3" className="col-sm-4 col-form-label fw-bold">
            Confirm Password :
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="input3"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={inputVal.confirmPassword}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-sm-12 col-md-12 mt-4">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-10 col-lg-3 d-grid">
            <button
              type="button"
              className="btn orange-bg-color text-white"
              onClick={handleSubmit}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
