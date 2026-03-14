import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";



export default function FeaturedCourses() {

  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [level, setLevel] = useState("All")

  useEffect(() => {

    const fetchCourses = async () => {

      const querySnapshot = await getDocs(collection(db, "courses"))

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setCourses(data)
      setFilteredCourses(data)

    }

    fetchCourses()

  }, [])


  useEffect(() => {

    let result = courses

    if (category !== "All") {
      result = result.filter(c => c.category === category)
    }

    if (level !== "All") {
      result = result.filter(c => c.level === level)
    }

    if (search !== "") {
      result = result.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFilteredCourses(result)

  }, [search, category, level, courses])

  return <>

    <section id="featured-courses" className="featured-courses section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Internship Programs</h2>
        <p>
          Explore our industry-focused internship programs designed to give you
          real-world experience, live project exposure, and career-ready skills.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">

          {/* 1 - Full Stack Internship */}
          {filteredCourses.slice(0, 6).map((course) => (
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200} key={course.id}>
              <div className="course-card">
                <div className="course-image">
                  <img src={course.image}
                    alt={course.title} className="img-fluid" />
                  {/* <div className="badge featured">Top Program</div> */}
                  <div className="price-badge">Internship</div>
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span className="level">{course.level}</span>
                    {/* <span className="duration">{course.duration || "Not specified"}</span> */}
                  </div>
                  <h3>
                    <a href="#">{course.title}</a>
                  </h3>
                  <p>
                    Get hands-on experience in HTML, CSS, JavaScript, React, Node.js
                    and MongoDB. Work on real client projects and build a strong
                    development portfolio.
                  </p>
                  {/* <div className="instructor">
              <img src={course.mentorImage} alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Industry Mentor Team</h6>
                <span>Senior Developers</span>
              </div>
            </div> */}
                  <div className="course-stats">
                    <div className="students">
                      <i className="bi bi-people-fill" />
                      <span>{course.students || 0} Interns</span>
                    </div>
                  </div>
                  <Link to={`/course/${course.id}`} className="btn-course">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

          ))}

        </div>

        <div className="more-courses text-center" data-aos="fade-up" data-aos-delay={500}>
          <Link to="/courses" className="btn-more">
            View All Internship Programs
          </Link>
        </div>

      </div>
    </section>
  </>
}