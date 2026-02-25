import { Link } from "react-router-dom";


export default function Footer(){
    return <>
 


<footer id="footer" className="footer accent-background">
  <div className="container footer-top">
    <div className="row gy-4">

      {/* Company Info */}
      <div className="col-lg-5 col-md-12 footer-about">
        <Link to="/" className="logo d-flex align-items-center">
          <span className="sitename">SDtech Solutions</span>
        </Link>

        <p>
          SDtech Solutions is a leading internship and training platform 
          established in 2018, providing practical industry-based learning 
          programs across India. We focus on skill development, live projects, 
          and career growth opportunities for students.
        </p>

        <div className="social-links d-flex mt-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>

      {/* Useful Links */}
      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/internships">Internships</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>

      {/* Internship Programs */}
      <div className="col-lg-2 col-6 footer-links">
        <h4>Internship Programs</h4>
        <ul>
          <li><Link to="/internships/web-development">Web Development</Link></li>
          <li><Link to="/internships/react">React Development</Link></li>
          <li><Link to="/internships/python">Python Programming</Link></li>
          <li><Link to="/internships/digital-marketing">Digital Marketing</Link></li>
          <li><Link to="/internships/ui-ux">UI/UX Design</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>

        <p>All Over India</p>

        <p className="mt-4">
          <strong>Phone:</strong> <span>+91 XXXXX XXXXX</span>
        </p>

        <p>
          <strong>Email:</strong> <span>info@sdtechsolutions.in</span>
        </p>

        <p>
          <strong>Website:</strong>{" "}
          <a href="https://www.sdtechsolutions.in" target="_blank" rel="noreferrer">
            www.sdtechsolutions.in
          </a>
        </p>
      </div>

    </div>
  </div>

  {/* Copyright */}
  <div className="container copyright text-center mt-4">
    <p>
      © {new Date().getFullYear()}{" "}
      <strong className="px-1 sitename">SDtech Solutions</strong> | 
      All Rights Reserved
    </p>
  </div>
</footer>

    </>
}