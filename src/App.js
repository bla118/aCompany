import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
 
  );
}

export default App;
