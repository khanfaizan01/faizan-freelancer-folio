import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { ImpactStories } from './components/ImpactStories';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <ImpactStories />
        <TechStack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
