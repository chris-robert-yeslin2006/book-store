import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Books from './assets/components/Books';
import Login from './assets/components/Login';
import Dashboard from './assets/components/Dashboard';
import AddStudent from './assets/components/AddStudent';
import Logout from './assets/components/Logout';
import AddBooks from './assets/components/AddBooks';
import EditBook from './assets/components/EditBook';
import React from 'react';

function App() {
  const [role, setRole] = React.useState(''); 
  return (
    <BrowserRouter>
      <Navbar role={role} /> 
      <Routes>
        <Route path="/" element={<Home setRole={setRole} />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login setRole={setRole} />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/logout" element={<Logout setRole={setRole}  />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/book/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}




 export default App
