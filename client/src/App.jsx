import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Books from './assets/components/Books';
import Login from './assets/components/Login';
import Dashboard from './assets/components/Dashboard';
import AddStudent from './assets/components/AddStudent';
import Logout from './assets/components/Logout';
import AddBooks from './assets/components/AddBooks';
import EditBook from './assets/components/EditBook';
import DeleteBook from './assets/components/DeleteBook';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3001/auth/verify')
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole('');
        }
      })
      .catch(() => setRole(''))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-4 text-center">Checking session...</div>;

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home setRole={setRole} />} />
        <Route
          path="/books"
          element={
            role ? <Books role={role} /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
