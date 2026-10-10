import GuitarSoundSamples from './GuitarSoundSamples.tsx'
import hero from "../assets/hero.png";


const blogs = [
  {
    title: "My First Blog Post",
    content_text: "This is the content of my first blog post.",
    guitarComponents: GuitarSoundSamples[0]
  },
  {
    title: "Test image",
    content_text: "This is a test blog post with an image.",
    imageSrc: hero,
  }
]

export default blogs;