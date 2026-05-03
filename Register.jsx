import React from 'react';

const Register = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <form className="p-4 border rounded shadow-sm bg-white">
            <h3 className="mb-4 fw-bold text-center">Register Your Course Here</h3>
            
            <div className="mb-3">
              <label htmlFor="enter your name" className="form-label">Name</label>
              <input 
                type="Name" 
                className="form-control" 
                id="exampleInputName" 
                aria-describedby="NameHelp" 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                required 
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Registration Number</label>
              <input 
                type="Name" 
                className="form-control" 
                id="exampleInputNoReg" 
                aria-describedby="NameHelp" 
                required 
              />
            </div>

             <div className="mb-3">
              <label htmlFor="" className="form-label">Teacher Name</label>
              <input 
                type="Name" 
                className="form-control" 
                id="exampleInputNoTeacherName" 
                aria-describedby="NameHelp" 
                required 
              />
            </div>

             <div className="mb-3">
              <label htmlFor="" className="form-label">Cell</label>
              <input 
                type="Name" 
                className="form-control" 
                id="exampleInputNoCell" 
                aria-describedby="NameHelp" 
                required 
              />
            </div>


            
            
{/* dropdown */}

           <div className="mb-3">
  <label htmlFor="exampleInputCourses" className="form-label">Courses</label>
  <select 
    className="form-select" 
    id="exampleInputCourses" 
    defaultValue=""
    required
  >
    <option value="" disabled>Select a course</option>
    <option value="web-development">Web Development Bootcamp</option>
    <option value="data-science">Data Science Fundamentals</option>
    <option value="digital-marketing">Digital Marketing Mastery</option>
    <option value="mobile-app">Mobile App Development</option>
    <option value="ui-ux">Complete UI/UX Design</option>
    <option value="business-analytics">Business Analytics Pro</option>
  </select>
</div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;