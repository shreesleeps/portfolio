import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>HiDev</div>
      <div
        style={{
          width: "400px",
          paddingLeft: "135px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button>Home</button>
        </div>
        <div>
          <button>About</button>
        </div>
        <div>
          <button>Skills</button>
        </div>
        <div>
          <button>Projects</button>
        </div>
      </div>

      <div style={{ paddingLeft: "150px" }}>
        <button>Hire Me</button>
      </div>
    </div>
  );
}
export default Navbar;
