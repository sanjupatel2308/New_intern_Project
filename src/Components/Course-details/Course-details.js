import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function CourseDetails() {

return(
<>
<Nav/>

<div className="page-title light-background">
<div className="container d-lg-flex justify-content-between align-items-center">
<h1 className="mb-2 mb-lg-0">Course Details</h1>
<nav className="breadcrumbs">
<ol>
<li><a href="/">Home</a></li>
<li className="current">Course Details</li>
</ol>
</nav>
</div>
</div>


<section id="course-details" className="course-details section">

<div className="container">

<div className="row">

<div className="col-lg-8">

{/* Course Hero */}

<div className="course-hero">

<div className="hero-content">

<div className="course-badge">
<span className="category">Web Development</span>
<span className="level">Intermediate</span>
</div>

<h1>Full Stack Web Development Masterclass</h1>

<p className="course-subtitle">
Learn how to build complete web applications using modern technologies like
HTML, CSS, JavaScript, React, Node.js and MongoDB. This course focuses on
hands-on learning so that you can create real world full stack projects.
</p>

<div className="instructor-card">

<img
src="assets/img/person/person-m-8.webp"
alt="Instructor"
className="instructor-image"
/>

<div className="instructor-details">

<h5>David Mitchell</h5>

<span>Senior Full Stack Developer</span>

<div className="instructor-rating">
<i className="bi bi-star-fill"/>
<i className="bi bi-star-fill"/>
<i className="bi bi-star-fill"/>
<i className="bi bi-star-fill"/>
<i className="bi bi-star-half"/>
<span>4.8 (1,247 reviews)</span>
</div>

</div>
</div>

</div>


<div className="hero-image">

<img
src="assets/img/education/courses-8.webp"
alt="Course Preview"
className="img-fluid"
/>

</div>

</div>



{/* Tabs */}

<div className="course-nav-tabs">

<ul className="nav nav-tabs">

<li className="nav-item">
<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#overview">
Overview
</button>
</li>

<li className="nav-item">
<button className="nav-link" data-bs-toggle="tab" data-bs-target="#curriculum">
Curriculum
</button>
</li>

<li className="nav-item">
<button className="nav-link" data-bs-toggle="tab" data-bs-target="#reviews">
Reviews
</button>
</li>

</ul>



<div className="tab-content">


{/* Overview */}

<div className="tab-pane fade show active" id="overview">

<div className="overview-section">

<h3>Course Description</h3>

<p>
Full Stack Web Development is one of the most in-demand skills in the
technology industry. In this course you will learn how to build
modern and scalable web applications from start to finish.
</p>

<p>
You will begin by learning the fundamentals of frontend development
using HTML, CSS and modern JavaScript. After that you will move into
React to build dynamic user interfaces.
</p>

<p>
In the backend section you will work with Node.js and Express to
create APIs, handle authentication and connect your applications
to databases like MongoDB. By the end of this course you will be able
to build and deploy complete full stack applications.
</p>

</div>



{/* Skills */}

<div className="skills-grid">

<h3>Skills You'll Gain</h3>

<div className="row">

<div className="col-md-6">
<div className="skill-item">
<div className="skill-icon"><i className="bi bi-code-slash"/></div>
<div className="skill-content">
<h5>Frontend Development</h5>
<p>HTML5, CSS3, JavaScript, React</p>
</div>
</div>
</div>

<div className="col-md-6">
<div className="skill-item">
<div className="skill-icon"><i className="bi bi-server"/></div>
<div className="skill-content">
<h5>Backend Development</h5>
<p>Node.js, Express, REST APIs</p>
</div>
</div>
</div>

<div className="col-md-6">
<div className="skill-item">
<div className="skill-icon"><i className="bi bi-database"/></div>
<div className="skill-content">
<h5>Database Management</h5>
<p>MongoDB, Data Modeling</p>
</div>
</div>
</div>

<div className="col-md-6">
<div className="skill-item">
<div className="skill-icon"><i className="bi bi-shield-check"/></div>
<div className="skill-content">
<h5>Security & Testing</h5>
<p>Authentication, JWT, Testing</p>
</div>
</div>
</div>

</div>
</div>



{/* Requirements */}

<div className="requirements-section">

<h3>Requirements</h3>

<ul className="requirements-list">

<li><i className="bi bi-check2"/> Basic understanding of HTML and CSS</li>

<li><i className="bi bi-check2"/> Basic knowledge of JavaScript</li>

<li><i className="bi bi-check2"/> Computer with internet connection</li>

<li><i className="bi bi-check2"/> Code editor such as VS Code</li>

<li><i className="bi bi-check2"/> Motivation to learn and build projects</li>

</ul>

</div>

</div>



{/* Curriculum */}

<div className="tab-pane fade" id="curriculum">

<h3>Course Curriculum</h3>

<ul>

<li>Introduction to Web Development</li>
<li>HTML and CSS Fundamentals</li>
<li>JavaScript Essentials</li>
<li>React Frontend Development</li>
<li>Node.js Backend Development</li>
<li>MongoDB Database Integration</li>
<li>User Authentication System</li>
<li>Building a Complete Full Stack Project</li>

</ul>

</div>



{/* Reviews */}

<div className="tab-pane fade" id="reviews">

<h3>Student Reviews</h3>

<p>Average Rating: 4.8 / 5</p>

<p>
Students appreciate the practical approach of this course and the
step by step explanation of full stack development concepts.
</p>

</div>

</div>

</div>

</div>



{/* Right Sidebar */}

<div className="col-lg-4">

<div className="enrollment-card">

<div className="card-header">

<div className="price-display">
<span className="current-price">$149</span>
<span className="original-price">$249</span>
<span className="discount">40% OFF</span>
</div>

<div className="enrollment-count">
<i className="bi bi-people"/>
<span>3,892 students enrolled</span>
</div>

</div>


<div className="card-body">

<div className="course-highlights">

<div className="highlight-item">
<i className="bi bi-trophy"/>
<span>Certificate Included</span>
</div>

<div className="highlight-item">
<i className="bi bi-clock-history"/>
<span>45 Hours Content</span>
</div>

<div className="highlight-item">
<i className="bi bi-download"/>
<span>Downloadable Resources</span>
</div>

<div className="highlight-item">
<i className="bi bi-infinity"/>
<span>Lifetime Access</span>
</div>

<div className="highlight-item">
<i className="bi bi-phone"/>
<span>Mobile Access</span>
</div>

</div>

<button className="btn btn-primary">Enroll Now</button>

</div>

</div>



<div className="course-details-card">

<h4>Course Details</h4>

<div className="detail-grid">

<div className="detail-row">
<span className="detail-label">Duration</span>
<span className="detail-value">14 Weeks</span>
</div>

<div className="detail-row">
<span className="detail-label">Skill Level</span>
<span className="detail-value">Intermediate</span>
</div>

<div className="detail-row">
<span className="detail-label">Language</span>
<span className="detail-value">English</span>
</div>

<div className="detail-row">
<span className="detail-label">Quizzes</span>
<span className="detail-value">20</span>
</div>

<div className="detail-row">
<span className="detail-label">Assignments</span>
<span className="detail-value">10</span>
</div>

</div>

</div>

</div>

</div>

</div>

</section>

<Footer/>
<ScrollToTop/>

</>
);
}