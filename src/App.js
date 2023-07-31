import Doctor from './components/Doctor';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import AboutUS from "./components/AboutUs";
import News from './components/News';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import './App.css';


function App() {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<AboutUS />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
