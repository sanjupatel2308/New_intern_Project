import ScrollToTop from "../../ScrollToTop";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import FeaturedCourses from "./FeaturedCourses";
import FeaturedInstructors from "./FeaturedInstructors";
import Hero from "./Hero";
import ListCourses from "./ListCourses";

export default function Home(){
    return <>
        <Nav/>

        <main className="main">
  <Hero/>
<FeaturedCourses/>
    <ListCourses/>

{/* <FeaturedInstructors/> */}

<section id="testimonials" className="testimonials section">
  <div className="container section-title" data-aos="fade-up">
    <h2>What Our Interns Say</h2>
    <p>
      Hear from students who completed their internship at SDtech Solutions
      and successfully started their professional journey in the IT industry.
    </p>
  </div>

  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row">
      <div className="col-12">
        <div className="critic-reviews" data-aos="fade-up" data-aos-delay={300}>
          <div className="row">

            {/* Review 1 */}
            <div className="col-md-4">
              <div className="critic-review">
                <div className="review-quote">"</div>
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  The Full Stack Internship at SDtech Solutions helped me gain
                  real project experience. I built live applications and improved
                  my coding confidence significantly.
                </p>
                <div className="critic-info">
                  <div className="critic-name">Rahul Sharma</div>
                  <span>Full Stack Intern</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="col-md-4">
              <div className="critic-review">
                <div className="review-quote">"</div>
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-half" />
                </div>
                <p>
                  The mentors were very supportive and explained concepts clearly.
                  The Digital Marketing internship gave me hands-on campaign
                  experience and practical industry knowledge.
                </p>
                <div className="critic-info">
                  <div className="critic-name">Priya Verma</div>
                  <span>Digital Marketing Intern</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="col-md-4">
              <div className="critic-review">
                <div className="review-quote">"</div>
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  I completed the UI/UX internship and built real design case
                  studies for my portfolio. This experience helped me secure my
                  first job opportunity.
                </p>
                <div className="critic-info">
                  <div className="critic-name">Ankit Patel</div>
                  <span>UI/UX Design Intern</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* Overall Rating Section */}
    <div className="row">
      <div className="col-12 text-center" data-aos="fade-up">
        <div className="overall-rating">
          <div className="rating-number">4.8</div>
          <div className="rating-stars">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-half" />
          </div>
          <p>Based on 500+ Intern Reviews</p>
          <div className="rating-platforms">
            <span>Google Reviews</span>
            <span>LinkedIn Feedback</span>
            <span>Student Testimonials</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
  {/* /Testimonials Section */}
  {/* Recent Blog Posts Section */}
 <section id="recent-blog-posts" className="recent-blog-posts section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Latest Internship Insights</h2>
    <p>
      Explore career guidance, internship tips, and real-world learning 
      experiences from SDtech Solutions experts.
    </p>
  </div>
  {/* End Section Title */}

  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row gy-4">

      {/* Post 1 */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
        <div className="card">
          <div className="card-top d-flex align-items-center">
            <img
              src="assets/img/person/person-m-1.webp"
              alt="Author"
              className="rounded-circle me-2"
            />
            <span className="author-name">By SDtech Mentors</span>
            <span className="ms-auto likes">
              <i className="bi bi-heart" /> 120
            </span>
          </div>

          <div className="card-img-wrapper">
            <img src="assets/img/blog/blog-post-1.webp" alt="Internship Guide" />
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <a href="#">
                How to Choose the Right Internship for Your Career
              </a>
            </h5>
            <p className="card-text">
              Selecting the right internship can shape your future career. 
              Learn how to identify your strengths, choose the right domain, 
              and gain real industry exposure.
            </p>
          </div>
        </div>
      </div>

      {/* Post 2 */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
        <div className="card">
          <div className="card-top d-flex align-items-center">
            <img
              src="assets/img/person/person-f-2.webp"
              alt="Author"
              className="rounded-circle me-2"
            />
            <span className="author-name">By Training Team</span>
            <span className="ms-auto likes">
              <i className="bi bi-heart" /> 95
            </span>
          </div>

          <div className="card-img-wrapper">
            <img src="assets/img/blog/blog-post-2.webp" alt="Web Development Internship" />
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <a href="#">
                What You Learn in a Web Development Internship
              </a>
            </h5>
            <p className="card-text">
              From HTML, CSS, and JavaScript to React and backend basics — 
              discover the complete roadmap of practical skills you gain 
              during our internship program.
            </p>
          </div>
        </div>
      </div>

      {/* Post 3 */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
        <div className="card">
          <div className="card-top d-flex align-items-center">
            <img
              src="assets/img/person/person-m-3.webp"
              alt="Author"
              className="rounded-circle me-2"
            />
            <span className="author-name">By Career Experts</span>
            <span className="ms-auto likes">
              <i className="bi bi-heart" /> 110
            </span>
          </div>

          <div className="card-img-wrapper">
            <img src="assets/img/blog/blog-post-3.webp" alt="Career Growth" />
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <a href="#">
                How Internships Improve Job Opportunities
              </a>
            </h5>
            <p className="card-text">
              Practical experience, live projects, teamwork, and certification 
              — internships significantly increase your chances of getting 
              hired by top companies.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  {/* /Recent Blog Posts Section */}
  {/* Cta Section */}
<section id="cta" className="cta section light-background">
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row align-items-center">

      {/* Left Content */}
      <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
        <div className="cta-content">

          <h2>Start Your IT Career with Industry-Focused Internship Programs</h2>

          <p>
            Join SDtech Solutions and gain real-world experience through live
            projects, expert mentorship, and practical training designed to
            make you job-ready.
          </p>

          <div className="features-list">

            <div className="feature-item" data-aos="fade-up" data-aos-delay={300}>
              <i className="bi bi-check-circle-fill" />
              <span>Live Project Based Internship Training</span>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay={350}>
              <i className="bi bi-check-circle-fill" />
              <span>Industry Mentors with Real Experience</span>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay={400}>
              <i className="bi bi-check-circle-fill" />
              <span>Internship Certificate & Placement Guidance</span>
            </div>

            <div className="feature-item" data-aos="fade-up" data-aos-delay={450}>
              <i className="bi bi-check-circle-fill" />
              <span>Portfolio Development & Resume Building Support</span>
            </div>

          </div>

          <div className="cta-actions" data-aos="fade-up" data-aos-delay={500}>
            <a href="#featured-courses" className="btn btn-primary">
              View Internship Programs
            </a>
            <a href="#contact" className="btn btn-outline">
              Apply Now
            </a>
          </div>

          <div className="stats-row" data-aos="fade-up" data-aos-delay={400}>

            <div className="stat-item">
              <h3>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={500}
                  data-purecounter-duration={2}
                  className="purecounter"
                />
                +
              </h3>
              <p>Interns Trained</p>
            </div>

            <div className="stat-item">
              <h3>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={120}
                  data-purecounter-duration={2}
                  className="purecounter"
                />
                +
              </h3>
              <p>Live Projects Completed</p>
            </div>

            <div className="stat-item">
              <h3>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={95}
                  data-purecounter-duration={2}
                  className="purecounter"
                />
                %
              </h3>
              <p>Intern Satisfaction Rate</p>
            </div>

          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
        <div className="cta-image">
          <img
            src="assets/img/education/courses-4.webp"
            alt="Internship Program"
            className="img-fluid"
          />

          <div
            className="floating-element student-card"
            data-aos="zoom-in"
            data-aos-delay={600}
          >
            <div className="card-content">
              <i className="bi bi-person-check-fill" />
              <div className="text">
                <span className="number">120+</span>
                <span className="label">Active Interns</span>
              </div>
            </div>
          </div>

          <div
            className="floating-element course-card"
            data-aos="zoom-in"
            data-aos-delay={700}
          >
            <div className="card-content">
              <i className="bi bi-briefcase-fill" />
              <div className="text">
                <span className="number">50+</span>
                <span className="label">Industry Collaborations</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  {/* /Cta Section */}
</main>

<Footer/>
<ScrollToTop />
    
    </>
}