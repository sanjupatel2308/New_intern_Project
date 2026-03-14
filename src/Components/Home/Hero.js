import { Link } from "react-router-dom";

export default function Hero() {
    return <>
 <section id="home-hero" className="courses-hero section light-background">
  <div className="hero-content">
    <div className="container">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-text">

            <h1>
              Launch Your Career with Industry-Focused Internship Programs
            </h1>

            <p>
              Since 2018, <strong>SDtech Solutions</strong> has been helping
              students and freshers gain real-world experience through
              practical internship programs. Work on live projects, build
              strong technical skills, and prepare yourself for a successful
              IT career.
            </p>

            {/* STATS */}
            <div className="hero-stats">

              <div className="stat-item">
                <span
                  className="number purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="500"
                  data-purecounter-duration="2"
                />
                <span className="label">Interns Trained</span>
              </div>

              <div className="stat-item">
                <span
                  className="number purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="120"
                  data-purecounter-duration="2"
                />
                <span className="label">Live Projects</span>
              </div>

              <div className="stat-item">
                <span
                  className="number purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="95"
                  data-purecounter-duration="2"
                />
                <span className="label">Placement Support %</span>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="hero-buttons">
              <Link to="/enroll" className="btn btn-primary">
                Apply for Internship
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            {/* FEATURES */}
            <div className="hero-features">

              <div className="feature">
                <i className="bi bi-laptop" />
                <span>Live Project Training</span>
              </div>

              <div className="feature">
                <i className="bi bi-person-workspace" />
                <span>Industry Mentorship</span>
              </div>

              <div className="feature">
                <i className="bi bi-award" />
                <span>Internship Certificate</span>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="hero-image">
            <div className="main-image">
              <img
                src="assets/img/education/courses-13.webp"
                alt="Internship Program"
                className="img-fluid"
              />
            </div>

            {/* FLOATING CARDS */}
            <div className="floating-cards">

              <div
                className="course-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card-icon">
                  <i className="bi bi-code-slash" />
                </div>
                <div className="card-content">
                  <h6>Web Development</h6>
                  <span>Frontend & Backend Training</span>
                </div>
              </div>

              <div
                className="course-card"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="card-icon">
                  <i className="bi bi-phone" />
                </div>
                <div className="card-content">
                  <h6>App Development</h6>
                  <span>Android & React Native</span>
                </div>
              </div>

              <div
                className="course-card"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="card-icon">
                  <i className="bi bi-graph-up" />
                </div>
                <div className="card-content">
                  <h6>Digital Marketing</h6>
                  <span>SEO & Performance Marketing</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Background Shapes */}
  <div className="hero-background">
    <div className="bg-shapes">
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
    </div>
  </div>

</section>

        </>
        }