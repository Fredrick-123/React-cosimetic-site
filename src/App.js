import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";
import Testimonial from "./Components/Testimonials/Testimonial";
import Virtual from "./Components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
