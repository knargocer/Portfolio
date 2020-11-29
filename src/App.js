import NavBar from "./components/Navbar/index.jsx"
import Footer from "./components/Footer/index.jsx"
import About from "./components/About/index.jsx"
import Resume from "./components/Resume/index.jsx"
import Header from "./components/Header/index.jsx"
import Projects from "./components/Projects/index.jsx"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}
