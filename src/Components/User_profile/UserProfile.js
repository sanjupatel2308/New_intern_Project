import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const user = auth.currentUser;
    await updateDoc(doc(db, "users", user.uid), userData);
    setEditMode(false);
    alert("Profile Updated Successfully");
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!userData) return <p>No Data Found</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/120"
            alt="profile"
            className="rounded-circle mb-3"
          />
          <h3>{userData.firstName} {userData.lastName}</h3>
          <p className="text-muted">{userData.email}</p>
        </div>

        <div className="row">

          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input
              className="form-control"
              name="firstName"
              value={userData.firstName || ""}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              className="form-control"
              name="lastName"
              value={userData.lastName || ""}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Phone</label>
            <input
              className="form-control"
              name="phone"
              value={userData.phone || ""}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Education</label>
            <select
              className="form-select"
              name="education"
              value={userData.education || ""}
              onChange={handleChange}
              disabled={!editMode}
            >
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label>Bio</label>
            <textarea
              className="form-control"
              rows="3"
              name="bio"
              value={userData.bio || ""}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>

        </div>

        <div className="text-center mt-3">
          {!editMode ? (
            <button
              className="btn btn-primary"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                className="btn btn-success me-2"
                onClick={handleUpdate}
              >
                Save Changes
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default UserProfile;