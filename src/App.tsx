import {Routes, Route, Link} from "react-router"
import './App.css'
import GuitarButton from './components/GuitarButton.tsx'
import bleedingMe from "./assets/bleeding-me.mp3";
import masterOfPuppets from "./assets/master-of-puppets-interlude.mp3";
import NavUI from './components/NavUI.tsx'


function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  )
}

function Guitar() {
  return (
    <div className="App">
      <h1>Guitar Stuff</h1>
      <GuitarButton url={bleedingMe} text="Bleeding Me" />
      <GuitarButton url={masterOfPuppets} text="Master of Puppets" />
    </div>
  )
}

function Projects() {
  return (
    <div className="App">
      <h1>Projects</h1>
    </div>
  )
}


function App() {

  return (
    <>
      <NavUI />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Guitar" element={<Guitar />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
