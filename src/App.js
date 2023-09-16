import React from "react";
import { Footer, Navbar } from "./components/index";
import "./App.css";
import {
  Hero,
  About,
  GetStarted,
  WhatsNew,
  World,
  Feedback,
  Projects,
  Services,
} from "./layout/index.jsx";
const App = () => {
  return (
    <div className="bg-[#0D1017]">
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <WhatsNew />
        <Services />
        <GetStarted />
        <World />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
};

export default App;
