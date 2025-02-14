import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div>
            <header>
                {/* <!-- Navigation elements --> */}
                <nav>
                    {/* <!-- Menu is a semantic alternative to <ul> that represents an interaction --> */}
                    <menu class="navbar-nav">
                        <li class="nav-item" id="eightBall"><a href="index.html">🔮</a></li>
                        <li class="nav-item"><a href="questionAndAnswer.html">Ask Question</a></li>
                        <li class="nav-item"><a href="yourStats.html">User History</a></li>
                        <li class="nav-item"><a href="about.html">About</a></li>
                    </menu>
                </nav>
            </header>
            <main>App components go here</main>
            <footer className="bg-dark text-white-50">
                <div className="container-fluid">
                    <span className="text-reset">Author Name(s)</span>
                    <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
                        Source
                    </a>
                </div>
            </footer>
        </div>
    );
}