import React, { Component} from 'react';
import { Container } from "react-bootstrap"
import profilePic from "./images/profilePic.jpeg"
import KnarGocerHeader from "./images/KnarGocerHeader.png";
import "./index.css";

export default class Header extends Component {


render() {
    return (
      <Container className = "headerContainer" id="home">
        <img src={KnarGocerHeader} alt="Knar Gocer" className="headerKnarGocerImage"/>
        <h2 className="headerTitle"> I am a Coding Enthusiast and a Junior Web Developer</h2>
        <img className="profilePic" src= {profilePic} alt="profile" />
      </Container>

        )
    }
}