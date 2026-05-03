import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-0">
      <div className="container">
        <div className="row g-4">
          
          {/* Brand and Description */}
          <div className="col-lg-4 col-md-12">
            <div className="d-flex align-items-center gap-2 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="none" 
                stroke="#0d6efd" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="feather feather-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <h4 className="fw-bold mb-0">LearnHub</h4>
            </div>
            <p className="text-secondary lh-lg" style={{ maxWidth: '320px' }}>
              Empowering learners worldwide with quality education and expert instruction.
            </p>
          </div>

          {/* Courses Links */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="fw-bold mb-4">Courses</h6>
            <ul className="list-unstyled text-secondary d-grid gap-3">
              <li><a href="#" className="text-decoration-none text-secondary">Development</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Design</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Marketing</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Business</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="fw-bold mb-4">Company</h6>
            <ul className="list-unstyled text-secondary d-grid gap-3">
              <li><a href="#" className="text-decoration-none text-secondary">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4">Support</h6>
            <ul className="list-unstyled text-secondary d-grid gap-3">
              <li><a href="#" className="text-decoration-none text-secondary">Help Center</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Terms of Service</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">FAQ</a></li>
            </ul>
          </div>

        </div>

        <hr className="mt-5 mb-4 border-secondary opacity-25" />
        
        {/* Copyright Section */}
        <div className="text-center text-secondary small">
          <p className="mb-0">© 2026 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;