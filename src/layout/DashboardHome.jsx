// import Nav from "../Components/Nav/Nav";
// import StatsCard from "../Components/StatsCard";
// import DashboardLayout from "./DashboardLayout";




// const DashboardHome = () => {
//   return <>
//     <Nav />
//   <DashboardLayout/>
//     <div className="stats-grid" style={{position:"absolute", top:"180px", left:"300px" , width:"80%"}}> 
//       <StatsCard title="Total Users" value="25" />
//       <StatsCard title="Active Users" value="18" />
//       <StatsCard title="New Today" value="3" />
//     </div>
//   </>
// };

// export default DashboardHome;



import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Nav from "../Components/Nav/Nav";
import StatsCard from "../Components/StatsCard";
import DashboardLayout from "./DashboardLayout";

const DashboardHome = () => {

  const [stats, setStats] = useState({
    users: 0,
    activeUsers: 0,
    newToday: 0,
    courses: 0,
    enrollments: 0
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {

      // USERS
      const usersSnapshot = await getDocs(collection(db, "users"));
      const users = usersSnapshot.docs.map(doc => doc.data());

      const totalUsers = users.length;

      const activeUsers = users.filter(user => user.status === "active").length;

      const today = new Date().toDateString();

      const newToday = users.filter(user => {
        if (!user.createdAt) return false;
        return new Date(user.createdAt.seconds * 1000).toDateString() === today;
      }).length;

      // COURSES
      const courseSnapshot = await getDocs(collection(db, "courses"));
      const totalCourses = courseSnapshot.size;

      // ENROLLMENTS
      const enrollSnapshot = await getDocs(collection(db, "enrollments"));
      const totalEnrollments = enrollSnapshot.size;

      setStats({
        users: totalUsers,
        activeUsers: activeUsers,
        newToday: newToday,
        courses: totalCourses,
        enrollments: totalEnrollments
      });

    } catch (error) {
      console.error("Dashboard fetch error:", error);
    }
  };

  return (
    <>
      <Nav />
      <DashboardLayout />

      <div
        className="stats-grid"
        style={{
          position: "absolute",
          top: "180px",
          left: "300px",
          width: "80%"
        }}
      >

        <StatsCard title="Total Users" value={stats.users} />

        <StatsCard title="Active Users" value={stats.activeUsers} />

        <StatsCard title="New Users Today" value={stats.newToday} />

        <StatsCard title="Total Courses" value={stats.courses} />

        <StatsCard title="Total Enrollments" value={stats.enrollments} />

      </div>
    </>
  );
};

export default DashboardHome;