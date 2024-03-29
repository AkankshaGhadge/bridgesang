import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 className="m-0 text-primary"> <img src='images/WhatsApp Image 2024-02-05 at 13.17.08_32fd1549.jpg' alt='BridgeSang' height={"70px"}/> </h2>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="/" className="nav-item nav-link">Home</a>
        <a href="/about" className="nav-item nav-link active">About</a>
        <a href="/course" className="nav-item nav-link">Courses</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu fade-down m-0">
            <a href="team.html" className="dropdown-item">Our Team</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="404.html" className="dropdown-item">404 Page</a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">Contact</a>
      </div>
      <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></a>
    </div>
  </nav>
  {/* Navbar End */}
  
</div>

    </div>
  )
}

export default Header