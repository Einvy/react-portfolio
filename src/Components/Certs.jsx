import React from "react";

function Certs() {
  return (
    <section className="Certs" aria-labelledby="certs-heading">
      <h2 id="certs-heading">Certs and Coding Profiles</h2>
      <div className="certs-list">
        <ul className="Certs__list">
          <li>
            <a href="#">hackerrank</a>
          </li>
          <li>
            <a href="#">leetcode</a>
          </li>
          <li>
            <a href="#">codewars</a>
          </li>
          <li>
            <a href="#">tryhackme</a>
          </li>
          <li>
            <a href="#">hackthebox</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certs;
