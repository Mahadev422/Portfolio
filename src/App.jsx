import About from './components/portfolio/About';
import Skill from './components/portfolio/Skill';
import Project from './components/portfolio/Project';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import HeroSection from './components/HeroSection';
import Certificate from './components/portfolio/Certificate';

const App = () => {

  return (
    <div className="min-h-screen font-sans dark:bg-black bg-white dark:text-white">
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <HeroSection />
        <hr />
        {/* About Section */}
        <About />
        <hr />
        {/* Certificate section */}
        <Certificate />
        <hr />
        {/* Skills Section */}
        <Skill />
        <hr />
        {/* Projects Section */}
        <Project />
      </main>
      <Footer />
    </div>
  );
};

export default App;
