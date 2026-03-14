import { useEffect, useState } from "react";


import {
collection,
getDocs,
deleteDoc,
doc,
updateDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import Nav from "../Nav/Nav";
import DashboardLayout from "../../layout/DashboardLayout";

const EditCourse = () => {

const [courses,setCourses] = useState([]);
const [editingCourse,setEditingCourse] = useState(null);
const [formData,setFormData] = useState({});
  const [filteredCourses, setFilteredCourses] = useState([])
const coursesRef = collection(db,"courses");


// fetch courses
const fetchCourses = async()=>{

const data = await getDocs(coursesRef);

setCourses(
data.docs.map((doc)=>({
...doc.data(),
id:doc.id
}))
);

};



useEffect(()=>{
fetchCourses();
},[]);


// delete course
const handleDelete = async(id)=>{

if(!window.confirm("Delete this course?")) return;

await deleteDoc(doc(db,"courses",id));

alert("Course Deleted");

fetchCourses();

};


// edit open
const handleEdit = (course)=>{

setEditingCourse(course.id);

setFormData(course);

};


// input change
const handleChange = (e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};
  const [search, setSearch] = useState("")

// update course
const handleUpdate = async(e)=>{

e.preventDefault();

await updateDoc(doc(db,"courses",editingCourse),formData);

alert("Course Updated");

setEditingCourse(null);

fetchCourses();

};


return <>
<Nav/>
<DashboardLayout/>

<div className="container mt-4" style={{position: "absolute" , top:"10%" , left:"20%"}}>


<h2>All Courses</h2>

<table className="table table-bordered">

<thead>
<tr>
<th>Title</th>
<th>Instructor</th>
<th>Category</th>
<th>Price</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{courses.map((course)=>(
<tr key={course.id}>

<td>{course.title}</td>
<td>{course.instructor}</td>
<td>{course.category}</td>
<td>{course.price}</td>

<td>

<button
className="btn btn-warning me-2"
onClick={()=>handleEdit(course)}
>
Edit
</button>

<button
className="btn btn-danger"
onClick={()=>handleDelete(course.id)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>


{/* EDIT FORM */}

{editingCourse && (

<form onSubmit={handleUpdate} className="mt-4">

<h3>Edit Course</h3>

<input className="form-control mb-2"
name="title"
value={formData.title || ""}
onChange={handleChange}
placeholder="Title"
/>

<input className="form-control mb-2"
name="category"
value={formData.category || ""}
onChange={handleChange}
placeholder="Category"
/>

<input className="form-control mb-2"
name="level"
value={formData.level || ""}
onChange={handleChange}
placeholder="Level"
/>

<input className="form-control mb-2"
name="price"
value={formData.price || ""}
onChange={handleChange}
placeholder="Price"
/>

<input className="form-control mb-2"
name="instructor"
value={formData.instructor || ""}
onChange={handleChange}
placeholder="Instructor"
/>

<textarea className="form-control mb-2"
name="description"
value={formData.description || ""}
onChange={handleChange}
placeholder="Description"
/>

<textarea className="form-control mb-2"
name="skills"
value={formData.skills || ""}
onChange={handleChange}
placeholder="Skills"
/>

<textarea className="form-control mb-2"
name="requirements"
value={formData.requirements || ""}
onChange={handleChange}
placeholder="Requirements"
/>

<textarea className="form-control mb-2"
name="curriculum"
value={formData.curriculum || ""}
onChange={handleChange}
placeholder="Curriculum"
/>

<input className="form-control mb-2"
name="duration"
value={formData.duration || ""}
onChange={handleChange}
placeholder="Duration"
/>

<input className="form-control mb-2"
name="language"
value={formData.language || ""}
onChange={handleChange}
placeholder="Language"
/>

<input className="form-control mb-2"
name="quizzes"
value={formData.quizzes || ""}
onChange={handleChange}
placeholder="Quizzes"
/>

<input className="form-control mb-2"
name="assignments"
value={formData.assignments || ""}
onChange={handleChange}
placeholder="Assignments"
/>

<input className="form-control mb-2"
name="previewVideo"
value={formData.previewVideo || ""}
onChange={handleChange}
placeholder="Preview Video"
/>
{formData.image && (
<img
src={formData.image}
style={{width:"200px",marginTop:"10px"}}
/>
)}

<input
type="text"
name="image"
value={formData.image || ""}
onChange={handleChange}
placeholder="Image URL"
/>
<br/>
<br/>

<button className="btn btn-success" >
Update Course
</button>

</form>

)}

</div>

</>

};

export default EditCourse;