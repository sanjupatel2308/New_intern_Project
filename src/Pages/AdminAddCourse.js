import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AdminAddCourse = () => {

  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    duration: "",
    price: "",
    instructor: "",
    image: ""
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "courses"), {
        ...course,
        price: Number(course.price),
        students: 0,
        rating: 0,
        createdAt: serverTimestamp()
      });

      alert("Course Added Successfully ✅");

      setCourse({
        title: "",
        description: "",
        category: "",
        level: "",
        duration: "",
        price: "",
        instructor: "",
        image: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error adding course ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Course</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="title"
          placeholder="Course Title"
          className="form-control mb-3"
          value={course.title}
          onChange={handleChange}
          required />

        <textarea name="description"
          placeholder="Course Description"
          className="form-control mb-3"
          value={course.description}
          onChange={handleChange}
          required />

        <select name="category"
          className="form-control mb-3"
          value={course.category}
          onChange={handleChange}
          required>
          <option value="">Select Category</option>
          <option>Programming</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>Business</option>
        </select>

        <select name="level"
          className="form-control mb-3"
          value={course.level}
          onChange={handleChange}
          required>
          <option value="">Select Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <input type="text" name="duration"
          placeholder="Duration (e.g. 10 hours)"
          className="form-control mb-3"
          value={course.duration}
          onChange={handleChange}
          required />

        <input type="number" name="price"
          placeholder="Price"
          className="form-control mb-3"
          value={course.price}
          onChange={handleChange}
          required />

        <input type="text" name="instructor"
          placeholder="Instructor Name"
          className="form-control mb-3"
          value={course.instructor}
          onChange={handleChange}
          required />

        <input type="text" name="image"
          placeholder="Image URL"
          className="form-control mb-3"
          value={course.image}
          onChange={handleChange} />

        <button className="btn btn-primary w-100">
          Add Course
        </button>

      </form>
    </div>
  );
};

export default AdminAddCourse;