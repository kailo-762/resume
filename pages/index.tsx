import React, { useEffect } from "react";

import { Welcome } from "../sections/Welcome/Welcome";
import { About } from "../sections/About/About";
import { Projects } from "../sections/Projects/Projects";
import { Work } from "../sections/Work/Work";
// import { Contact } from "./contact/contact";
import { Footer } from "../sections/Footer/Footer";
import { Education } from "../sections/Education/Education";
import Prism from "prismjs";

const Home = () => {
  // --- EFFECTS ---

  useEffect(() => {
    console.log("Highlight all");

    if (typeof window !== "undefined") {
      setTimeout(Prism.highlightAll, 2000);
    }
  }, []);

  // --- RENDER ---

  return (
    <div className="app-wrapper">
      <div className="app">
        <Welcome />
        <About />
        <Projects />
        <Work />
        <Education />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
