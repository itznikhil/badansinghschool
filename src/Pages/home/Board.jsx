import React, { useEffect } from "react";
import { client } from "../../axios";
import baseUrl from "../../baseUrl";
export const Board = ({ heading, children }) => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    client
      .get("/noticeboard")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card mt-5">
      <h5 className="card-header text-center orange-bg-color text-white">
        {heading}
      </h5>
      <div className="card-body">
        {data.map((item, index) => {
          return (
            <div key={index} className="card-text">
              <a
                href={baseUrl + "/uploads/" + item.file.split("\\")[1]}
                download="proposed_file_name"
              >
                {item.message}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
