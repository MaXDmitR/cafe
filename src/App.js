//бібліотеки
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//стилі
import './styles/app.css';
import './styles/media.css';

//компоненти
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Carousel"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar buttons={[
          { name: 'HOME', link: "/" },
          { name: 'STORY', link: "/story" },
          { name: 'MENU', link: "/menu" },
          { name: 'GALLERY', link: "/gallery" },
          { name: "CONTACT US", link: "/contact" }
        ]}
        ></NavBar>
        <Hero></Hero>
      </div>
    </BrowserRouter>
  );
}

export default App;
