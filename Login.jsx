import React from 'react';

const Login = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          
          {/* Card Component */}
          <div className="card shadow border-0 bg-white p-4">
            
            {/* Logo aur Heading */}
            <div className="text-center mb-4">
              <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <img src="logo.png" alt=""width={40} height={40} />
                <h3 className="fw-bold mb-0 text-dark">LearnHub</h3>
              </div>
              <p className="text-muted">Sign in to your account</p>
            </div>

            {/* Login Form */}
            <form>
              {/* Registration Number Input */}
              <div className="mb-3">
                <label htmlFor="regNo" className="form-label">Registration Number</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="regNo" 
                  placeholder="Enter Registration No." 
                  required 
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="loginPassword" 
                  placeholder="Enter Password" 
                  required 
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>

              {/* Extra Link */}
              <div className="text-center">
                <a href="#" className="text-decoration-none small text-muted">Forgot Password?</a>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;