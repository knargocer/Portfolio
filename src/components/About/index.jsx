import React from 'react';
import "./index.css";
import {Container } from "react-bootstrap"

export default function About() {

    return (
        <Container id="about" className="aboutSection">
        <h2>About Me</h2>
        <p className="aboutInfo">I am a third year Computer Science student in American University of Armenia. 
            I love coding and I am a very curious person that always wants to learn new things. 
            I have always been very interested in technology and art.
            I believe they are very similar in the sense of creating and analysing.  
            Likewise, coding is an art of structuring your thoughts and implementing them to solve a problem. 
            Therefore, I know that working in the development field is very fullfilling and exciting for me. 
        </p>
        </Container>
        );
}