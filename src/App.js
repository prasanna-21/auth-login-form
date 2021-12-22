import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Movie from './pages/Movie';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/movie" element={<Movie/>}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          {/* <Navigate to="/notFound"/> */}
          {/* <Redirect  to="/notfound" /> */}
          <Route path="/notfound"/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
