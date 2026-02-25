
import './App.css';
import Home from './Components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import About from './Components/About/About';
import Terms from './Components/Terms/Terms';
import Course from './Components/Course-details/Course';
import Instructors from './Components/Instructor-profile/Instructors';
import Blog from './Components/Blog/Blog';
import InstructorProfile from './Components/Instructor-profile/Instructor-profile';
import Blog_Details from './Components/Blog/BlogDetails';
import Privacy from './Components/Privacy/Privacy';
import Contact from './Components/Contact/Contact';
import Enroll from './Components/Enroll/Enroll';
import CourseDetails from './Components/Course-details/Course-details';
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import Admin from './Components/Dashbord/admin';
import DashboardLayout from './layout/DashboardLayout';
import UsersPage from './Pages/UsersPage';
import LoginPage from './Pages/LoginPage';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import User_list from './Pages/User_list';
import AddUsers from './Pages/Add_user';
import Nav from './Components/Nav/Nav';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import EnrollmentsList from './Pages/EnrollmentsList';
import UserProfile from './Components/User_profile/UserProfile';
import ScrollToTop from './ScrollToTop';
import AdminAddCourse from './Pages/AdminAddCourse';





function App() {



  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const addUser = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: "Sanju",
        age: 25,
        createdAt: new Date()
      });
      alert("User Added Successfully ✅");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };



  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
   
    <Routes>

      
        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            user ? (
              <DashboardLayout>
                {/* <UsersPage /> */}
                <AddUsers/> 
               </DashboardLayout>
            ) : ( <div>
               <Nav/>
              <LoginPage />
              </div>
            )
          }
        />

 <Route path="/admin" element={!user ? <LoginPage /> : <Navigate to="/admin/dashboard" />} />
 

<Route
  path="/admin/add-course"
  element={
    user?.role === "admin"
      ? <AdminAddCourse />
      : <Navigate to="/login" />
  }
/>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/courses" element={<Course/>} />
    <Route path="/course-details" element={<CourseDetails/>} />
    <Route path="/instructors" element={<Instructors/>} />
    {/* <Route path="/pricing" element={<Pricing/>} /> */}
    <Route path="/blog" element={<Blog/>} />
    <Route path="/blog-details" element={<Blog_Details/>} />
    <Route path="/instructor-profile" element={<InstructorProfile/>} />
    <Route path="/privacy" element={<Privacy/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/enroll" element={<Enroll/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/userlist" element={<User_list/>} />
    <Route path="/adduser" element={<AddUsers/>} />
    <Route path="/enrollments-list" element={<EnrollmentsList/>} />
    




    {/* ------------------------------Database ----------------- */}

       
  </Routes>


  );
}

export default App;
