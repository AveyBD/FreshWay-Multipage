

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
      <Home/>
      <AboutUs/>
      <Product/>
      <Footer/>
    </>
  );
}

export default App;
