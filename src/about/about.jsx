import React from 'react';
import './about.css';
import { NavLink } from 'react-router-dom';
export function About() {
  return (
    <main className="container-fluid">
        <img id="eightBallImg" src="Chris_Cosmic_8_Ball.png" alt="Cosmic 8 Ball placeholder, Generated with Dall-E 3"
            width="100"></img>
        <p className="text-left ">The COSMIC 8 BALL has come down to earth for some amusement, and needs to answer your
            silly mortal questions to do so.</p>
        <h3>The History of the 8 Ball</h3>
        <p>The magic 8 ball was first patented in the 1940's in Cincinatti Ohio. It was developed by Mary Carter, a
            "professional clarivoyant" who used a similar device in her work.
            Her son Albert Carter filed a patent for a "liquid filled die agitator" with the U.S. Patent office in 1944.
            Back then the design was a molasses filled cylinder with clear ends.
            Albert's Business partner, Abe Bookman, continued to develop the product after Carter's death in 1948. It
            was Bookman who swapped the molasses for dyed water and
            decided to shape the device as a sphere rather than a cylinder, because it reminded him of a crystal ball.
        </p>
        <NavLink to="https://en.wikipedia.org/wiki/Magic_8_Ball">Read up on the history</NavLink>
    </main>
  );
}