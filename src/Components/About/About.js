import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function About() {
    return<>
    <>
    <Nav/>
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">About</h1>
      <nav className="breadcrumbs">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">About</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* End Page Title */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
          <img
            src="/assets/img/education/education-square-2.webp"
            alt="About Us"
            className="img-fluid rounded-4"
          />
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="about-content">
            <span className="subtitle">About Us</span>
            <h2>Building Skilled Professionals Through Modern Education</h2>
            <p>
              Our institute is dedicated to providing high-quality education and
              practical training in modern technologies. We focus on building
              real-world skills that help students grow in their careers and
              succeed in today's competitive industry. Our learning approach
              combines expert mentorship, hands-on projects, and industry
              focused curriculum to prepare students for real challenges.
            </p>
            <div className="stats-row">
              <div className="stats-item">
                <span className="count">10+</span>
                <p>Years of Experience</p>
              </div>
              <div className="stats-item">
                <span className="count">50+</span>
                <p>Professional Courses</p>
              </div>
              <div className="stats-item">
                <span className="count">10k+</span>
                <p>Successful Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 pt-4">
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="mission-card">
            <div className="icon-box">
              <i className="bi bi-bullseye" />
            </div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower students with practical knowledge,
              industry relevant skills, and innovative thinking so they can
              build successful careers in technology and business fields.
            </p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
          <div className="mission-card">
            <div className="icon-box">
              <i className="bi bi-eye" />
            </div>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a trusted learning platform that helps
              students transform their future through modern education,
              advanced technologies, and real-world experience.
            </p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
          <div className="mission-card">
            <div className="icon-box">
              <i className="bi bi-award" />
            </div>
            <h3>Our Values</h3>
            <p>
              We believe in quality education, continuous learning,
              transparency, innovation, and supporting every student in
              achieving their personal and professional goals.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5 pt-3 align-items-center">
        <div
          className="col-lg-6 order-lg-2"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="achievements">
            <span className="subtitle">Why Choose Us</span>
            <h2>Learn Skills That Shape Your Future</h2>
            <p>
              We provide practical learning with modern tools and technologies
              that help students build strong technical foundations and prepare
              for real career opportunities.
            </p>
            <ul className="achievements-list">
              <li>
                <i className="bi bi-check-circle-fill" /> Industry focused
                courses and curriculum
              </li>
              <li>
                <i className="bi bi-check-circle-fill" /> Experienced mentors
                and trainers
              </li>
              <li>
                <i className="bi bi-check-circle-fill" /> Hands-on projects and
                real-world practice
              </li>
              <li>
                <i className="bi bi-check-circle-fill" /> Career guidance and
                placement assistance
              </li>
              <li>
                <i className="bi bi-check-circle-fill" /> Flexible learning and
                modern online platform
              </li>
            </ul>
            <a href="#" className="btn-explore">
              Discover More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 order-lg-1"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="about-gallery">
            <div className="row g-3">
              <div className="col-6">
                <img
                  src="/assets/img/education/education-1.webp"
                  alt="Campus Life"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-6">
                <img
                  src="/assets/img/education/students-3.webp"
                  alt="Student Achievement"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-12 mt-3">
                <img
                  src="/assets/img/education/campus-8.webp"
                  alt="Our Campus"
                  className="img-fluid rounded-3"
                />
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

    
    </>
}