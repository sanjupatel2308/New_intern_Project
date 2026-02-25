import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

function Sidebar() {

  
  return (
    

    <div style={{
      width: "220px",
      height: "100vh",
      background: "#1e293b",
      color: "#fff",
      padding: "20px",
      position: "fixed"
      
    }}>
      <h2 className="text-light " style={{ marginBottom: "30px" }}>Admin Panel</h2>

      <p style={{ cursor: "pointer", marginBottom: "15px" }}>
        Dashboard
      </p>

   <p style={{ cursor: "pointer" }}>
       <Link to="/adduser" style={{ color: "#fff", textDecoration: "none" }}>
         Add User
        </Link>
      </p>
      <p style={{ cursor: "pointer" }}>
       <Link to="/userlist" style={{ color: "#fff", textDecoration: "none" }}>
          User List
        </Link>
      </p>
      <p style={{ cursor: "pointer" }}>
       <Link to="/enrollmentslist" style={{ color: "#fff", textDecoration: "none" }}>
          Enrollments List
        </Link>
      </p>
         
   
    </div>
  );
}

export default Sidebar;