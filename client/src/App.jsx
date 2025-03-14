import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Books from './assets/components/Books';
import Login from './assets/components/Login';
import Dashboard from './assets/components/Dashboard';
import AddStudent from './assets/components/AddStudent';


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
