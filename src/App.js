import './App.css';
import Nav from "./Nav";
import React from "react";
import Hero from "./Hero";
import Clips from "./Clips"
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Clips />
      <Footer/>
    </div>
  );
}

export default App;
