import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Nav from "./components/nav";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
