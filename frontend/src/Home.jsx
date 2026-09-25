import { useState } from "react";
import "./Home.css";
import Quantitative from "./Quantitative";

function Home({ username, onLogout }) {
  const [section, setSection] = useState("home");

  // Show Quantitative Ability section
  if (section === "quantitative") {
    return <Quantitative />;
  }

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <div className="home-logo">
          CareerPrep
        </div>

        <div className="nav-right">

          <span className="welcome-user">
            Hi, {username} 👋
          </span>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* CATEGORIES */}
      <section className="categories">

        <h2>Choose Your Practice Area</h2>

        <p className="section-description">
          Select a topic and start practicing.
        </p>


        <div className="category-grid">


          {/* QUANTITATIVE */}
          <div className="category-card">

            <div className="category-icon">
              🔢
            </div>

            <h3>
              Quantitative Ability
            </h3>

            <p>
              Improve your mathematical problem-solving
              and numerical aptitude skills.
            </p>

            <div className="topics">

              <span>Percentages</span>
              <span>Profit & Loss</span>
              <span>Time & Work</span>
              <span>Ratio</span>

            </div>

            <button
              className="practice-btn"
              onClick={() => setSection("quantitative")}
            >
              Start Practice →
            </button>

          </div>


          {/* LOGICAL */}
          <div className="category-card">

            <div className="category-icon">
              🧠
            </div>

            <h3>
              Logical Reasoning
            </h3>

            <p>
              Develop your logical thinking and
              analytical problem-solving abilities.
            </p>

            <div className="topics">

              <span>Series</span>
              <span>Blood Relations</span>
              <span>Direction Sense</span>
              <span>Seating Arrangement</span>

            </div>

            <button className="practice-btn">
              Start Practice →
            </button>

          </div>


          {/* VERBAL */}
          <div className="category-card">

            <div className="category-icon">
              📖
            </div>

            <h3>
              Verbal Ability
            </h3>

            <p>
              Improve your English vocabulary, grammar,
              and comprehension skills.
            </p>

            <div className="topics">

              <span>Grammar</span>
              <span>Vocabulary</span>
              <span>Reading Comprehension</span>
              <span>Sentence Correction</span>

            </div>

            <button className="practice-btn">
              Start Practice →
            </button>

          </div>


        </div>

      </section>


      {/* PROGRESS */}
      <section className="progress-section">

        <h2>Your Progress</h2>

        <div className="progress-grid">

          <div className="progress-card">
            <h3>0</h3>
            <p>Questions Attempted</p>
          </div>

          <div className="progress-card">
            <h3>0%</h3>
            <p>Accuracy</p>
          </div>

          <div className="progress-card">
            <h3>0</h3>
            <p>Tests Completed</p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="home-footer">

        <p>
          © 2026 CareerPrep
        </p>

      </footer>

    </div>
  );
}

export default Home;