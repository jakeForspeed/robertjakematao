import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Footer from "./components/pages/layout/Footer";
import NavBar from "./components/pages/layout/Navbar";


const App = () => {

  return(
    <>
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  )

}

export default App;