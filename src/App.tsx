import {Routes, Route} from "react-router"
import './App.css'
import BlogPost from './components/BlogPost.tsx'
import BlogPosts from './QoCLib/BlogPosts.tsx'
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
      {/* {GuitarSoundSamples.map((sample, index) => (
        <GuitarButton key={index} url={sample.url} text={sample.text} id={index} />
    ))} */}
      {BlogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content_text={post.content_text} index={index} imageSrc={post.imageSrc} guitarComponents={post.guitarComponents} />
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
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Guitar" element={<Guitar />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
