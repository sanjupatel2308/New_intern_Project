import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function CourseDetails() {

    return<>
    
    <Nav/>
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Course Details</h1>
      <nav className="breadcrumbs">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">Course Details</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* End Page Title */}
  {/* Course Details Section */}
  <section id="course-details" className="course-details section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row">
        <div className="col-lg-8">
          {/* Course Hero */}
          <div className="course-hero" data-aos="fade-up" data-aos-delay={200}>
            <div className="hero-content">
              <div className="course-badge">
                <span className="category">Web Development</span>
                <span className="level">Advanced</span>
              </div>
              <h1>Full Stack JavaScript Mastery</h1>
              <p className="course-subtitle">
                Master modern web development with React, Node.js, and MongoDB
                in this comprehensive hands-on course
              </p>
              <div className="instructor-card">
                <img
                  src="assets/img/person/person-m-8.webp"
                  alt="Instructor"
                  className="instructor-image"
                />
                <div className="instructor-details">
                  <h5>Prof. Michael Rodriguez</h5>
                  <span>Senior Full Stack Developer</span>
                  <div className="instructor-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
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
              <div className="play-overlay">
                <button className="play-btn">
                  <i className="bi bi-play-fill" />
                </button>
                <span>Watch Preview</span>
              </div>
            </div>
          </div>
          {/* End Course Hero */}
          {/* Course Navigation Tabs */}
          <div
            className="course-nav-tabs"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <ul
              className="nav nav-tabs"
              id="course-detailsCourseTab"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="course-detailsoverview-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#course-detailsoverview"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-layout-text-window-reverse" />
                  Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="course-detailscurriculum-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#course-detailscurriculum"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-list-ul" />
                  Curriculum
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="course-detailsreviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#course-detailsreviews"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-star" />
                  Reviews
                </button>
              </li>
            </ul>
            <div className="tab-content" id="course-detailsCourseTabContent">
              {/* Overview Tab */}
              <div
                className="tab-pane fade show active"
                id="course-detailsoverview"
                role="tabpanel"
              >
                <div className="overview-section">
                  <h3>Course Description</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                </div>
                <div className="skills-grid">
                  <h3>Skills You'll Gain</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="skill-item">
                        <div className="skill-icon">
                          <i className="bi bi-code-slash" />
                        </div>
                        <div className="skill-content">
                          <h5>Frontend Development</h5>
                          <p>React, JavaScript ES6+, HTML5 &amp; CSS3</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="skill-item">
                        <div className="skill-icon">
                          <i className="bi bi-server" />
                        </div>
                        <div className="skill-content">
                          <h5>Backend Development</h5>
                          <p>Node.js, Express.js, RESTful APIs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="skill-item">
                        <div className="skill-icon">
                          <i className="bi bi-database" />
                        </div>
                        <div className="skill-content">
                          <h5>Database Management</h5>
                          <p>MongoDB, Mongoose, Data Modeling</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="skill-item">
                        <div className="skill-icon">
                          <i className="bi bi-shield-check" />
                        </div>
                        <div className="skill-content">
                          <h5>Security &amp; Testing</h5>
                          <p>Authentication, JWT, Unit Testing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="requirements-section">
                  <h3>Requirements</h3>
                  <ul className="requirements-list">
                    <li>
                      <i className="bi bi-check2" />
                      Basic understanding of HTML and CSS
                    </li>
                    <li>
                      <i className="bi bi-check2" />
                      Familiarity with JavaScript fundamentals
                    </li>
                    <li>
                      <i className="bi bi-check2" />
                      Computer with internet connection
                    </li>
                    <li>
                      <i className="bi bi-check2" />
                      Text editor or IDE installed
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Overview Tab */}
              {/* Curriculum Tab */}
              <div
                className="tab-pane fade"
                id="course-detailscurriculum"
                role="tabpanel"
              >
                <div className="curriculum-overview">
                  <div className="curriculum-stats">
                    <div className="stat">
                      <i className="bi bi-collection-play" />
                      <span>12 Sections</span>
                    </div>
                    <div className="stat">
                      <i className="bi bi-play-circle" />
                      <span>89 Lectures</span>
                    </div>
                    <div className="stat">
                      <i className="bi bi-clock" />
                      <span>45h 32m</span>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="curriculumAccordion">
                  <div className="accordion-item curriculum-module">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#module1"
                      >
                        <div className="module-info">
                          <span className="module-title">
                            JavaScript Fundamentals &amp; ES6+
                          </span>
                          <span className="module-meta">
                            8 lessons • 4h 15m
                          </span>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="module1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#curriculumAccordion"
                    >
                      <div className="accordion-body">
                        <div className="lessons-list">
                          <div className="lesson">
                            <i className="bi bi-play-circle" />
                            <span className="lesson-title">
                              Variables, Functions and Scope
                            </span>
                            <span className="lesson-time">28 min</span>
                          </div>
                          <div className="lesson">
                            <i className="bi bi-play-circle" />
                            <span className="lesson-title">
                              Arrow Functions and Destructuring
                            </span>
                            <span className="lesson-time">35 min</span>
                          </div>
                          <div className="lesson">
                            <i className="bi bi-file-earmark-text" />
                            <span className="lesson-title">
                              Promises and Async/Await
                            </span>
                            <span className="lesson-time">42 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item curriculum-module">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#module2"
                      >
                        <div className="module-info">
                          <span className="module-title">
                            React Development Deep Dive
                          </span>
                          <span className="module-meta">
                            12 lessons • 7h 45m
                          </span>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="module2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#curriculumAccordion"
                    >
                      <div className="accordion-body">
                        <div className="lessons-list">
                          <div className="lesson">
                            <i className="bi bi-play-circle" />
                            <span className="lesson-title">
                              Components and JSX Syntax
                            </span>
                            <span className="lesson-time">32 min</span>
                          </div>
                          <div className="lesson">
                            <i className="bi bi-play-circle" />
                            <span className="lesson-title">
                              State Management with Hooks
                            </span>
                            <span className="lesson-time">48 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item curriculum-module">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#module3"
                      >
                        <div className="module-info">
                          <span className="module-title">
                            Node.js &amp; Server Development
                          </span>
                          <span className="module-meta">
                            15 lessons • 8h 20m
                          </span>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="module3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#curriculumAccordion"
                    >
                      <div className="accordion-body">
                        <div className="lessons-list">
                          <div className="lesson">
                            <i className="bi bi-play-circle" />
                            <span className="lesson-title">
                              Express.js Server Setup
                            </span>
                            <span className="lesson-time">25 min</span>
                          </div>
                          <div className="lesson">
                            <i className="bi bi-file-earmark-text" />
                            <span className="lesson-title">
                              Building RESTful APIs
                            </span>
                            <span className="lesson-time">55 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Curriculum Tab */}
              {/* Reviews Tab */}
              <div
                className="tab-pane fade"
                id="course-detailsreviews"
                role="tabpanel"
              >
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <div className="overall-rating">
                      <div className="rating-number">4.8</div>
                      <div className="rating-stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </div>
                      <div className="rating-text">1,247 reviews</div>
                    </div>
                  </div>
                </div>
                <div className="reviews-list">
                  <div className="review-item">
                    <div className="reviewer-info">
                      <img
                        src="assets/img/person/person-f-12.webp"
                        alt="Reviewer"
                        className="reviewer-avatar"
                      />
                      <div className="reviewer-details">
                        <h6>Jessica Chen</h6>
                        <div className="review-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                      <span className="review-date">2 weeks ago</span>
                    </div>
                    <p className="review-text">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. The
                      instructor explains complex concepts very clearly.
                    </p>
                  </div>
                  <div className="review-item">
                    <div className="reviewer-info">
                      <img
                        src="assets/img/person/person-m-5.webp"
                        alt="Reviewer"
                        className="reviewer-avatar"
                      />
                      <div className="reviewer-details">
                        <h6>David Thompson</h6>
                        <div className="review-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star" />
                        </div>
                      </div>
                      <span className="review-date">1 month ago</span>
                    </div>
                    <p className="review-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Great practical examples and real-world projects that
                      helped me understand the concepts better.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Reviews Tab */}
            </div>
          </div>
          {/* End Course Navigation Tabs */}
        </div>
        <div className="col-lg-4">
          {/* Enrollment Card */}
          <div
            className="enrollment-card"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="card-header">
              <div className="price-display">
                <span className="current-price">$149</span>
                <span className="original-price">$249</span>
                <span className="discount">40% OFF</span>
              </div>
              <div className="enrollment-count">
                <i className="bi bi-people" />
                <span>3,892 students enrolled</span>
              </div>
            </div>
            <div className="card-body">
              <div className="course-highlights">
                <div className="highlight-item">
                  <i className="bi bi-trophy" />
                  <span>Certificate included</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-clock-history" />
                  <span>45 hours content</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-download" />
                  <span>Downloadable resources</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-infinity" />
                  <span>Lifetime access</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-phone" />
                  <span>Mobile access</span>
                </div>
              </div>
              <div className="action-buttons">
                <button className="btn-primary">Enroll Now</button>
                <button className="btn-secondary">Add to Wishlist</button>
              </div>
              <div className="guarantee">
                <i className="bi bi-shield-check" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
          {/* End Enrollment Card */}
          {/* Course Details */}
          <div
            className="course-details-card"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <h4>Course Details</h4>
            <div className="detail-grid">
              <div className="detail-row">
                <span className="detail-label">Duration</span>
                <span className="detail-value">16 weeks</span>
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
                <span className="detail-value">24</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Assignments</span>
                <span className="detail-value">8 projects</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Updated</span>
                <span className="detail-value">December 2024</span>
              </div>
            </div>
          </div>
          {/* End Course Details */}
          {/* Share Course */}
          <div
            className="share-course-card"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <h4>Share This Course</h4>
            <div className="social-links">
              <a href="#" className="social-link facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="social-link twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="social-link linkedin">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#" className="social-link email">
                <i className="bi bi-envelope" />
              </a>
            </div>
          </div>
          {/* End Share Course */}
        </div>
      </div>
    </div>
  </section>


<Footer/>
<ScrollToTop />
    </>
}