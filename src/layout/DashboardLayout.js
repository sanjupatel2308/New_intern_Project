import { Outlet, Link, useNavigate, Route, Routes } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import DashboardHome from "./DashboardHome";
import UsersPage from "../Pages/UsersPage";
import AddUsers from "../Pages/Add_user";
import EnrollmentsList from "../Pages/EnrollmentsList";
import AdminAddCourse from "../Pages/AdminAddCourse";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  return (
    <div className="dashboard ">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/userlist">Users</Link>
        <Link to="/adduser">Add User</Link>
        <Link to="/admin/add-course">Add Course</Link>
        <Link to="/enrollments-list">Enrollments List</Link>
          {/* <Link to="/enrollments-list">Enrollments List</Link> */}
      </div>

      {/* Main */}
      <div className="main">
        <div className="topbar">
          <input placeholder="Search..." />
          <button onClick={handleLogout} className="bg-danger text-light p-1 ps-3 " style={{borderRadius:"10px" , border:"none", }}>Logout</button>
        </div>

        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/add-user" element={<AddUsers />} />
            <Route path="/enrollments-list" element={<EnrollmentsList />} />
            <Route path="/admin/add-course" element={<AdminAddCourse/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;