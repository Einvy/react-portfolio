import React from "react";

function Certs() {
  return (
    <section className="Certs" aria-labelledby="certs-heading">
      <h2 id="certs-heading">Certs and Coding Profiles</h2>
      <div className="certs-list">
        <ul className="Certs__list">
          <a href="https://www.hackerrank.com/johntludlow">hackerrank</a>
          <a href="https://leetcode.com/johntludlow">leetcode</a>
          <a href="https://codewars.com/johntludlow">codewars</a>
          <a href="https://tryhackme.com/johntludlow">tryhackme</a>
          <a href="https://hackthebox.com/johntludlow">hackthebox</a>
        </ul>
      </div>
    </section>
  );
}

export default Certs;
