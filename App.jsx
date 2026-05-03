import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './navbar.jsx';   //admin side navbar
import SmallExample from './view.jsx';
import Add from './add.jsx'; 
import Update from './update.jsx'; // Nayi file
import Delete from './delete.jsx'; // Nayi file
import Usernavbar from './usernavbar.jsx'; //user side navbar 
import Hero from './Hero.jsx';
import Footer from './Footer.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Recententries from './Recententries.jsx';

function App() {
  // const currentHash = window.location.hash;

  return (
    <>
      <MyNavbar />   
      <Recententries/>
      {/* <Usernavbar/>
      <Hero/>
      <Footer/>
      <Register/>
      <Login/> */}
      
      {/* <div className="container mt-5">
        {currentHash === '#add' ? (
          <Add />
        ) : currentHash === '#view' ? (
          <SmallExample />
        ) : currentHash === '#update' ? (
          <Update />
        ) : currentHash === '#delete' ? (
          <Delete />
        ) : (
          <div className="text-center">
            <h1 className="display-4 fw-bold">Admin Dashboard</h1>
          </div>
        )}
      </div> */}
    </>
  );
}

export default App;