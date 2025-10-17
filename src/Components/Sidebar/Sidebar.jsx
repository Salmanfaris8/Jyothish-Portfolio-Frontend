import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isadmincontact, isadmin }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Toggle button (only on small screens) */}
      <button
        style={{height: "60px"}}
        className="btn btn-dark d-md-none m-2"
        onClick={() => setOpen(!open)}
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`bg-black text-white p-3 ${
          open ? "d-block" : "d-none"
        } d-md-block`}
        style={{ width: "220px", minHeight: "100vh" }}
      >
        <h4 className="mb-4">Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to={"/admin"}
              className={`nav-link text-white ${isadmin ? "bg-dark" : ""}`}
              onClick={() => setOpen(false)} 
            >
              📂 Add Works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/admin-contacts"}
              className={`nav-link text-white ${isadmincontact ? "bg-dark" : ""}`}
              onClick={() => setOpen(false)}
            >
              📞 Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
