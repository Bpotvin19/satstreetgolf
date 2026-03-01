import { useScrollReveal } from './hooks/useScrollReveal';
import { useNavScroll } from './hooks/useNavScroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Format from './components/Format';
import HoleInOne from './components/HoleInOne';
import Evening from './components/Evening';
import Perks from './components/Perks';
import Sponsors from './components/Sponsors';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Footer from './components/Footer';

function Divider() {
  return <div className="divider" />;
}

function App() {
  useNavScroll();
  useScrollReveal();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Divider />
      <Format />
      <Divider />
      <HoleInOne />
      <Divider />
      <Evening />
      <Divider />
      <Perks />
      <Divider />
      <Sponsors />
      <Divider />
      <Schedule />
      <Divider />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
