import React from "react";

function Certs() {
  return (
    <section className="Certs" aria-labelledby="certs-heading">
      <h2 id="certs-heading">Certs and Coding Profiles</h2>
      <div className="certs-list">
        <ul className="Certs__list">
          <a href="#">hackerrank</a>
          <a href="#">leetcode</a>
          <a href="#">codewars</a>
          <a href="#">tryhackme</a>
          <a href="#">hackthebox</a>
        </ul>
      </div>
    </section>
  );
}

export default Certs;
