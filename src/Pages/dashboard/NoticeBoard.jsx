import React, { useState, useEffect } from "react";
import { client } from "../../axios";
import baseUrl from "../../baseUrl";

export const NoticeBoard = () => {
  const [inputVal, setInputVal] = useState("");

  const [data, setData] = useState([]);
  const deleteNoticeBoard = (id) => {
    client
      .delete(`/noticeboard/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
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
      .get("/noticeboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
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
    var imagefile = document.querySelector("#formFile");
    formData.append("file", imagefile.files[0]);
    formData.append("message", inputVal);
    client
      .post("/noticeboard", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,

          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        window.alert("Successfully added");
        getData();
        setInputVal("");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <div className="container">
      <h3 className="text-center fw-bold orange-text-color">Notice Board</h3>
      <div className="table-responsive">
        <table className="table mt-3 table-bordered table-hover">
          <thead className="orange-bg-color">
            <tr>
              <th scope="col" className="text-white">
                Date
              </th>
              <th scope="col" className="text-white">
                Notice Message
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
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.createdAt.slice(0, 10)}</td>
                  <td>{item.message}</td>
                  <td>
                    <a
                      href={baseUrl + "/uploads/" + item.file.split("/")[1]}
                      download="proposed_file_name"
                    >
                      {item.file.split("/")[1]}
                    </a>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn orange-bg-color text-white"
                      onClick={() => {
                        deleteNoticeBoard(item._id);
                      }}
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
      <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
        <div className="mb-3 row">
          <label htmlFor="input1" className="col-sm-2 col-form-label fw-bold">
            Message
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="input1"
              placeholder="Maximum 30 characters allowed"
              maxLength={30}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="formFile" className="col-sm-2 col-form-label fw-bold">
            Upload File
          </label>
          <div className="col-sm-10">
            <input className="form-control" type="file" id="formFile" />
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
