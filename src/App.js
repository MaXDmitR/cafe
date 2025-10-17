//бібліотеки
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//стилі
import './styles/app.css';

//компоненти
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar buttons={[
        { name: 'HOME', link: "/"},
        { name: 'STORY', link: "/story"},
        { name: 'MENU', link: "/menu"},
        { name: 'GALLERY', link: "/galery"},
        { name: "CONTACT US", link: "/contact"}
      ]}
      ></NavBar>
    </div>
    </BrowserRouter>
  );
}

export default App;
