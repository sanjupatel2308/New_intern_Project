import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

export default function Course() {

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

    <Nav />


    <div className="page-title light-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Courses</h1>
        <nav className="breadcrumbs">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="current">Courses</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* End Page Title */}
    {/* Courses 2 Section */}
    <section id="courses-2" className="courses-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-3">
            <div
              className="course-filters"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <h4 className="filter-title">Filter Courses</h4>
              <div className="filter-group">
                <h5>Category</h5>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input type="checkbox" defaultChecked="" />
                    <span className="checkmark" />
                    All Categories
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Programming
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Design
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Business
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Marketing
                  </label>
                </div>
              </div>
              <div className="filter-group">
                <h5>Level</h5>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input type="checkbox" defaultChecked="" />
                    <span className="checkmark" />
                    All Levels
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Beginner
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Intermediate
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Advanced
                  </label>
                </div>
              </div>
              <div className="filter-group">
                <h5>Duration</h5>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Under 5 hours
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    5-20 hours
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    20+ hours
                  </label>
                </div>
              </div>
              <div className="filter-group">
                <h5>Price</h5>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Free
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    Paid
                  </label>
                </div>
              </div>
            </div>
            {/* End Course Filters */}
          </div>
          <div className="col-lg-9">
            <div
              className="courses-header"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <div className="search-box">
                <i className="bi bi-search" />
                <input type="text" placeholder="Search courses..."
                  onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="sort-dropdown">
                <select>
                  <option>Sort by: Most Popular</option>
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                </select>
              </div>
            </div>
            <div className="courses-grid" data-aos="fade-up" data-aos-delay={200}>
              <div className="row">
                {filteredCourses.map((course) => (
                  <div className="col-lg-6 col-md-6 mb-5" key={course.id}>
                    <div className="course-card">
                      <div className="course-image" >
                        <img
                          // src="assets/img/education/courses-3.webp"
                          // alt="Course"
                          className="img-fluid"
                          src={course.image}
                          alt={course.title}
                        />
                        {/* <div className="course-badge">Best Seller</div> */}
                        <div className="course-price">₹{course.price}</div>
                      </div>
                      <div className="course-content">
                        <div className="course-meta">
                          <span className="category">{course.category}</span>
                          <span className="level">{course.level}</span>
                        </div>
                        <h3>{course.title}</h3>
                        <p>
                          {course.description}
                        </p>
                        <div className="course-stats">
                          <div className="stat">
                            <i className="bi bi-clock" />
                            {/* <span>{course.duration || "Not specified"}</span> */}
                          </div>
                          <div className="stat">
                            <i className="bi bi-people" />
                            <span>{course.students || 0} students</span>
                          </div>
                          {/* <div className="rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                          <span>4.8 (89 reviews)</span>
                        </div> */}
                        </div>
                        {/* <div className="instructor-info">
                        <img
                          src="assets/img/person/person-m-3.webp"
                          alt="Instructor"
                          className="instructor-avatar"
                        />
                        <span className="instructor-name">
                          Dr. Marcus Thompson
                        </span>
                      </div> */}
                        <Link to={`/course/${course.id}`} className="btn-course">
                          Enroll Now
                        </Link>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div
              className="pagination-wrapper"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <nav aria-label="Courses pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      <i className="bi bi-chevron-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bi bi-chevron-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End Pagination */}
          </div>
        </div>
      </div>
    </section>



    <Footer />
    <ScrollToTop />
  </>
}