
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutPage from "./components/pages/Aboutpage";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path="./about" element={<Aboutpage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);