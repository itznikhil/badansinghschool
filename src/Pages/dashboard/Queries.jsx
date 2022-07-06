import React, { useEffect } from "react";
import { client } from "../../axios";

export const Queries = () => {
  const [data, setData] = React.useState([]);

  const deleteQuery = (id) => {
    client
      .delete(`/queries/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch((err) => {
        getData();
        window.alert(err.response.data.message);
      });
  };

  const getData = () => {
    client
      .get("/queries", {
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

  return (
    <div className="container">
      <h3 className="text-center fw-bold orange-text-color">Queries</h3>
      <div className="table-responsive">
        <table className="table mt-3 table-bordered table-hover">
          <thead className="orange-bg-color">
            <tr>
              <th scope="col" className="text-white">
                Date
              </th>
              <th scope="col" className="text-white">
                Name
              </th>
              <th scope="col" className="text-white">
                Contact Number
              </th>
              <th scope="col" className="text-white">
                Message
              </th>
              <th scope="col" className="text-white">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr>
                  <td>{item.createdAt.slice(0, 10)}</td>
                  <td>{item.name}</td>
                  <td>{item.contactNumber}</td>
                  <td>{item.message}</td>
                  <td>
                    <button
                      type="button"
                      className="btn orange-bg-color text-white"
                      onClick={() => {
                        deleteQuery(item._id);
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
    </div>
  );
};
