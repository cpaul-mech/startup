import React from 'react';
import './yourStats.css';

export function YourStats() {
  return (
    <main className="container-fluid">
        <img id="eightBallImg" src="Chris_Cosmic_8_Ball.png" alt="Cosmic 8 Ball placeholder, Generated with Dall-E 3"
            width="100"></img>
        <h3>USERNAME has asked: ## questions of the 8 ball</h3>
        <h3>USERNAME has received ## different types of wisdom</h3>
            <table className="table-bordered">
                <tr>
                    <th>Your questions</th>
                    <th>Answers</th>
                </tr>
                <tr>
                    <td>What should I do tomorrow</td>
                    <td>Yes.</td>
                </tr>
                <tr>
                    <td>Will I end up getting a job?</td>
                    <td>A rocket has to travel at around 11.2 km/s to escape earth's gravity.</td>
                </tr>
            </table>
    </main>
  );
}