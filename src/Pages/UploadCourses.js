import courses from "../database/courses.json";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


const UploadCourses = () => {

const uploadCourses = async () => {

try {

for (let course of courses) {

await addDoc(collection(db,"courses"),course);

}

alert("All Courses Uploaded Successfully");

} catch(error){

console.log(error);

}

};

return (

<div style={{padding:"40px"}}>

<h2>Upload Courses</h2>

<button onClick={uploadCourses}>
Upload All Courses
</button>

</div>

);

};

export default UploadCourses;