import { useState } from "react";
import { Outlet, Link, useNavigate, Route, Routes } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import DashboardHome from "./DashboardHome";
import UsersPage from "../Pages/UsersPage";
import AddUsers from "../Pages/Add_user";
import EnrollmentsList from "../Pages/EnrollmentsList";

import AdminAddCourse from "../Pages/AdminAddCourse";
import EditCourse from "../Components/Course-details/EditCourse";
// future pages
// import EditCourse from "../Pages/EditCourse";
// import DeleteCourse from "../Pages/DeleteCourse";

const DashboardLayout = () => {

  const navigate = useNavigate();
  const [courseMenu,setCourseMenu] = useState(false)

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}

      <div className="sidebar">

        <h2 className="text-light">Admin Panel</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/userlist">Users</Link>
        <Link to="/adduser">Add User</Link>

        {/* Course Dropdown */}

        <div className="dropdown-menu-admin">

          <div 
          className="dropdown-title"
          onClick={()=>setCourseMenu(!courseMenu)}
          style={{cursor:"pointer"}}
          >
            Courses ▾  
          </div>
        

          {courseMenu && (

            <div className="dropdown-items">
               <br/>

              <Link to="/admin/add-course">Add Course</Link>
              <br/>

              <Link to="/admin/edit-course">
                Edit Course
              </Link>
               <br/>

              <Link to="/admin/delete-course">
                Delete Course
              </Link>

            </div>

          )}

        </div>

        <Link to="/enrollments-list">
          Enrollments List
        </Link>

        <button
        onClick={handleLogout}
        className="bg-danger text-light p-1 ps-3"
        style={{
        borderRadius:"10px",
        border:"none",
        position:"absolute",
        bottom:"5%",
        left:"10px",
        width:"10%"
        }}
        >

        Logout

        </button>

      </div>


      {/* Content */}

      <div className="content">

        <Routes>

          <Route path="/dashboard" element={<DashboardHome />} />

          <Route path="/userlist" element={<UsersPage />} />

          <Route path="/adduser" element={<AddUsers />} />

          <Route path="/enrollments-list" element={<EnrollmentsList />} />

          <Route path="/admin/add-course" element={<AdminAddCourse/>} />

          {/* future routes */}

          <Route path="/admin/edit-course" element={<EditCourse/>} />
          {/* <Route path="/admin/delete-course" element={<DeleteCourse/>} /> */}

        </Routes>

      </div>

    </div>
  );
};

export default DashboardLayout;