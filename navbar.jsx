import React from 'react';

const MyNavbar = () => {
  const handleNavClick = (hash) => {
    window.location.hash = hash;
    window.location.reload(); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => handleNavClick('')}>Administration</a>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            {/* Click lagaya gaya hai */}
            <li className="nav-item">
              <a className="nav-link" href="#add" onClick={() => handleNavClick('add')}>Add</a>
            </li>
            
            {/* Ye sirf nazar ayenge, kaam nahi karenge */}
            <li className="nav-item">
              <li className="nav-item">
  <a className="nav-link text-white" href="#update" onClick={() => handleNavClick('update')}>Update</a>
</li>
            </li>
            <li className="nav-item"><li className="nav-item">
  <a className="nav-link text-white" href="#delete" onClick={() => handleNavClick('delete')}>Delete</a>
</li></li>
            
            {/* Click lagaya gaya hai */}
            <li className="nav-item">
              <a className="nav-link" href="#view" onClick={() => handleNavClick('view')}>View</a>
            </li>

             <li className="nav-item"><li className="nav-item">
  <a className="nav-link text-white" href="#delete" onClick={() => handleNavClick('delete')}>Recent Entries</a>
</li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;