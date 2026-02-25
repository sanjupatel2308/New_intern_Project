import DashboardLayout from "../../layout/DashboardLayout";
import UsersPage from "../../Pages/UsersPage";
import AddUser from "../AddUser";
import Nav from "../Nav/Nav";
import UserList from "../UserList";

import { useState } from "react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import ScrollToTop from "../../ScrollToTop";

export default function Enroll() {



  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  course: "",
  education: "",
  experience: "",
  motivation: "",
  schedule: "flexible",
  terms: false,
  newsletter: false,
});

const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};



  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.terms) {
    alert("Please accept Terms & Conditions");
    return;
  }

  try {
    setLoading(true);

    await addDoc(collection(db, "enrollments"), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    alert("Enrollment Successful ✅");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      education: "",
      experience: "",
      motivation: "",
      schedule: "flexible",
      terms: false,
      newsletter: false,
    });

  } catch (error) {
    console.log(error);
    alert("Something went wrong ❌");
  } finally {
    setLoading(false);
  }
};



  return <>
    <Nav />

    <div className="page-title light-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Enrollment</h1>
        <nav className="breadcrumbs">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="current">Enroll</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* End Page Title */}
    {/* Enroll Section */}
    <section id="enroll" className="enroll section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="enrollment-form-wrapper">
              <div
                className="enrollment-header text-center mb-5"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h2>Enroll in Your Dream Course</h2>
                <p>
                  Take the next step in your educational journey. Complete the
                  form below to secure your spot in our comprehensive online
                  learning program.
                </p>
              </div>
              <form
                className="enrollment-form"
                data-aos="fade-up"
                data-aos-delay={300}
                onSubmit={handleSubmit}
              >
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        required=""
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        required=""
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required=""
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="course" className="form-label">
                        Select Course *
                      </label>
                      <select
                        id="course"
                        name="course"
                        className="form-select"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a course...</option>
                        <option value="web-development">
                          Full Stack Web Development
                        </option>
                        <option value="data-science">
                          Data Science &amp; Analytics
                        </option>
                        <option value="digital-marketing">
                          Digital Marketing Mastery
                        </option>
                        <option value="ui-ux-design">
                          UI/UX Design Fundamentals
                        </option>
                        <option value="cybersecurity">
                          Cybersecurity Essentials
                        </option>
                        <option value="mobile-development">
                          Mobile App Development
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="education" className="form-label">
                        Education Level
                      </label>
                      <select
                        id="education"
                        name="education"
                        className="form-select"
                        value={formData.education}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your education level...</option>
                        <option value="high-school">High School</option>
                        <option value="associate">Associate Degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="experience" className="form-label">
                        Experience Level
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        className="form-select"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your experience...</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="motivation" className="form-label">
                        What motivates you to take this course?
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        className="form-control"
                        rows={4}
                        placeholder="Share your goals and what you hope to achieve..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">
                        Preferred Learning Schedule
                      </label>
                      <div className="schedule-options">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="schedule"
                            value="weekdays"
                            checked={formData.schedule === "weekdays"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="weekdays">
                            Weekdays (Monday - Friday)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="schedule"
                            value="weekends"
                            checked={formData.schedule === "weekends"}
                            onChange={handleChange}

                          />
                          <label className="form-check-label" htmlFor="weekends">
                            Weekends (Saturday - Sunday)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="schedule"
                            value="flexible"
                            checked={formData.schedule === "flexible"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="flexible">
                            Flexible (Self-paced)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-group">
                      <div className="agreement-section">
                        <div className="form-check">
                          {/* <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            name="terms"
                            required=""
                          /> */}

                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="terms">
                            I agree to the <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Policy</a> *
                          </label>
                        </div>
                        <div className="form-check">
                          {/* <input
                            className="form-check-input"
                            type="checkbox"
                            id="newsletter"
                            name="newsletter"
                          />
                          
                          */}

                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                          />

                          <label
                            className="form-check-label"
                            htmlFor="newsletter"
                          >
                            I would like to receive course updates and educational
                            content via email
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    {/* <button type="submit" className="btn btn-enroll">
                    <i className="bi bi-check-circle me-2" />
                    Enroll Now
                  </button> */}

                    <button type="submit" className="btn btn-enroll" disabled={loading}>
                      {loading ? "Submitting..." : "Enroll Now"}
                    </button>

                    <p className="enrollment-note mt-3">
                      <i className="bi bi-shield-check" />
                      Your information is secure and will never be shared with
                      third parties
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Form Column */}
          <div className="col-lg-4 d-none d-lg-block">
            <div
              className="enrollment-benefits"
              data-aos="fade-left"
              data-aos-delay={400}
            >
              <h3>Why Choose Our Courses?</h3>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-trophy" />
                </div>
                <div className="benefit-content">
                  <h4>Expert Instructors</h4>
                  <p>
                    Learn from industry professionals with years of real-world
                    experience
                  </p>
                </div>
              </div>
              {/* End Benefit Item */}
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-clock" />
                </div>
                <div className="benefit-content">
                  <h4>Flexible Learning</h4>
                  <p>
                    Study at your own pace with 24/7 access to course materials
                  </p>
                </div>
              </div>
              {/* End Benefit Item */}
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-award" />
                </div>
                <div className="benefit-content">
                  <h4>Certification</h4>
                  <p>
                    Earn industry-recognized certificates upon course completion
                  </p>
                </div>
              </div>
              {/* End Benefit Item */}
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-people" />
                </div>
                <div className="benefit-content">
                  <h4>Community Support</h4>
                  <p>
                    Connect with fellow students and get help when you need it
                  </p>
                </div>
              </div>
              {/* End Benefit Item */}
              <div className="enrollment-stats mt-4">
                <div className="stat-item">
                  <span className="stat-number">15,000+</span>
                  <span className="stat-label">Students Enrolled</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Completion Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.9/5</span>
                  <span className="stat-label">Average Rating</span>
                </div>
              </div>
              {/* End Stats */}
            </div>
          </div>
          {/* End Benefits Column */}
        </div>
      </div>
    </section>

    <ScrollToTop />
  </>
}