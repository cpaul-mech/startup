import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className = "body">
            <header>
                {/* <!-- Navigation elements --> */}
                <nav>
                    {/* <!-- Menu is a semantic alternative to <ul> that represents an interaction --> */}
                    <menu className="navbar-nav">
                        <li className="nav-item" id="eightBall"><a href="index.html">🔮</a></li>
                        <li className="nav-item"><a href="questionAndAnswer.html">Ask Question</a></li>
                        <li className="nav-item"><a href="yourStats.html">User History</a></li>
                        <li className="nav-item"><a href="about.html">About</a></li>
                    </menu>
                </nav>
            </header>

            <main>App components go here</main>

            <footer>
                <span className="author_text">Author: Chris Paul</span>
                <a href="https://github.com/cpaul-mech/startup">GitHub</a>
            </footer>
        </div>
    );
}