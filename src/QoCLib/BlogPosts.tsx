import GuitarSoundSamples from './GuitarSoundSamples.tsx'
import hero from "../assets/hero.png";


const blogs = [
  {
    id: "0",
    title: "My First Blog Post",
    content_text: "This is the content of my first blog post.",
    guitarComponents: GuitarSoundSamples[0]
  },
  {
    id: "1",
    title: "Test image",
    content_text: "This is a test blog post with an image.",
    imageSrc: hero,
  }
].reverse(); //to show the latest blog post first

export default blogs;