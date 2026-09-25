import { useState } from "react";
import Home from "./Home";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        setLoggedInUser(data.username || username);
        setLoggedIn(true);
        setMessage("");
      } else {
        setMessage(data.message || data.error || "Login failed");
      }
    } catch (error) {
      setMessage("Unable to connect to server.");
      console.error(error);
    }
  };

  // SIGN UP
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully!");

        setUsername("");
        setPassword("");
        setConfirmPassword("");

        // Go to login
        setPage("login");
      } else {
        setMessage(data.message || data.error || "Sign up failed");
      }
    } catch (error) {
      setMessage("Unable to connect to server.");
      console.error(error);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");

    setLoggedIn(false);
    setLoggedInUser("");

    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setMessage("");

    setPage("home");
  };

  // AFTER LOGIN
  if (loggedIn) {
    return (
      <Home
        username={loggedInUser}
        onLogout={handleLogout}
      />
    );
  }

  // LOGIN / SIGNUP PAGE
  if (page === "login" || page === "signup") {
    const isLogin = page === "login";

    return (
      <div className="auth-page">

        <div className="auth-card">

          <div className="logo">
            CareerPrep
          </div>

          <h1>{isLogin ? "Welcome Back!" : "Create Account"}</h1>

          <p className="auth-subtitle">
            {isLogin
              ? "Login to continue your career journey."
              : "Start preparing for your dream career."}
          </p>

          <form onSubmit={isLogin ? handleLogin : handleSignup}>

            {/* USERNAME */}
            <div className="input-group">
              <label>Username</label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}
            {!isLogin && (
              <div className="input-group">
                <label>Confirm Password</label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm password"
                  required
                />
              </div>
            )}

            <button className="primary-btn" type="submit">
              {isLogin ? "Log In" : "Sign Up"}
            </button>

          </form>

          <p className="message">{message}</p>

          {isLogin ? (
            <p className="switch-text">
              Don't have an account?

              <button
                className="link-btn"
                onClick={() => {
                  setPage("signup");
                  setMessage("");
                  setPassword("");
                }}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="switch-text">
              Already have an account?

              <button
                className="link-btn"
                onClick={() => {
                  setPage("login");
                  setMessage("");
                  setPassword("");
                  setConfirmPassword("");
                }}
              >
                Log In
              </button>
            </p>
          )}

          <button
            className="back-btn"
            onClick={() => {
              setPage("home");
              setMessage("");
            }}
          >
            ← Back to CareerPrep
          </button>

        </div>

      </div>
    );
  }

  // CAREERPREP HOMEPAGE
  return (
    <div className="careerprep">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="brand">
          CareerPrep
        </div>

        <div className="nav-buttons">

          <button
            className="login-btn"
            onClick={() => setPage("login")}
          >
            Log In
          </button>

          <button
            className="signup-btn"
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>

        </div>

      </nav>

      {/* HERO */}
      <main className="hero">

        <div className="hero-content">

          <span className="tag">
            YOUR CAREER JOURNEY STARTS HERE
          </span>

          <h1>
            Prepare Today.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            CareerPrep your one stop destination to placements.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary"
              onClick={() => setPage("signup")}
            >
              Get Started
            </button>

            <button
              className="hero-secondary"
              onClick={() => setPage("login")}
            >
              Log In
            </button>

          </div>

        </div>

      </main>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">💻</div>

          <h3>Practice</h3>
          <p>
            Ample amount of questions to practice from.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📚</div>

          <h3>Learn</h3>
          <p>
            Well structured notes.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🚀</div>

          <h3>Grow</h3>

          <p>
            Prepare yourself for internships,
            placements, and your future career.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer>
        <p>Developed by Rosemariya Roy</p>
        <p>© 2026 CareerPrep. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;