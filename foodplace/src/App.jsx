import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
     <Header />
     <Hero />
     <About />
     <Menu />
     <Footer />
    </>
  );
}

export default App;
