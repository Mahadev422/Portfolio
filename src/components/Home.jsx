import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './main/HomePage';
import About from './portfolio/About';
import Certificate from './portfolio/Certificate';
import Skill from './portfolio/Skill';
import Project from './portfolio/Project';

const Home = () => {

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

export default Home;
