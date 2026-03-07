import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import Nav from "../Components/Nav/Nav";
import Sidebar from "../layout/Sidebar";
import DashboardLayout from "../layout/DashboardLayout";


const EnrollmentsList = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");
    const [courseFilter, setCourseFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [editData, setEditData] = useState(null);

    const itemsPerPage = 5;

    // 🔥 Fetch Data
    useEffect(() => {
        const q = query(
            collection(db, "enrollments"),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEnrollments(data);
            setFilteredData(data);
        });

        return () => unsubscribe();
    }, []);

    // 🔎 Search + Filter
    useEffect(() => {
        let data = [...enrollments];

        if (search) {
            data = data.filter(
                (item) =>
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (courseFilter) {
            data = data.filter((item) => item.course === courseFilter);
        }

        setFilteredData(data);
        setCurrentPage(1);
    }, [search, courseFilter, enrollments]);

    // 🗑 Delete
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete?")) {
            await deleteDoc(doc(db, "enrollments", id));
        }
    };

    // ✏ Edit Save
    const handleUpdate = async () => {
        await updateDoc(doc(db, "enrollments", editData.id), editData);
        setEditData(null);
    };

    // 📄 Pagination
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // 📥 Export CSV
    const exportCSV = () => {
        const headers = [
            "Name",
            "Email",
            "Course",
            "Phone",
            "Experience",
            "Education",
            "Schedule",
        ];

        const rows = filteredData.map((item) => [
            `${item.firstName} ${item.lastName}`,
            item.email,
            item.course,
            item.phone,
            item.experience,
            item.education,
            item.schedule,
        ]);

        let csvContent =
            "data:text/csv;charset=utf-8," +
            [headers, ...rows].map((e) => e.join(",")).join("\n");

        const link = document.createElement("a");
        link.href = encodeURI(csvContent);
        link.download = "enrollments.csv";
        link.click();
    };

    return <>
        <Nav/>
      <DashboardLayout/>
        <div className="container mt-4" style={{ position: "absolute", top: "15%", left: "15%", backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
            <h3>All Enrollments</h3>

            {/* 🔎 Search + Filter */}
            <div className="d-flex gap-2 mb-3">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="form-control"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="form-select"
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                >
                    <option value="">All Courses</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="ui-ux-design">UI/UX</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="mobile-development">Mobile Dev</option>
                </select>

                <button className="btn btn-success" onClick={exportCSV}>
                    Export CSV
                </button>
            </div>

            {/* 📊 Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Phone</th>
                            <th>Experience</th>
                            <th>Education</th>
                            <th>Schedule</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.course}</td>
                                <td>{item.phone}</td>
                                <td>{item.experience}</td>
                                <td>{item.education}</td>
                                <td>{item.schedule}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary me-2"
                                        onClick={() => setEditData(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 📄 Pagination Buttons */}
            <div className="d-flex justify-content-center mt-3">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm mx-1 ${currentPage === i + 1 ? "btn-dark" : "btn-outline-dark"
                            }`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* ✏ Edit Modal (Simple) */}
        {editData && (
  <div className="card p-4 mt-4 shadow">
    <h5 className="mb-3">Edit Enrollment</h5>

    <div className="row">
      <div className="col-md-6 mb-2">
        <input
          className="form-control"
          placeholder="First Name"
          value={editData.firstName}
          onChange={(e) =>
            setEditData({ ...editData, firstName: e.target.value })
          }
        />
      </div>

      <div className="col-md-6 mb-2">
        <input
          className="form-control"
          placeholder="Last Name"
          value={editData.lastName}
          onChange={(e) =>
            setEditData({ ...editData, lastName: e.target.value })
          }
        />
      </div>

      <div className="col-md-6 mb-2">
        <input
          className="form-control"
          placeholder="Email"
          value={editData.email}
          onChange={(e) =>
            setEditData({ ...editData, email: e.target.value })
          }
        />
      </div>

      <div className="col-md-6 mb-2">
        <input
          className="form-control"
          placeholder="Phone"
          value={editData.phone}
          onChange={(e) =>
            setEditData({ ...editData, phone: e.target.value })
          }
        />
      </div>

      <div className="col-md-6 mb-2">
        <select
          className="form-select"
          value={editData.course}
          onChange={(e) =>
            setEditData({ ...editData, course: e.target.value })
          }
        >
          <option value="web-development">Web Development</option>
          <option value="data-science">Data Science</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="ui-ux-design">UI/UX</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="mobile-development">Mobile Dev</option>
        </select>
      </div>

      <div className="col-md-6 mb-2">
        <select
          className="form-select"
          value={editData.education}
          onChange={(e) =>
            setEditData({ ...editData, education: e.target.value })
          }
        >
          <option value="high-school">High School</option>
          <option value="associate">Associate</option>
          <option value="bachelor">Bachelor</option>
          <option value="master">Master</option>
          <option value="doctorate">Doctorate</option>
        </select>
      </div>

      <div className="col-md-6 mb-2">
        <select
          className="form-select"
          value={editData.experience}
          onChange={(e) =>
            setEditData({ ...editData, experience: e.target.value })
          }
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <div className="col-12 mb-2">
        <textarea
          className="form-control"
          rows="3"
          value={editData.motivation}
          onChange={(e) =>
            setEditData({ ...editData, motivation: e.target.value })
          }
        />
      </div>

      <div className="col-12 mb-2">
        <label className="me-3">
          <input
            type="radio"
            value="weekdays"
            checked={editData.schedule === "weekdays"}
            onChange={(e) =>
              setEditData({ ...editData, schedule: e.target.value })
            }
          /> Weekdays
        </label>

        <label className="me-3">
          <input
            type="radio"
            value="weekends"
            checked={editData.schedule === "weekends"}
            onChange={(e) =>
              setEditData({ ...editData, schedule: e.target.value })
            }
          /> Weekends
        </label>

        <label>
          <input
            type="radio"
            value="flexible"
            checked={editData.schedule === "flexible"}
            onChange={(e) =>
              setEditData({ ...editData, schedule: e.target.value })
            }
          /> Flexible
        </label>
      </div>

      <div className="col-12 mb-2">
        <label className="me-3">
          <input
            type="checkbox"
            checked={editData.newsletter}
            onChange={(e) =>
              setEditData({ ...editData, newsletter: e.target.checked })
            }
          /> Newsletter
        </label>

        <label>
          <input
            type="checkbox"
            checked={editData.terms}
            onChange={(e) =>
              setEditData({ ...editData, terms: e.target.checked })
            }
          /> Terms Accepted
        </label>
      </div>
    </div>

    <div className="mt-3">
      <button className="btn btn-success me-2" onClick={handleUpdate}>
        Save Changes
      </button>
      <button className="btn btn-secondary" onClick={() => setEditData(null)}>
        Cancel
      </button>
    </div>
  </div>
)}
        </div>
</>
};

export default EnrollmentsList;