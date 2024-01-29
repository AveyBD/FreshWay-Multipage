import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
// import AboutUs from "./pages/AboutUs";
// import FarmTales from "./pages/FarmTales";

function App() {
  return (
    <>
     <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path ="/aboutus" element={<AboutUs/>} />
      <Route path="/product" element={<Product/>} />  
    </Routes>

      <Footer/>
    </>
  );
}

export default App;
