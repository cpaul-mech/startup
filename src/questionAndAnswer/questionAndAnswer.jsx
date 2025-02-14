import React from 'react';
import './questionAndAnswer.css';
export function QuestionAndAnswer() {
  return (
    <main className="container-fluid">
        <h1>The wisdom of the Great and Magical Cosmic 8 Ball is at your disposal</h1>
        <img id="eightBallImgLooming" src="Chris_Cosmic_8_Ball_looming.png" alt="Cosmic 8 Ball placeholder, Generated with Dall-E 3"
            width="800"></img>
        <h2>Ask, USERNAME, and you shall receive your answer</h2>
        <form method="post">
            {/* <!-- #TODO: fill out what this does with react and javascript. --> */}
            <div className="input-group mb-3">
                <input className="form-control" id="UserQuestion" type-="text" placeholder="Ask your Question" />
            </div>
        </form>
        <h3>The response to your question will be rendered here, with some kind of cool viewable graphic.</h3>
        <p>The Response will also sometimes include a reference to one of a few public API's, such as random dog facts,
            random cat facts, and the weather in a random location that I will pick using javascript from a list of
            locations.
        </p>
    </main>
  );
}