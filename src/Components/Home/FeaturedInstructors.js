export default function FeaturedInstructors() {
    return <>


  <section id="featured-instructors" className="featured-instructors section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Featured Instructors</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-2.webp"
                className="img-fluid"
                alt=""
              />
              <div className="overlay-content">
                <div className="rating-stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-half" />
                  <span>4.8</span>
                </div>
                <div className="course-count">
                  <i className="bi bi-play-circle" />
                  <span>18 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>Sarah Johnson</h5>
              <p className="specialty">Web Development</p>
              <p className="description">
                Nulla facilisi morbi tempus iaculis urna id volutpat lacus
                laoreet non curabitur gravida.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">2.1k</span>
                  <span className="label">Students</span>
                </div>
                <div className="stat">
                  <span className="number">4.8</span>
                  <span className="label">Rating</span>
                </div>
              </div>
              <div className="action-buttons">
                <a href="#" className="btn-view">
                  View Profile
                </a>
                <div className="social-links">
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-7.webp"
                className="img-fluid"
                alt=""
              />
              <div className="overlay-content">
                <div className="rating-stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>4.9</span>
                </div>
                <div className="course-count">
                  <i className="bi bi-play-circle" />
                  <span>24 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>Michael Chen</h5>
              <p className="specialty">Data Science</p>
              <p className="description">
                Suspendisse potenti nullam ac tortor vitae purus faucibus ornare
                suspendisse sed nisi.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">3.5k</span>
                  <span className="label">Students</span>
                </div>
                <div className="stat">
                  <span className="number">4.9</span>
                  <span className="label">Rating</span>
                </div>
              </div>
              <div className="action-buttons">
                <a href="#" className="btn-view">
                  View Profile
                </a>
                <div className="social-links">
                  <a href="#">
                    <i className="bi bi-github" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-4.webp"
                className="img-fluid"
                alt=""
              />
              <div className="overlay-content">
                <div className="rating-stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star" />
                  <span>4.6</span>
                </div>
                <div className="course-count">
                  <i className="bi bi-play-circle" />
                  <span>15 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>Amanda Rodriguez</h5>
              <p className="specialty">UX Design</p>
              <p className="description">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">1.8k</span>
                  <span className="label">Students</span>
                </div>
                <div className="stat">
                  <span className="number">4.6</span>
                  <span className="label">Rating</span>
                </div>
              </div>
              <div className="action-buttons">
                <a href="#" className="btn-view">
                  View Profile
                </a>
                <div className="social-links">
                  <a href="#">
                    <i className="bi bi-dribbble" />
                  </a>
                  <a href="#">
                    <i className="bi bi-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={350}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-9.webp"
                className="img-fluid"
                alt=""
              />
              <div className="overlay-content">
                <div className="rating-stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-half" />
                  <span>4.7</span>
                </div>
                <div className="course-count">
                  <i className="bi bi-play-circle" />
                  <span>21 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>David Thompson</h5>
              <p className="specialty">Digital Marketing</p>
              <p className="description">
                Vivamus magna justo lacinia eget consectetur sed convallis at
                tellus curabitur non nulla.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">2.9k</span>
                  <span className="label">Students</span>
                </div>
                <div className="stat">
                  <span className="number">4.7</span>
                  <span className="label">Rating</span>
                </div>
              </div>
              <div className="action-buttons">
                <a href="#" className="btn-view">
                  View Profile
                </a>
                <div className="social-links">
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>

}