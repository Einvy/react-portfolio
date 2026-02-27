import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Skills from "./Skills";
import Projects from "./Projects";
import Keyboard from "./Keyboard";
function App() {
  return (
    <div>
      <Header title="John Ludlow Portfolio" />
      <Body />
      <Skills />
      <Projects />
      <Keyboard />
      <Footer />
    </div>
  );
}

export default App;
