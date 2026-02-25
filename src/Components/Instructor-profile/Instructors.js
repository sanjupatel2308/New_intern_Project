import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function Instructors () {
    return <>   
    <Nav/>
       
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Instructors</h1>
      <nav className="breadcrumbs">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">Instructors</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* End Page Title */}
  {/* Instructors Section */}
  <section id="instructors" className="instructors section">
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
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-6.webp"
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
                  <span>5.0</span>
                </div>
                <div className="course-count">
                  <i className="bi bi-play-circle" />
                  <span>12 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>Lisa Williams</h5>
              <p className="specialty">Business Analytics</p>
              <p className="description">
                Mauris blandit aliquet elit eget tincidunt nibh pulvinar a proin
                gravida hendrerit lectus.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">4.2k</span>
                  <span className="label">Students</span>
                </div>
                <div className="stat">
                  <span className="number">5.0</span>
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
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={450}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-1.webp"
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
                  <span>4.5</span>
                </div>
                <div className="course-count">
                  <i className="bi bi-play-circle" />
                  <span>16 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>James Anderson</h5>
              <p className="specialty">Machine Learning</p>
              <p className="description">
                Donec rutrum congue leo eget malesuada vestibulum ac diam sit
                amet quam vehicula elementum.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">3.1k</span>
                  <span className="label">Students</span>
                </div>
                <div className="stat">
                  <span className="number">4.5</span>
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
          data-aos-delay={500}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-8.webp"
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
                  <span>19 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>Rachel Martinez</h5>
              <p className="specialty">Cybersecurity</p>
              <p className="description">
                Sed porttitor lectus nibh cras ultricies ligula sed magna dictum
                porta lorem ipsum dolor.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">2.7k</span>
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
                    <i className="bi bi-shield-check" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={550}
        >
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src="assets/img/education/teacher-10.webp"
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
                  <span>22 Courses</span>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h5>Kevin Taylor</h5>
              <p className="specialty">Cloud Computing</p>
              <p className="description">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="number">3.8k</span>
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
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="bi bi-cloud" />
                  </a>
                </div>
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