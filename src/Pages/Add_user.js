import AddUser from "../Components/AddUser";
import Nav from "../Components/Nav/Nav";
import UserList from "../Components/UserList";
import DashboardLayout from "../layout/DashboardLayout";

import Sidebar from "../layout/Sidebar";

export default function AddUsers() {
    return<>
    <Nav/>

    <DashboardLayout/>
    <Sidebar/>
  <AddUser/>



    </>
}