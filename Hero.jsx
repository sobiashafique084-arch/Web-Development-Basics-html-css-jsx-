import React from 'react';

const Hero = () => {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <div className="container text-center py-5">
        <h1 className="display-3 fw-bolder text-dark mb-4 mt-5">
          Unlock Your Potential with Expert-Led Courses
        </h1>
        <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Join thousands of learners mastering new skills with our comprehensive online courses. 
          Start learning today and transform your career.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-5">
          <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-semibold d-flex align-items-center gap-2">
            Browse Courses
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
            </svg>
          </a>
          <a href="#" className="btn btn-light btn-lg px-4 py-2 fw-semibold border">Learn More</a>
        </div>
      </div>

      <div className="flex-grow-1"></div>

      {/* ==================== STATS SECTION ==================== */}
      <div className="bg-white border-top w-100 mt-auto py-5">
        <div className="container">
          <div className="row text-center gy-4 gy-md-0">
            <div className="col-md-4">
              <p className="display-5 fw-bold text-primary mb-1">50,000+</p>
              <p className="text-secondary mb-0">Active Students</p>
            </div>
            <div className="col-md-4">
              <p className="display-5 fw-bold text-primary mb-1">200+</p>
              <p className="text-secondary mb-0">Expert Courses</p>
            </div>
            <div className="col-md-4">
              <p className="display-5 fw-bold text-primary mb-1">95%</p>
              <p className="text-secondary mb-0">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FEATURED COURSES TITLE ==================== */}
      <div className="container fluid text-center mt-5">
        <h1>Featured Courses</h1>
        <p>Discover our most popular courses designed by industry experts</p>
      </div>

      {/* ==================== COURSES CARDS ==================== */}
      <div className="container-fluid py-5 px-lg-5">
        <div className="row g-5 justify-content-center">
          
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 shadow-lg overflow-hidden" 
              style={{ borderRadius: '25px', transition: 'all 0.3s ease-in-out', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
                   className="card-img-top" alt="Web Dev" style={{ height: '260px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 p-xl-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-4 py-2 fs-6">Development</span>
                  <span className="text-warning fw-bold fs-5">⭐ 4.8</span>
                </div>
                <h2 className="card-title fw-bolder mb-3">Web Development Bootcamp</h2>
                <p className="card-text text-secondary mb-4 fs-5">Master modern web technologies from scratch to pro.</p>
                
                <div className="d-flex justify-content-between text-secondary mb-5 fs-6 fw-medium">
                  <span>🕒 12 weeks</span>
                  <span>👥 2,540</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-primary fw-bold mb-0">$99</h2>
                  <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '15px' }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 shadow-lg overflow-hidden" 
              style={{ borderRadius: '25px', transition: 'all 0.3s ease-in-out', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                   className="card-img-top" alt="Data Science" style={{ height: '260px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 p-xl-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge rounded-pill bg-info bg-opacity-10 text-info px-4 py-2 fs-6">Data Science</span>
                  <span className="text-warning fw-bold fs-5">⭐ 4.9</span>
                </div>
                <h2 className="card-title fw-bolder mb-3">Data Science Fundamentals</h2>
                <p className="card-text text-secondary mb-4 fs-5">Analyze data and build machine learning models.</p>
                
                <div className="d-flex justify-content-between text-secondary mb-5 fs-6 fw-medium">
                  <span>🕒 16 weeks</span>
                  <span>👥 1,870</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-primary fw-bold mb-0">$129</h2>
                  <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '15px' }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 shadow-lg overflow-hidden" 
              style={{ borderRadius: '25px', transition: 'all 0.3s ease-in-out', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                   className="card-img-top" alt="Marketing" style={{ height: '260px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 p-xl-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge rounded-pill bg-success bg-opacity-10 text-success px-4 py-2 fs-6">Marketing</span>
                  <span className="text-warning fw-bold fs-5">⭐ 4.7</span>
                </div>
                <h2 className="card-title fw-bolder mb-3">Digital Marketing Mastery</h2>
                <p className="card-text text-secondary mb-4 fs-5">Grow your brand with SEO and Social Media.</p>
                
                <div className="d-flex justify-content-between text-secondary mb-5 fs-6 fw-medium">
                  <span>🕒 8 weeks</span>
                  <span>👥 3,120</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-primary fw-bold mb-0">$79</h2>
                  <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '15px' }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 shadow-lg overflow-hidden" 
              style={{ borderRadius: '25px', transition: 'all 0.3s ease-in-out', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
                   className="card-img-top" alt="Mobile App" style={{ height: '260px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 p-xl-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger px-4 py-2 fs-6">Development</span>
                  <span className="text-warning fw-bold fs-5">⭐ 4.9</span>
                </div>
                <h2 className="card-title fw-bolder mb-3">Mobile App Development</h2>
                <p className="card-text text-secondary mb-4 fs-5">Build stunning iOS and Android apps using Flutter and React Native.</p>
                
                <div className="d-flex justify-content-between text-secondary mb-5 fs-6 fw-medium">
                  <span>🕒 14 weeks</span>
                  <span>👥 1,200</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-primary fw-bold mb-0">$149</h2>
                  <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '15px' }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 shadow-lg overflow-hidden" 
              style={{ borderRadius: '25px', transition: 'all 0.3s ease-in-out', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src="https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740&q=80" 
                   className="card-img-top" alt="UI/UX" style={{ height: '260px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 p-xl-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge rounded-pill bg-warning bg-opacity-10 text-dark px-4 py-2 fs-6">Design</span>
                  <span className="text-warning fw-bold fs-5">⭐ 4.8</span>
                </div>
                <h2 className="card-title fw-bolder mb-3">Complete UI/UX Design</h2>
                <p className="card-text text-secondary mb-4 fs-5">Master Figma and Adobe XD to create user-friendly digital products.</p>
                
                <div className="d-flex justify-content-between text-secondary mb-5 fs-6 fw-medium">
                  <span>🕒 10 weeks</span>
                  <span>👥 4,500</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-primary fw-bold mb-0">$89</h2>
                  <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '15px' }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 shadow-lg overflow-hidden" 
              style={{ borderRadius: '25px', transition: 'all 0.3s ease-in-out', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                   className="card-img-top" alt="Business" style={{ height: '260px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 p-xl-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge rounded-pill bg-dark bg-opacity-10 text-dark px-4 py-2 fs-6">Business</span>
                  <span className="text-warning fw-bold fs-5">⭐ 4.6</span>
                </div>
                <h2 className="card-title fw-bolder mb-3">Business Analytics Pro</h2>
                <p className="card-text text-secondary mb-4 fs-5">Transform data into business insights using Excel, SQL and Tableau.</p>
                
                <div className="d-flex justify-content-between text-secondary mb-5 fs-6 fw-medium">
                  <span>🕒 12 weeks</span>
                  <span>👥 980</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="text-primary fw-bold mb-0">$119</h2>
                  <a href="course.html" className="btn btn-primary btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '15px' }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==================== WHY CHOOSE US ==================== */}
      <div className="container-fluid py-5 my-5" style={{ backgroundColor: '#f0f4ff', borderRadius: '50px' }}>
        <div className="text-center mb-5 pt-4">
          <h2 className="display-5 fw-bold text-dark">Why Choose LearnHub?</h2>
          <p className="lead text-secondary">Everything you need to succeed in your learning journey</p>
        </div>

        <div className="container pb-5">
          <div className="row g-4 text-center">
            
            <div className="col-md-6 col-lg-3">
              <div className="p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">📖</span> 
                </div>
                <h4 className="fw-bold mb-3">Expert Instructors</h4>
                <p className="text-secondary">Learn from industry professionals with years of experience</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">🕒</span>
                </div>
                <h4 className="fw-bold mb-3">Flexible Learning</h4>
                <p className="text-secondary">Study at your own pace with lifetime access to materials</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">🎗️</span>
                </div>
                <h4 className="fw-bold mb-3">Certificates</h4>
                <p className="text-secondary">Earn recognized certificates upon course completion</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">👥</span>
                </div>
                <h4 className="fw-bold mb-3">Community</h4>
                <p className="text-secondary">Join thousands of learners and network with peers</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==================== CTA SECTION ==================== */}
      <div className="container-fluid py-5 text-center text-white" style={{ backgroundColor: '#0d6efd', borderRadius: '5px' }}>
        <div className="py-5">
          <h2 className="display-4 fw-bold mb-3">Ready to Start Your Learning Journey?</h2>
          <p className="fs-5 mb-5 opacity-75">Join our community today and get access to all courses with a 30-day money-back guarantee</p>
          <a href="#" className="btn btn-light btn-lg px-5 py-3 fw-bold text-primary shadow" style={{ borderRadius: '5px' }}>Start Learning Now</a>
        </div>
      </div>
    </>
  );
};

export default Hero;