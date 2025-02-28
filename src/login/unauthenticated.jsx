import React from "react";

import { Button } from "react-bootstrap";


export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <main>

            <h1 id="Welcome_statement">Welcome to the COSMIC 8 BALL
                <span>🔮</span>
                {/* <!-- Some kind of Interesting Graphic of a Cosmic 8 Ball --> */}
            </h1>
            <img id="eightBallImg" src="Chris_Cosmic_8_Ball.png" alt="Cosmic-8 Ball graphic"
                width="500"></img>
            <h1>The COSMIC 8 Ball Needs No Introduction</h1>
            <h2>But you do. Please login below.</h2>
                <div className="input-group mb-3">
                    <input id="emailInput" className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <input id="passwordInput" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <Button type="submit" className="btn btn-primary" onClick={()=> loginUser()} disabled={!userName || !password}>Login</Button>
                <Button type="submit" className="btn btn-secondary" onClick={()=>createUser()} disabled={!userName || !password}>Create</Button>
            
        </main>
    );
}