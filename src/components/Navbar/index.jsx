import React from 'react'
import "./index.css"
export default function NavBar(){
    return (
      <nav className="navBar navbar-expand-sm ">
        <a className="smoothscroll" href="#home">Home</a>
        <a className="smoothscroll" href="#about">About</a>
        <a className="smoothscroll" href="#resume">Resume</a>
        <a className="smoothscroll" href="#projects">Projects</a>
        <a className="smoothscroll" href="#contact">Contact</a>
      </nav>
    )
}