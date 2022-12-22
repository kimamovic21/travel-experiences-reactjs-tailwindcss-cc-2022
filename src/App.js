import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";
import ImageSlider2 from "./components/ImageSlider2";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      {/* <ImageSlider /> */}
      <ImageSlider2 />
      <Footer />
    </div>
  );
};

export default App;
