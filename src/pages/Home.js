import header from "../components/header";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import footer from "../components/footer"
const Home = () => {
    return `
    ${header()};
    ${About()};
    ${Projects()}
    ${Contact()};
    ${footer()};
  `
}

export default Home;