export default function FeaturedCourses() {
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
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
        <div className="course-card">
          <div className="course-image">
            <img src="assets/img/education/students-9.webp" alt="Full Stack Internship" className="img-fluid" />
            <div className="badge featured">Top Program</div>
            <div className="price-badge">Internship</div>
          </div>
          <div className="course-content">
            <div className="course-meta">
              <span className="level">Beginner to Advanced</span>
              <span className="duration">8 Weeks</span>
            </div>
            <h3>
              <a href="#">Full Stack Web Development Internship</a>
            </h3>
            <p>
              Get hands-on experience in HTML, CSS, JavaScript, React, Node.js
              and MongoDB. Work on real client projects and build a strong
              development portfolio.
            </p>
            <div className="instructor">
              <img src="assets/img/person/person-m-5.webp" alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Industry Mentor Team</h6>
                <span>Senior Developers</span>
              </div>
            </div>
            <div className="course-stats">
              <div className="students">
                <i className="bi bi-people-fill" />
                <span>420 Interns</span>
              </div>
            </div>
            <a href="#" className="btn-course">Apply Now</a>
          </div>
        </div>
      </div>

      {/* 2 - Frontend Internship */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
        <div className="course-card">
          <div className="course-image">
            <img src="assets/img/education/campus-4.webp" alt="Frontend Internship" className="img-fluid" />
            <div className="badge new">New</div>
            <div className="price-badge">Internship</div>
          </div>
          <div className="course-content">
            <div className="course-meta">
              <span className="level">Intermediate</span>
              <span className="duration">6 Weeks</span>
            </div>
            <h3>
              <a href="#">Frontend Development Internship</a>
            </h3>
            <p>
              Learn modern frontend development using React JS, API integration,
              responsive design, and performance optimization techniques.
            </p>
            <div className="instructor">
              <img src="assets/img/person/person-f-3.webp" alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Frontend Mentor</h6>
                <span>React Specialist</span>
              </div>
            </div>
            <div className="course-stats">
              <div className="students">
                <i className="bi bi-people-fill" />
                <span>310 Interns</span>
              </div>
            </div>
            <a href="#" className="btn-course">Apply Now</a>
          </div>
        </div>
      </div>

      {/* 3 - Digital Marketing Internship */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
        <div className="course-card">
          <div className="course-image">
            <img src="assets/img/education/students-7.webp" alt="Digital Marketing Internship" className="img-fluid" />
            <div className="badge certificate">Certified</div>
            <div className="price-badge">Certified</div>
          </div>
          <div className="course-content">
            <div className="course-meta">
              <span className="level">Beginner</span>
              <span className="duration">4 Weeks</span>
            </div>
            <h3>
              <a href="#">Digital Marketing Internship Program</a>
            </h3>
            <p>
              Master SEO, social media marketing, paid ads, analytics, and
              content strategy through live campaign execution.
            </p>
            <div className="instructor">
              <img src="assets/img/person/person-f-7.webp" alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Marketing Mentor</h6>
                <span>SEO Expert</span>
              </div>
            </div>
            <div className="course-stats">
              <div className="students">
                <i className="bi bi-people-fill" />
                <span>530 Interns</span>
              </div>
            </div>
            <a href="#" className="btn-course">Apply Now</a>
          </div>
        </div>
      </div>

      {/* 4 - UI UX Internship */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
        <div className="course-card">
          <div className="course-image">
            <img src="assets/img/education/education-5.webp" alt="UI UX Internship" className="img-fluid" />
            <div className="badge popular">Popular</div>
            <div className="price-badge">Internship</div>
          </div>
          <div className="course-content">
            <div className="course-meta">
              <span className="level">Beginner to Intermediate</span>
              <span className="duration">6 Weeks</span>
            </div>
            <h3>
              <a href="#">UI/UX Design Internship</a>
            </h3>
            <p>
              Learn wireframing, prototyping, Figma tools, user research and
              build real-world design case studies.
            </p>
            <div className="instructor">
              <img src="assets/img/person/person-f-12.webp" alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Design Mentor</h6>
                <span>UI/UX Specialist</span>
              </div>
            </div>
            <div className="course-stats">
              <div className="students">
                <i className="bi bi-people-fill" />
                <span>280 Interns</span>
              </div>
            </div>
            <a href="#" className="btn-course">Apply Now</a>
          </div>
        </div>
      </div>

      {/* 5 - Python Data Science */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
        <div className="course-card">
          <div className="course-image">
            <img src="assets/img/education/activities-3.webp" alt="Python Internship" className="img-fluid" />
            <div className="badge certificate">Certified</div>
            <div className="price-badge">Certified</div>
          </div>
          <div className="course-content">
            <div className="course-meta">
              <span className="level">Intermediate</span>
              <span className="duration">10 Weeks</span>
            </div>
            <h3>
              <a href="#">Python & Data Science Internship</a>
            </h3>
            <p>
              Gain practical knowledge in Python programming, data analysis,
              visualization, and machine learning fundamentals.
            </p>
            <div className="instructor">
              <img src="assets/img/person/person-m-8.webp" alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Data Science Mentor</h6>
                <span>ML Specialist</span>
              </div>
            </div>
            <div className="course-stats">
              <div className="students">
                <i className="bi bi-people-fill" />
                <span>365 Interns</span>
              </div>
            </div>
            <a href="#" className="btn-course">Apply Now</a>
          </div>
        </div>
      </div>

      {/* 6 - Android Internship */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
        <div className="course-card">
          <div className="course-image">
            <img src="assets/img/education/teacher-6.webp" alt="Android Internship" className="img-fluid" />
            <div className="badge new">Trending</div>
            <div className="price-badge">Internship</div>
          </div>
          <div className="course-content">
            <div className="course-meta">
              <span className="level">Beginner</span>
              <span className="duration">5 Weeks</span>
            </div>
            <h3>
              <a href="#">Android App Development Internship</a>
            </h3>
            <p>
              Build real mobile applications using Java/Kotlin and Firebase.
              Deploy your apps and understand industry-level architecture.
            </p>
            <div className="instructor">
              <img src="assets/img/person/person-m-11.webp" alt="Mentor" className="instructor-img" />
              <div className="instructor-info">
                <h6>Mobile App Mentor</h6>
                <span>Android Developer</span>
              </div>
            </div>
            <div className="course-stats">
              <div className="students">
                <i className="bi bi-people-fill" />
                <span>250 Interns</span>
              </div>
            </div>
            <a href="#" className="btn-course">Apply Now</a>
          </div>
        </div>
      </div>

    </div>

    <div className="more-courses text-center" data-aos="fade-up" data-aos-delay={500}>
      <a href="#" className="btn-more">
        View All Internship Programs
      </a>
    </div>

  </div>
</section>
    </>
    }