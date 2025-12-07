import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Clients from './components/Clients';
import References from './components/References';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const referencesRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    hero: heroRef,
    references: referencesRef,
    team: teamRef,
    services: servicesRef,
    clients: clientsRef,
    partners: partnersRef,
    contact: contactRef,
  };

  return (
    <div className="min-h-screen">
      <Navbar refs={refs} />
      <Hero ref={heroRef} />
      <Team ref={teamRef} />
      <Services ref={servicesRef} contactRef={contactRef} />
      <Clients ref={clientsRef} contactRef={contactRef} />
      <References ref={referencesRef} />
      <Partners ref={partnersRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
