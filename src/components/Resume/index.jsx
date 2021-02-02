import React from 'react'
import { Container} from "react-bootstrap";
import "./index.css"
export default function Resume(){
    return (
        <Container id = "resume" className="infoResume">  
            <h2>Trainings</h2>
            <ul className = "lists">
                <li>Re: Coded Front-End Web Development Bootcamp (2020) </li>
                    <p>In the Bootcamp of Re:Coded, I have gained experience on web development. I did not have any knowledge before 
                        this bootcamp about front-end development and in 5 months I was able to learn the fundamentals of css, html, javascript and react, moreover implement my knowlegde.
                    </p>
                <li>Peer Mentoring at American University of Armenia (Fall semester 2020) </li>
                    <p>I was mentoring the freshman students. I guided them through their adaptation process to the university life in order to make the process much easier and beneficial</p>
                <li>American University of Armenia Data Science Summer School (2019) </li>
                    <p>I have attended to courses to learn about the core principles of data science, machine learning and artificial intelligence. 
                        I took courses about R programming, Phyton, inferential statistics, bioinformatics, computer vision, NLP and fundamentals of deep learning</p>
                <li>Certificate of “Computational Intelligence & Neural Networks” Workshop (2019) </li>
                    <p>I have attended the workshop on interpretation of the computational Intelligence work mathematically</p>
            </ul>

            <h2>Education</h2>
            <ul className ="lists">
                <li>American University of Armenia </li>
                    <p>Bachelor of Computer Science.</p>

            <li>DataCamp Certificates</li>
                 <p>Intermediate R</p>
                 <p>Introduction to Deep Learning</p>
                 <p>Introduction to Git</p>
                 <p>Object Oriented Programming in Phyton</p>         
            </ul>

            <p className="resumeLink" > For more information about me please check out my <a href ="https://docs.google.com/document/d/1hDeQI17COGbW1K9JTnwdD52cTaPGcXnExmPDlFNxmmY/edit?usp=sharing" rel = "noopener noreferrer" target = "_blank">resume</a></p>
       </Container>
    )
    
}