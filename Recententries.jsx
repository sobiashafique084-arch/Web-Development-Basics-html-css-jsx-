import Table from 'react-bootstrap/Table';

function Recententries() {
  // Demo data taake table bhara hua nazar aaye
  const courses = [
    { id: 1, name: "Web Technology", students: 120, duration: "6 Months", fee: "15,000", instructor: "Ahmed Ali", desc: "Learn HTML, CSS, JS" },
    { id: 2, name: "Mobile Application", students: 85, duration: "4 Months", fee: "20,000", instructor: "Sara Khan", desc: "React Native & Flutter" },
    // Aap isi tarah mazeed 10 courses add kar sakte hain
  ];

  return (
    <div className="container mt-4">
      {/* Table Heading */}
      <h2 className="mb-4 text-primary">View Courses Record</h2>
      
      <div className="table-responsive">
        <Table striped bordered hover size="sm" className="align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Students Enrolled</th>
              <th>Duration</th>
              <th>Fee (PKR)</th>
              <th>Instructor Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Pehla Course: Web Technology */}
            <tr>
              <td>1</td>
              <td>Web Technology</td>
              <td>120</td>
              <td>6 Months</td>
              <td>15,000</td>
              <td>Ahmed Ali</td>
              <td>Full Stack Development using MERN.</td>
            </tr>
            
           
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Recententries;