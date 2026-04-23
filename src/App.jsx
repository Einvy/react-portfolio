import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Books from "./Components/Books";
// import Blogs from "./Components/Blogs";
import Certs from "./Components/Certs";
// import NootropicStack from "./Components/NootropicStack";
import Keyboard from "./Components/Keyboard";
import Resume from "./Components/Resume";

function App() {
  return (
    <div>
      <Header title="John's Portfolio" />
      <main>
        <Body />
        <Skills />
        <Projects />
        <Keyboard />
        <Books />
        {/* <Blogs /> */}
        <Certs />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
