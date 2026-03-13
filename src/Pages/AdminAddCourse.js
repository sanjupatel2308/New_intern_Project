import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Nav from "../Components/Nav/Nav";
import DashboardLayout from "../layout/DashboardLayout";


export default function AdminAddCourse(){

const [course,setCourse] = useState({

title:"",
category:"",
level:"",
price:"",
instructor:"",
description:"",
skills:"",
requirements:"",
curriculum:"",
duration:"",
language:"",
quizzes:"",
assignments:"",
previewVideo:""

})



const [image,setImage] = useState(null)

const handleChange = (e)=>{

setCourse({
...course,
[e.target.name]:e.target.value
})

}


const handleSubmit = async(e)=>{

e.preventDefault()

try{

let imageUrl=""

if(image){

const imageRef = ref(storage,"courses/"+image.name)

await uploadBytes(imageRef,image)

imageUrl = await getDownloadURL(imageRef)

}

await addDoc(collection(db,"courses"),{

title:course.title,
category:course.category,
level:course.level,
price:course.price,
instructor:course.instructor,
description:course.description,

skills:course.skills.split(","),
requirements:course.requirements.split(","),
curriculum:course.curriculum.split(","),

duration:course.duration,
language:course.language,
quizzes:course.quizzes,
assignments:course.assignments,

previewVideo:course.previewVideo,

image:imageUrl,

students:0,

createdAt:new Date()

})

alert("Course Added Successfully")

}catch(err){

console.log(err)

}

}

return <>
<Nav/>
<DashboardLayout/>


<div className="admin-course-container"  style={{position:"absolute", top:"7%", left:"25%" , width:"80%"}}>

<h2>Add New Course</h2>

<form onSubmit={handleSubmit} className="course-form">

<h3 className="form-section">Basic Information</h3>

<input
type="text"
name="title"
placeholder="Course Title"
onChange={handleChange}
/>

<input
type="text"
name="category"
placeholder="Category"
onChange={handleChange}
/>

<input
type="text"
name="level"
placeholder="Level"
onChange={handleChange}
/>

<input
type="number"
name="price"
placeholder="Price"
onChange={handleChange}
/>

<input
type="text"
name="instructor"
placeholder="Instructor Name"
onChange={handleChange}
/>

<textarea
name="description"
placeholder="Course Description"
onChange={handleChange}
/>

<h3 className="form-section">Course Details</h3>

<input
type="text"
name="skills"
placeholder="Skills (comma separated)"
onChange={handleChange}
/>

<input
type="text"
name="requirements"
placeholder="Requirements (comma separated)"
onChange={handleChange}
/>

<input
type="text"
name="curriculum"
placeholder="Curriculum topics (comma separated)"
onChange={handleChange}
/>

<input
type="text"
name="duration"
placeholder="Duration"
onChange={handleChange}
/>

<input
type="text"
name="language"
placeholder="Language"
onChange={handleChange}
/>

<input
type="number"
name="quizzes"
placeholder="Quizzes"
onChange={handleChange}
/>

<input
type="number"
name="assignments"
placeholder="Assignments"
onChange={handleChange}
/>

<input
type="text"
name="previewVideo"
placeholder="Preview Video URL"
onChange={handleChange}
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button type="submit" className="submit-btn">

Add Course

</button>

</form>




</div>

</>

}