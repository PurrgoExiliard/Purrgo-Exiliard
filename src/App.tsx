import {Routes, Route} from "react-router"
import './App.css'
import BlogPost from './components/BlogPost.tsx'
import BlogPosts from './QoCLib/BlogPosts.tsx' 
//placeholder for testing and development
//will be replaced by API call on server
//returning same array of objects
import AboutMe from './components/AboutMe.tsx'
import NavUI from './components/NavUI.tsx'


function Home() {
  return (
    <div className="App">
      <AboutMe />
    </div>
  )
}

function Blog() {
  return (
    <div className="App">
      <h1 className="title">Blog</h1>
      <div className="blog_post_container">
        {BlogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} content_text={post.content_text} index={post.id} imageSrc={post.imageSrc} guitarComponents={post.guitarComponents} />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="App">
      <h1 className="title">Projects</h1>
    </div>
  )
}


function App() {

  return (
    <>
      <NavUI />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Guitar" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Certificates" />
      </Routes>
    </>
  )
}

export default App
