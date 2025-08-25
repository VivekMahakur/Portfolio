import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MyStory from "./MyStory";

function App() {
  return (
      <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div className="container">
              <nav className="navbar">
                <h2 className="logo">Vivek Mahakur</h2>
        <ul className="nav-links">

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/vivek-mahakur-a79b672a1/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a href="https://github.com/VivekMahakur" target="_blank" rel="noreferrer" className="nav-link">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
              </svg>

            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/vivek_mahakur?utm_source=ig_web_button_share_sheet&igsh=MTlwMHd3d3BlZ3AyaQ=="
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
                <h1>Hi, I’m <span>Vivek Mahakur</span></h1>
                <h3>"Developer by code, Artist by heart"</h3>

                <p className="hero-description">
                  I'm a Computer Science and Engineering student passionate about turning ideas into efficient digital solutions. 
                  I enjoy building modern web apps with React & Django, sharpening my problem-solving skills through algorithms, 
                  and exploring networking. Beyond tech, I’m also an artist who loves sketching portraits — a hobby that fuels my creativity.
                </p>
                

                {/* Link to My Story page */}
                <div className="ms">
                <h1 >My Story</h1>
                <p><Link to="/my-story">Here it is..</Link></p>
                <h1 >Projects</h1>
                <h2 className="subT"><a href="https://www.cocomatik.com/">Cocomatik</a></h2>
                <p>A full-stack web application for seamless e-commerce and inventory management, built with Django and JavaScript.</p>
                <h2 className="subT"><a href="https://www.cocomatik.com/">Inventro</a></h2>
                <p>A web app to track, manage, and organize stock effeciently, built with Django and JavaScript.</p>

                </div>
              </section>

              <footer className="footer">@2025 Vivek Mahakur</footer>
            </div>
          }
        />

        {/* My Story page */}
        <Route path="/my-story" element={<MyStory />} />
      </Routes>
    </Router>
  );
}

export default App;