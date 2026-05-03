import React from 'react';

const Usernavbar = () => {
  return (
    <>
      {/* Top background container agaar aapko chahiye */}
      <div className="container-fluid min-vh-40 d-flex flex-column justify-content-center px-0" style={{ backgroundColor: '#f0f4ff' }}>
        {/* Is div ke andar aap apna content daal sakte hain */}
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-0">
        <div className="container-fluid px-3">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-dark" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#0d6efd" />
              <polygon points="18,9 30,15 18,21 6,15" fill="white" />
              <path d="M24 18.5 V25 Q18 28 12 25 V18.5" fill="#90c4ff" />
              <line x1="30" y1="15" x2="30" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="30" cy="23" r="1.5" fill="white" />
            </svg>
            LearnHub
          </a>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="course.html">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="contact.html">Contact</a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="btn btn-outline-primary px-4" href="#">logIn</a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="btn btn-primary px-4 text-white" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Usernavbar;