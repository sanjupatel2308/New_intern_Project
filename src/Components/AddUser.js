import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "users"), {
        name: name,
        age: Number(age),
        createdAt: new Date()
      });

      alert("User Added Successfully ✅");

      setName("");
      setAge("");
      setLoading(false);
    } catch (error) {
      console.error("Error adding user:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", borderRadius: "8px", position: "absolute" , top: "30%", left: "60%", transform: "translate(-50%, -50%)" }}>
      <h2>Add New User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",  
            border: "none"
          }}
        >
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default AddUser;