import ScrollToTop from "../../ScrollToTop";

export default function ListCourses() {
    return <>
          <section id="course-categories" className="course-categories section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Course Categories</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row g-4">
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <a href="courses.html" className="category-card category-tech">
            <div className="category-icon">
              <i className="bi bi-laptop" />
            </div>
            <h5>Computer Science</h5>
            <span className="course-count">24 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={150}
        >
          <a href="courses.html" className="category-card category-business">
            <div className="category-icon">
              <i className="bi bi-briefcase" />
            </div>
            <h5>Business</h5>
            <span className="course-count">18 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <a href="courses.html" className="category-card category-design">
            <div className="category-icon">
              <i className="bi bi-palette" />
            </div>
            <h5>Design</h5>
            <span className="course-count">15 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={250}
        >
          <a href="courses.html" className="category-card category-health">
            <div className="category-icon">
              <i className="bi bi-heart-pulse" />
            </div>
            <h5>Health &amp; Medical</h5>
            <span className="course-count">12 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <a href="courses.html" className="category-card category-language">
            <div className="category-icon">
              <i className="bi bi-globe" />
            </div>
            <h5>Languages</h5>
            <span className="course-count">21 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={350}
        >
          <a href="courses.html" className="category-card category-science">
            <div className="category-icon">
              <i className="bi bi-diagram-3" />
            </div>
            <h5>Science</h5>
            <span className="course-count">16 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <a href="courses.html" className="category-card category-marketing">
            <div className="category-icon">
              <i className="bi bi-megaphone" />
            </div>
            <h5>Marketing</h5>
            <span className="course-count">19 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={150}
        >
          <a href="courses.html" className="category-card category-finance">
            <div className="category-icon">
              <i className="bi bi-graph-up-arrow" />
            </div>
            <h5>Finance</h5>
            <span className="course-count">14 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <a href="courses.html" className="category-card category-photography">
            <div className="category-icon">
              <i className="bi bi-camera" />
            </div>
            <h5>Photography</h5>
            <span className="course-count">11 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={250}
        >
          <a href="courses.html" className="category-card category-music">
            <div className="category-icon">
              <i className="bi bi-music-note-beamed" />
            </div>
            <h5>Music</h5>
            <span className="course-count">13 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <a href="courses.html" className="category-card category-engineering">
            <div className="category-icon">
              <i className="bi bi-gear" />
            </div>
            <h5>Engineering</h5>
            <span className="course-count">22 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={350}
        >
          <a href="courses.html" className="category-card category-law">
            <div className="category-icon">
              <i className="bi bi-journal-text" />
            </div>
            <h5>Law &amp; Legal</h5>
            <span className="course-count">9 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <a href="courses.html" className="category-card category-culinary">
            <div className="category-icon">
              <i className="bi bi-cup-hot" />
            </div>
            <h5>Culinary Arts</h5>
            <span className="course-count">8 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={150}
        >
          <a href="courses.html" className="category-card category-sports">
            <div className="category-icon">
              <i className="bi bi-trophy" />
            </div>
            <h5>Sports &amp; Fitness</h5>
            <span className="course-count">17 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <a href="courses.html" className="category-card category-writing">
            <div className="category-icon">
              <i className="bi bi-pen" />
            </div>
            <h5>Writing</h5>
            <span className="course-count">10 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={250}
        >
          <a href="courses.html" className="category-card category-psychology">
            <div className="category-icon">
              <i className="bi bi-body-text" />
            </div>
            <h5>Psychology</h5>
            <span className="course-count">12 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <a href="courses.html" className="category-card category-environment">
            <div className="category-icon">
              <i className="bi bi-tree" />
            </div>
            <h5>Environment</h5>
            <span className="course-count">7 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
        <div
          className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-delay={350}
        >
          <a
            href="courses.html"
            className="category-card category-communication"
          >
            <div className="category-icon">
              <i className="bi bi-chat-dots" />
            </div>
            <h5>Communication</h5>
            <span className="course-count">15 Courses</span>
          </a>
        </div>
        {/* End Category Item */}
      </div>
    </div>
  </section>

  <ScrollToTop />
  </>
}