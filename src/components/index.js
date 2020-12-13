import About from "../components/About"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faExternalLinkAlt, faGithub)

export {
  About,
  Experience,
  Footer,
  Landing,
  Layout,
  Project,
  Projects,
  Navbar,
  Skills,
}
