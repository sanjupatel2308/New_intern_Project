import { Link } from "react-router-dom";

export default function Nav(){
    return <>   
    <header id="header" className="header d-flex align-items-center sticky-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center">
    <Link to="/" className="logo d-flex align-items-center me-auto">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.webp" alt=""/> */}
      <h1 className="sitename">Learner</h1>
    </Link>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
       
          <Link to="/" className="active">
            Home
          </Link> 
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        {/* <li>
          <Link to="/pricing">Pricing</Link>
        </li> */}
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li className="dropdown">
          <a href="#">
            <span>More Pages</span>{" "}
            <i className="bi bi-chevron-down toggle-dropdown" />
          </a>
          <ul>
            <li>
              <Link to="/course-details">Course Details</Link>
            </li>
            <li>
              <Link to="/instructor-profile">Instructor Profile</Link>
            </li>
            <li>
              <Link to="/enroll">Enroll</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/login">Admin</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">
            <span>Dropdown</span>{" "}
            <i className="bi bi-chevron-down toggle-dropdown" />
          </a>
          <ul>
            <li>
              <a href="#">Dropdown 1</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Deep Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="#">Deep Dropdown 1</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 4</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Dropdown 2</a>
            </li>
            <li>
              <a href="#">Dropdown 3</a>
            </li>
            <li>
              <a href="#">Dropdown 4</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
   <Link to="/enroll" className="btn btn-primary ms-4">Enroll Now</Link>
   
  </div>
</header>

    
    </>
}