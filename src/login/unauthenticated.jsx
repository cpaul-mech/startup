import React from "react";

import { Button } from "react-bootstrap";
import { MessageDialog } from "./messageDialog";


export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }
    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: userName, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) {
          localStorage.setItem('userName', userName);
          props.onLogin(userName);
        } else {
          const body = await response.json();
          setDisplayError(`⚠ Error: ${body.msg}`);
        }
      }

    return (
        <>
        <div>
            <h1 id="Welcome_statement">Welcome to the COSMIC 8 BALL
                <span>🔮</span>
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
            <MessageDialog message = {displayError} onHide={()=>setDisplayError(null)}></MessageDialog>
        </div>
        </>
    );
}