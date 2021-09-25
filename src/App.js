import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Bottom from './components/Bottom';
function App() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Bottom/>
    </div>
  );
}

export default App;
