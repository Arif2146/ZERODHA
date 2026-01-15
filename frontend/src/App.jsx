import HomePage from "./landing/home/HomePage";
import SignUp  from "./landing/signup/SignUp";
import AboutPage from "./landing/about/AboutPage";
import PricingPage from "./landing/pricing/PriceingPage";
import ProductPage from "./landing/products/ProductPage";
import SupportPage from "./landing/support/SupportPage";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return <>
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>;
}

export default App;
