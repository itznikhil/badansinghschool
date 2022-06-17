import React, { useState, useEffect } from "react";
import { client } from "../../axios";
import baseUrl from "../../baseUrl";

export const Result = () => {
  const [inputVal, setInputVal] = useState({
    year: "",
    class: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const [data, setData] = useState([]);

  const deleteResult = (id) => {
    client
      .delete(`/result/${id}`)
      .then((res) => {
        getData();
        window.alert(res.data.message);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  const getData = () => {
    client
      .get("/result")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    var formData = new FormData();
    var imagefile = document.querySelector("#file");
    formData.append("file", imagefile.files[0]);
    formData.append("year", inputVal.year);
    formData.append("class", inputVal.class);
    client
      .post("/result", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        getData();
        window.alert("Successfully added");
        setInputVal("");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <div className="container">
      <h3 className="text-center fw-bold orange-text-color">Result</h3>
      <div className="table-responsive">
        <table className="table mt-3 table-bordered table-hover">
          <thead className="orange-bg-color">
            <tr>
              <th scope="col" className="text-white">
                Date
              </th>
              <th scope="col" className="text-white">
                Year
              </th>
              <th scope="col" className="text-white">
                Class
              </th>
              <th scope="col" className="text-white">
                File
              </th>
              <th scope="col" className="text-white">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{item.createdAt.slice(0, 10)}</td>
                  <td>{item.year}</td>
                  <td>{item.class}</td>
                  <td>
                    <a
                      href={baseUrl + "/uploads/" + item.file.split("\\")[1]}
                      download="proposed_file_name"
                    >
                      {item.file.split("\\")[1]}
                    </a>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none orange-bg-color text-white border border-light"
                      onClick={() => deleteResult(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-2 row">
            <label htmlFor="input1" className="col-sm-4 col-form-label fw-bold">
              Year :
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="input1"
                placeholder="Enter Year ..."
                name="year"
                value={inputVal.year}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-2 row">
            <label htmlFor="input1" className="col-sm-5 col-form-label fw-bold">
              Class :
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="input1"
                placeholder="Enter class ..."
                name="class"
                value={inputVal.class}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="mb-3 row">
          <label htmlFor="formFile" className="col-sm-2 col-form-label fw-bold">
            Upload File
          </label>
          <div className="col-sm-10">
            <input className="form-control" type="file" id="file" />
          </div>
        </div>
        <div className="col-lg-12 col-sm-12 col-md-12 mt-4">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10 col-lg-3 d-grid">
              <button
                type="button"
                className="btn btn-block orange-bg-color text-white"
                onClick={handleSubmit}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
