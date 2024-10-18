
import Navbar from './compontents/navbar/Navbar';
import Hero from './compontents/navbar/Hero';
import Projects from './compontents/navbar/Projects';
import About from './compontents/navbar/About';
import Contact from './compontents/navbar/Contact';
import Footer from './compontents/navbar/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
