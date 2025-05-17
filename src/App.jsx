import About from './components/portfolio/About';
import Skill from './components/portfolio/Skill';
import Project from './components/portfolio/Project';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import HomePage from './components/main/HomePage';
const App = () => {

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="pb-10">
        {/* Hero section */}
        <HomePage />
        {/* About Section */}
        <About />
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
