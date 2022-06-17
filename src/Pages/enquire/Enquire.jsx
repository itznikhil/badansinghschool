import React, { useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../axios";

export const Enquire = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    number: "",
    message: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      inputVal.name === "" ||
      inputVal.number === "" ||
      inputVal.message === ""
    ) {
      window.alert("Please fill all the fields");
    } else {
      client
        .post("/queries", {
          name: inputVal.name,
          contactNumber: inputVal.number,
          message: inputVal.message,
        })
        .then((res) => {
          setInputVal({
            name: "",
            number: "",
            message: "",
          });
          window.alert(
            "Your query has been submitted successfully. We will get back to you soon."
          );
        })
        .catch((err) => {
          window.alert(err.response.data.message);
        });
    }
  };
  return (
    <div className="pb-5">
      <div className="container mt-5">
        <h3 className="text-center fw-bold orange-text-color">Contact Us</h3>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.940364125015!2d79.0339879!3d28.3001306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ab5932d2c4419%3A0xc772cb123e472b23!2sSHRI%20BADAN%20SINGH%20HS%20SCHOOL%20BAGRAIN!5e0!3m2!1sen!2sin!4v1654969902355!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: "350px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="fw-bold">
              Shri Badan Singh Higher Secondary School, Bagrain (Budaun)
            </p>
            <p>
              <span className="fw-bold">Address:</span>
              <br />
              <span>
                Village & Post - Bagrain, Development Block - Wazirganj, Tehsil
                - Bisauli, District - Budaun, Uttar Pradesh, PIN - 243725
              </span>
            </p>
            <p>
              <span className="fw-bold">School Code</span> - 271078
            </p>
            <p>
              <span className="fw-bold">UDISE Code</span> - 09191205605
            </p>
            <p>
              <span className="fw-bold">Email Address:</span>
              <br />
              <span>
                principalbadansingh1996@gmail.com <br />
                principal@badansinghschool.com
              </span>
            </p>
            <p>
              <span className="fw-bold">Contact Number:</span>
              <br />
              <span>+91-9084088146</span>
            </p>
          </div>
          <hr className="mb-4 orange-bg-color" />
        </div>
        <div className="mt-3">
          <h3 className="text-center fw-bold orange-text-color">
            Submit Your Query
          </h3>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="mb-3 row">
                <label
                  htmlFor="input1"
                  className="col-sm-4 col-form-label fw-bold"
                >
                  Your Name :
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    placeholder="Enter name ..."
                    name="name"
                    value={inputVal.name}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="mb-3 row">
                <label
                  htmlFor="input1"
                  className="col-sm-4 col-form-label fw-bold"
                >
                  Contact Number :
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    placeholder="Enter number ..."
                    name="number"
                    value={inputVal.number}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="mb-3 row">
                <label
                  htmlFor="messageBox"
                  className="col-sm-2 col-form-label fw-bold"
                >
                  Your Message
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="messageBox"
                    style={{ resize: "none" }}
                    rows={3}
                    name="message"
                    value={inputVal.message}
                    onChange={handleInput}
                    placeholder="Enter message ..."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <button
                    type="button"
                    className="btn orange-bg-color text-white"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  &nbsp;&nbsp;
                  <Link
                    to="/"
                    type="button"
                    className="btn orange-bg-color text-white"
                  >
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
