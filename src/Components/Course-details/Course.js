import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function  Course() {
    return<>
    <Nav/>


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
              <input type="text" placeholder="Search courses..." />
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
              <div className="col-lg-6 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img
                      src="assets/img/education/courses-3.webp"
                      alt="Course"
                      className="img-fluid"
                    />
                    <div className="course-badge">Best Seller</div>
                    <div className="course-price">$89</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="category">Programming</span>
                      <span className="level">Intermediate</span>
                    </div>
                    <h3>Advanced JavaScript Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="course-stats">
                      <div className="stat">
                        <i className="bi bi-clock" />
                        <span>15 hours</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <span>1,245 students</span>
                      </div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <span>4.8 (89 reviews)</span>
                      </div>
                    </div>
                    <div className="instructor-info">
                      <img
                        src="assets/img/person/person-m-3.webp"
                        alt="Instructor"
                        className="instructor-avatar"
                      />
                      <span className="instructor-name">
                        Dr. Marcus Thompson
                      </span>
                    </div>
                    <a href="enroll.html" className="btn-course">
                      Enroll Now
                    </a>
                  </div>
                </div>
                {/* End Course Card */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img
                      src="assets/img/education/courses-7.webp"
                      alt="Course"
                      className="img-fluid"
                    />
                    <div className="course-badge badge-free">Free</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="category">Design</span>
                      <span className="level">Beginner</span>
                    </div>
                    <h3>UI/UX Design Fundamentals</h3>
                    <p>
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet.
                    </p>
                    <div className="course-stats">
                      <div className="stat">
                        <i className="bi bi-clock" />
                        <span>8 hours</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <span>2,891 students</span>
                      </div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <span>4.6 (156 reviews)</span>
                      </div>
                    </div>
                    <div className="instructor-info">
                      <img
                        src="assets/img/person/person-f-7.webp"
                        alt="Instructor"
                        className="instructor-avatar"
                      />
                      <span className="instructor-name">Sarah Johnson</span>
                    </div>
                    <a href="enroll.html" className="btn-course">
                      Start Free Course
                    </a>
                  </div>
                </div>
                {/* End Course Card */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img
                      src="assets/img/education/courses-12.webp"
                      alt="Course"
                      className="img-fluid"
                    />
                    <div className="course-badge badge-new">New</div>
                    <div className="course-price">$149</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="category">Business</span>
                      <span className="level">Beginner</span>
                    </div>
                    <h3>Digital Marketing Strategies</h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas vestibulum tortor.
                    </p>
                    <div className="course-stats">
                      <div className="stat">
                        <i className="bi bi-clock" />
                        <span>22 hours</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <span>678 students</span>
                      </div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <span>5.0 (42 reviews)</span>
                      </div>
                    </div>
                    <div className="instructor-info">
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt="Instructor"
                        className="instructor-avatar"
                      />
                      <span className="instructor-name">David Rodriguez</span>
                    </div>
                    <a href="enroll.html" className="btn-course">
                      Enroll Now
                    </a>
                  </div>
                </div>
                {/* End Course Card */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img
                      src="assets/img/education/courses-5.webp"
                      alt="Course"
                      className="img-fluid"
                    />
                    <div className="course-price">$199</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="category">Programming</span>
                      <span className="level">Advanced</span>
                    </div>
                    <h3>Machine Learning with Python</h3>
                    <p>
                      Donec rutrum congue leo eget malesuada. Cras ultricies
                      ligula sed magna dictum porta nulla facilisi morbi tempus.
                    </p>
                    <div className="course-stats">
                      <div className="stat">
                        <i className="bi bi-clock" />
                        <span>35 hours</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <span>534 students</span>
                      </div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <span>4.7 (73 reviews)</span>
                      </div>
                    </div>
                    <div className="instructor-info">
                      <img
                        src="assets/img/person/person-f-12.webp"
                        alt="Instructor"
                        className="instructor-avatar"
                      />
                      <span className="instructor-name">Prof. Anna Chen</span>
                    </div>
                    <a href="enroll.html" className="btn-course">
                      Enroll Now
                    </a>
                  </div>
                </div>
                {/* End Course Card */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img
                      src="assets/img/education/courses-9.webp"
                      alt="Course"
                      className="img-fluid"
                    />
                    <div className="course-badge">Popular</div>
                    <div className="course-price">$59</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="category">Marketing</span>
                      <span className="level">Intermediate</span>
                    </div>
                    <h3>Social Media Marketing</h3>
                    <p>
                      Sed porttitor lectus nibh vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia curae.
                    </p>
                    <div className="course-stats">
                      <div className="stat">
                        <i className="bi bi-clock" />
                        <span>12 hours</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <span>3,457 students</span>
                      </div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <span>4.5 (234 reviews)</span>
                      </div>
                    </div>
                    <div className="instructor-info">
                      <img
                        src="assets/img/person/person-m-5.webp"
                        alt="Instructor"
                        className="instructor-avatar"
                      />
                      <span className="instructor-name">Michael Davis</span>
                    </div>
                    <a href="enroll.html" className="btn-course">
                      Enroll Now
                    </a>
                  </div>
                </div>
                {/* End Course Card */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img
                      src="assets/img/education/courses-14.webp"
                      alt="Course"
                      className="img-fluid"
                    />
                    <div className="course-badge badge-certificate">
                      Certificate
                    </div>
                    <div className="course-price">$99</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="category">Design</span>
                      <span className="level">Intermediate</span>
                    </div>
                    <h3>Graphic Design Mastery</h3>
                    <p>
                      Curabitur aliquet quam id dui posuere blandit mauris
                      blandit aliquet elit eget tincidunt nibh pulvinar.
                    </p>
                    <div className="course-stats">
                      <div className="stat">
                        <i className="bi bi-clock" />
                        <span>18 hours</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <span>1,892 students</span>
                      </div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <span>4.9 (127 reviews)</span>
                      </div>
                    </div>
                    <div className="instructor-info">
                      <img
                        src="assets/img/person/person-f-9.webp"
                        alt="Instructor"
                        className="instructor-avatar"
                      />
                      <span className="instructor-name">Lisa Martinez</span>
                    </div>
                    <a href="enroll.html" className="btn-course">
                      Enroll Now
                    </a>
                  </div>
                </div>
                {/* End Course Card */}
              </div>
            </div>
          </div>
          {/* End Courses Grid */}
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