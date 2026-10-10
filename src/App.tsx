import {Routes, Route} from "react-router"
import './App.css'
import GuitarButton from './components/GuitarButton.tsx'
import GuitarSoundSamples from './QoCLib/GuitarSamples.tsx'
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
      {GuitarSoundSamples.map((sample, index) => (
        <GuitarButton key={index} url={sample.url} text={sample.text} />
      ))}
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
