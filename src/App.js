import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Signup from './login/Signup';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Task from './task/Task';
import './App.css';
import Home from './home/Home';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the home page */}
        <Route path="/task" element={<Task />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} /> 
        {/* Add other routes for your application */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
