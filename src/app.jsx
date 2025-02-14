import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { QuestionAndAnswer } from './questionAndAnswer/questionAndAnswer';
import { YourStats } from './yourStats/yourStats';

export default function App() {
    return (
        <BrowserRouter>
        <div className = "body">
            <header className='container-fluid'>
                {/* <!-- Navigation elements --> */}
                <nav className='navbar fixed-top'>
                    {/* <!-- Menu is a semantic alternative to <ul> that represents an interaction --> */}
                    <menu className="navbar-nav">
                        <li className="nav-item" id="eightBall"><NavLink to="">🔮</NavLink></li>
                        <li className="nav-item"><NavLink to="questionAndAnswer">Ask Question</NavLink></li>
                        <li className="nav-item"><NavLink to="yourStats">User History</NavLink></li>
                        <li className="nav-item"><NavLink to="about">About</NavLink></li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/about' element={<About/>} />
                <Route path='/questionAndAnswer' element={<QuestionAndAnswer/>}/>
                <Route path='/yourStats' element={<YourStats/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <span className="author_text">Author: Chris Paul</span>
                <NavLink to="https://github.com/cpaul-mech/startup">GitHub</NavLink>
            </footer>
        </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }