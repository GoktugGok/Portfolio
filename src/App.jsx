import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Background3D from './components/Background3D';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Background3D />
        <Navbar />
        <main>
          <Home />
          <Experience />
          <Achievements />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
