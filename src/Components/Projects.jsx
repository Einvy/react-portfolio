import React from "react";

function Projects() {
  return (
    <section className="Projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div className="Project-title">
        <div className="Project-inner">
          <h3>OmbrinStudios</h3>
          <p>
            Creating websites aloing with other software that customers are
            interested in.
          </p>
          <a href="https://ombrinstudios.com/">View</a>
        </div>

        <div className="Project-inner">
          <h3> Courses Website (under construction)</h3>
          <p>
            Site for courses I create on a wide range of topics that relate to
            reverse engineering/programming/etc.
          </p>
          <a href="#">View</a>
        </div>
        <div className="Project-inner">
          <h3>Qr Code generator</h3>
          <p>
            Qr code generator that allows you to generate a qr code for a given
            text. It offers static and also dynamic qr codes. Depending on what
            you need it for/want it for.
          </p>
          <a href="https://q-rgen-ashy.vercel.app/">View</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
