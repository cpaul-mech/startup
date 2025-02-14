import React from 'react';

export function Login() {
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
    <form method="get" action="questionAndAnswer.html">
      <div className="input-group mb-3">
        {/* <!-- <span>email</span> --> */}
        <input id="emailInput" className="form-control" type="text" placeholder="your@email.com" />
      </div>
      <div className="input-group mb-3">
        {/* <!-- <span class>password</span> --> */}
        <input id="passwordInput" className="form-control" type="password" placeholder="password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <button type="submit" className="btn btn-secondary">Create</button>
    </form>
  </main>
  );
}