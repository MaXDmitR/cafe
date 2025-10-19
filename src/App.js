//бібліотеки
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//стилі
import './styles/app.css';
import './styles/media.css';

//компоненти
import NavBar from "./components/NavBar/NavBar";


//сторінки
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Menu from "./pages/Menu.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";



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
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
