
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Aboutpage from "./components/pages/Aboutpage";
import './index.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Experiencepage from "./components/pages/Experiencepage";
import Projectpage from "./components/pages/Projectpage";
import Contactpage from "./components/pages/Contactpage";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='about' element={<Aboutpage/>}/>
    <Route path='experience' element={<Experiencepage/>}/>
    <Route path='project' element={<Projectpage/>}/>
    <Route path='contact' element={<Contactpage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);