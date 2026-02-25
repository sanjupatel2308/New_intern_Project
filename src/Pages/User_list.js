import { useEffect, useState } from "react";
import AddUser from "../Components/AddUser";
import Nav from "../Components/Nav/Nav";

import DashboardLayout from "../layout/DashboardLayout";

import Sidebar from "../layout/Sidebar";
import UsersPage from "./UsersPage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import UserList from "../Components/UserList";

export default function AddUsers() {


   const [users, setUsers] = useState([]);
  
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
    return<>
    <Nav/>

    <DashboardLayout/>

    <Sidebar/>
    <UserList/>



    </>
}