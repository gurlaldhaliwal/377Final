import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1>About NBA Compare</h1>
      <section className="content-grid">
        <div className="content-box">
          <h2>Project Overview</h2>
          <p>
            We are a group of students from Professor Anmol Dash's INST377 class at the University of Maryland, working on a project that allows users to compare NBA players' stats from the 2024 season.
          </p>
          <p>
            Our website provides an intuitive platform for basketball fans and analysts to compare the performances of two NBA players. By selecting players from a dropdown menu, users can access a wide range of statistics, including points, assists, rebounds, shooting percentages, and more.
          </p>
        </div>

        <div className="content-box">
          <h2>How the Website Works</h2>
          <p>
            The site features three main sections: the landing page, the "Compare" page, and the "About" page. The "Compare" page is the main functionality, allowing users to select two players and view their side-by-side stats. The "Home" page introduces the website, and the "About" page explains the project's purpose and functionality.
          </p>
        </div>

        <div className="content-box">
          <h3>About Us</h3>
          <p>
            As students of INST377, we are passionate about combining our love for basketball with data analysis. This project gives us the opportunity to explore and present NBA stats in a way that helps fans and analysts gain insights into player performance.
          </p>
        </div>

        <div className="content-box">
          <h3>Website Features</h3>
          <p>
            The "Compare" page is where users can select two players and view detailed stats, including scoring, assists, rebounds, and shooting percentages. This page allows for easy analysis of player performance. The "Home" page serves as an introduction to the site, and the "About" page provides more details on the project's goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
