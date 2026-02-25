import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {  deleteDoc, doc, updateDoc } from "firebase/firestore";


const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Search Filter Logic
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  const handleEdit = async (user) => {
    const newName = prompt("Enter new name:", user.name);
    const newAge = prompt("Enter new age:", user.age);

    if (!newName || !newAge) return;

    try {
      await updateDoc(doc(db, "users", user.id), {
        name: newName,
        age: Number(newAge),
      });

      setUsers(
        users.map((u) =>
          u.id === user.id ? { ...u, name: newName, age: Number(newAge) } : u
        )
      );
    } catch (error) {
      console.log("Update Error:", error);
    }
  };

  return (
    <div className="users-page" style={{ position: "absolute", top: "8%", left: "11.6%", backgroundColor: "white" }}>
      <h2>Users List</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="users-grid">
        {filteredUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;