import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Skills from "./Skills";
import Projects from "./Projects";
import Keyboard from "./Keyboard";
import Books from "./Books";
import Blogs from "./Blogs";
import Certs from "./Certs";
import NootropicStack from "./NootropicStack";

function App() {
  return (
    <div>
      <Header title="John's Portfolio" />
      <Body />
      <Skills />
      <Projects />
      <Keyboard />
      <Books />
      <Blogs />
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
