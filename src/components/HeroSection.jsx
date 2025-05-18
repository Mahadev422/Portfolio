import HomePage from "./main/HomePage";
import ComputerSetup3D from './main/ComputerSetup3D';
function HeroSection() {
  return (
     <>
  {/* Canvas as a background div that scrolls normally */}
  <div className="absolute inset-0 w-full h-full pointer-events-none">
    <ComputerSetup3D />
    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" />
  </div>

  {/* Homepage content */}
  <div className="relative z-10 pointer-events-auto flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
    <HomePage />
  </div>
</>

  );
};

export default HeroSection;