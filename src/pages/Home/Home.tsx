import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/Hero/About/About"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Hero/About/Projects/Projects"
const Home = () => {


  return (
    <>
      <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
    </>
  )
}

export default Home
