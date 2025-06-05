import About from './components/portfolio/About';
import Skill from './components/portfolio/Skill';
import Project from './components/portfolio/Project';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Certificate from './components/portfolio/Certificate';
import HomePage from './components/main/HomePage';

const App = () => {

  return (
    <div className="min-h-screen font-sans dark:bg-black bg-white dark:text-white">
      <Header />
      <main>
        {/* Hero section */}
        <HomePage />
        {/* About Section */}
        <About />
        {/* Certificate section */}
        <Certificate />
        {/* Skills Section */}
        <Skill />
        {/* Projects Section */}
        <Project />
      </main>
      <Footer />
    </div>
  );
};

export default App;
