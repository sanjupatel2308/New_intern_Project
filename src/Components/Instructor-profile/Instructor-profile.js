import ScrollToTop from "../../ScrollToTop"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"

export default function InstructorProfile() {
    return <>
    <Nav/>
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Instructor Profile</h1>
      <nav className="breadcrumbs">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">Instructor Profile</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* End Page Title */}
  {/* Instructor Profile Section */}
  <section id="instructor-profile" className="instructor-profile section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="instructor-hero-banner"
            data-aos="zoom-out"
            data-aos-delay={200}
          >
            <div className="hero-background">
              <img
                src="assets/img/education/showcase-4.webp"
                alt="Background"
                className="img-fluid"
              />
              <div className="hero-overlay" />
            </div>
            <div className="hero-content">
              <div className="instructor-avatar">
                <img
                  src="assets/img/education/teacher-7.webp"
                  alt="Instructor"
                  className="img-fluid"
                />
                <div className="status-badge">
                  <i className="bi bi-patch-check-fill" />
                  <span>Verified</span>
                </div>
              </div>
              <div className="instructor-info">
                <h2>Prof. Alexandra Chen</h2>
                <p className="title">Machine Learning &amp; AI Specialist</p>
                <div className="credentials">
                  <span className="credential">Ph.D. MIT</span>
                  <span className="credential">10+ Years</span>
                  <span className="credential">15,247 Students</span>
                </div>
                <div className="rating-overview">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                  <span className="rating-text">
                    4.9 rating from 3,821 reviews
                  </span>
                </div>
                <div className="contact-actions">
                  <a href="#" className="btn-contact">
                    <i className="bi bi-envelope" />
                    Contact Instructor
                  </a>
                  <div className="social-media">
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-5 mt-4">
        <div className="col-lg-8">
          <div
            className="content-tabs"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <ul className="nav nav-tabs custom-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#instructor-profile-about"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-person" />
                  About
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#instructor-profile-experience"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-briefcase" />
                  Experience
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#instructor-profile-courses"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-book" />
                  Courses
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#instructor-profile-reviews"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-star" />
                  Reviews
                </button>
              </li>
            </ul>
            <div className="tab-content custom-tab-content">
              <div
                className="tab-pane fade show active"
                id="instructor-profile-about"
                role="tabpanel"
              >
                <div className="about-content">
                  <div className="bio-section">
                    <h4>Professional Biography</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit.
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </div>
                  <div className="expertise-grid">
                    <h4>Core Expertise</h4>
                    <div className="skills-grid">
                      <div className="skill-item">
                        <i className="bi bi-cpu" />
                        <span>Artificial Intelligence</span>
                      </div>
                      <div className="skill-item">
                        <i className="bi bi-diagram-3" />
                        <span>Neural Networks</span>
                      </div>
                      <div className="skill-item">
                        <i className="bi bi-graph-up" />
                        <span>Data Science</span>
                      </div>
                      <div className="skill-item">
                        <i className="bi bi-code-slash" />
                        <span>Python &amp; R</span>
                      </div>
                      <div className="skill-item">
                        <i className="bi bi-cloud" />
                        <span>Cloud Computing</span>
                      </div>
                      <div className="skill-item">
                        <i className="bi bi-robot" />
                        <span>Machine Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="instructor-profile-experience"
                role="tabpanel"
              >
                <div className="experience-grid">
                  <div className="experience-card">
                    <div className="timeline-marker">2019</div>
                    <div className="experience-details">
                      <h5>Lead AI Researcher</h5>
                      <p className="institution">TechForward Institute</p>
                      <p>
                        Similique sunt in culpa qui officia deserunt mollitia
                        animi, id est laborum et dolorum fuga. Et harum quidem
                        rerum facilis est et expedita distinctio.
                      </p>
                    </div>
                  </div>
                  <div className="experience-card">
                    <div className="timeline-marker">2016</div>
                    <div className="experience-details">
                      <h5>Senior Data Scientist</h5>
                      <p className="institution">InnovateLabs Corp</p>
                      <p>
                        Temporibus autem quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et molestiae non recusandae.
                      </p>
                    </div>
                  </div>
                  <div className="experience-card">
                    <div className="timeline-marker">2014</div>
                    <div className="experience-details">
                      <h5>Research Fellow</h5>
                      <p className="institution">MIT Computer Science Lab</p>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="instructor-profile-courses"
                role="tabpanel"
              >
                <div className="courses-grid">
                  <div className="course-item">
                    <div className="course-thumb">
                      <img
                        src="assets/img/education/courses-5.webp"
                        alt="Course"
                        className="img-fluid"
                      />
                      <div className="course-level">Advanced</div>
                    </div>
                    <div className="course-info">
                      <h5>Deep Learning Mastery</h5>
                      <div className="course-stats">
                        <span>
                          <i className="bi bi-people" /> 5,234 enrolled
                        </span>
                        <span>
                          <i className="bi bi-star-fill" /> 4.8
                        </span>
                      </div>
                      <p className="price">$249</p>
                    </div>
                  </div>
                  <div className="course-item">
                    <div className="course-thumb">
                      <img
                        src="assets/img/education/courses-9.webp"
                        alt="Course"
                        className="img-fluid"
                      />
                      <div className="course-level">Intermediate</div>
                    </div>
                    <div className="course-info">
                      <h5>AI Ethics &amp; Applications</h5>
                      <div className="course-stats">
                        <span>
                          <i className="bi bi-people" /> 3,567 enrolled
                        </span>
                        <span>
                          <i className="bi bi-star-fill" /> 4.9
                        </span>
                      </div>
                      <p className="price">$179</p>
                    </div>
                  </div>
                  <div className="course-item">
                    <div className="course-thumb">
                      <img
                        src="assets/img/education/courses-12.webp"
                        alt="Course"
                        className="img-fluid"
                      />
                      <div className="course-level">Beginner</div>
                    </div>
                    <div className="course-info">
                      <h5>Python for Data Analysis</h5>
                      <div className="course-stats">
                        <span>
                          <i className="bi bi-people" /> 8,912 enrolled
                        </span>
                        <span>
                          <i className="bi bi-star-fill" /> 4.7
                        </span>
                      </div>
                      <p className="price">$129</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="instructor-profile-reviews"
                role="tabpanel"
              >
                <div className="reviews-container">
                  <div className="review-card">
                    <div className="review-header">
                      <img
                        src="assets/img/person/person-f-12.webp"
                        alt="Student"
                        className="reviewer-avatar"
                      />
                      <div className="reviewer-info">
                        <h6>Sarah Williams</h6>
                        <p>Data Scientist at Amazon</p>
                        <div className="review-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      "Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollitia animi. The hands-on
                      approach and real-world projects made all the difference."
                    </p>
                  </div>
                  <div className="review-card">
                    <div className="review-header">
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt="Student"
                        className="reviewer-avatar"
                      />
                      <div className="reviewer-info">
                        <h6>David Martinez</h6>
                        <p>ML Engineer at Tesla</p>
                        <div className="review-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      "Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur. Professor
                      Chen's expertise is unmatched."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="sidebar-widgets"
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="stats-widget">
              <h4>Teaching Impact</h4>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bi bi-people" />
                  </div>
                  <div className="stat-content">
                    <h5>15,247</h5>
                    <p>Total Students</p>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bi bi-book" />
                  </div>
                  <div className="stat-content">
                    <h5>18</h5>
                    <p>Active Courses</p>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bi bi-award" />
                  </div>
                  <div className="stat-content">
                    <h5>94%</h5>
                    <p>Completion Rate</p>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bi bi-clock" />
                  </div>
                  <div className="stat-content">
                    <h5>10+</h5>
                    <p>Years Teaching</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="achievements-widget">
              <h4>Recognition &amp; Awards</h4>
              <div className="achievement-list">
                <div className="achievement-item">
                  <i className="bi bi-trophy" />
                  <div className="achievement-text">
                    <h6>Excellence in Teaching Award</h6>
                    <p>MIT Computer Science Department • 2022</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <i className="bi bi-patch-check" />
                  <div className="achievement-text">
                    <h6>AI Research Grant</h6>
                    <p>National Science Foundation • 2021</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <i className="bi bi-mortarboard" />
                  <div className="achievement-text">
                    <h6>Outstanding Educator Recognition</h6>
                    <p>IEEE Computer Society • 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-widget">
              <h4>Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="bi bi-envelope" />
                  <span>alexandra.chen@university.edu</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone" />
                  <span>+1 (555) 789-0123</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-geo-alt" />
                  <span>Room 304, Computer Science Building</span>
                </div>
              </div>
              <div className="office-hours">
                <h6>Office Hours</h6>
                <p>
                  Tuesday &amp; Thursday
                  <br />
                  2:00 PM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>

  <ScrollToTop />
</>



}