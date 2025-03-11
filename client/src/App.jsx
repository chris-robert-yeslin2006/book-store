import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Books from './assets/components/Books';
import Login from './assets/components/Login';


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
