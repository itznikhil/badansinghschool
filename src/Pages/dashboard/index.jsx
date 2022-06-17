import React, { useContext } from "react";
import { useHookstate } from "@hookstate/core";
import { DASHBOARD_STATES } from "../../globalStore/globalStates";
import { ImportantLinks } from "./ImportantLinks";
import { NoticeBoard } from "./NoticeBoard";
import { Result } from "./Result";
import { Queries } from "./Queries";
import { ChangePassword } from "./ChangePassword";
import { AuthContext } from "../../auth/Auth";

export const Dashboard = () => {
  const { handleLogout } = useContext(AuthContext);
  const { dashboardState } = useHookstate(DASHBOARD_STATES);
  const sideBarTabs = [
    { id: 1, option: "impLink", labelText: "Important Links" },
    { id: 2, option: "notice", labelText: "Notice Board" },
    { id: 3, option: "result", labelText: "Result" },
    { id: 4, option: "query", labelText: "Queries" },
    { id: 5, option: "changepass", labelText: "Change Password" },
    { id: 6, option: "logout", labelText: "Logout" },
  ];

  const logout = () => {
    dashboardState.set("");
    localStorage.setItem("auth", null);
    handleLogout();
  };

  const showUI = () => {
    switch (dashboardState.get()) {
      case "impLink":
        return <ImportantLinks />;
      case "notice":
        return <NoticeBoard />;
      case "result":
        return <Result />;
      case "query":
        return <Queries />;
      case "changepass":
        return <ChangePassword />;
      case "logout":
        return logout();
      default:
        return <ImportantLinks />;
    }
  };

  return (
    <div className="d-lg-flex d-md-flex pb-5">
      <div className="col-lg-2 d-flex flex-column bg-secondary">
        {sideBarTabs.length !== 0 ? (
          sideBarTabs.map((item, index) => (
            <button
              key={index.toString()}
              type="button"
              className="btn btn-link text-decoration-none orange-bg-color text-white border border-light"
              onClick={() => dashboardState.set(item.option)}
            >
              {item.labelText}
            </button>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="col-lg-8 container">
        <div className="mt-5">{showUI()}</div>
      </div>
    </div>
  );
};
