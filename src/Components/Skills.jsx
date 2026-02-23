import React from "react";

function Skills() {
  return (
    <section className="Skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <div className="Skills__lists">
        <ul className="Skills__list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Linux</li>
          <li>C++</li>
          <li>C</li>
        </ul>
        <ul className="Skills__list">
          <li>Reverse Engineering</li>
          <li>Entrepreneurship</li>
          <li>Leadership</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Critical Thinking</li>
          <li>Creativity</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
