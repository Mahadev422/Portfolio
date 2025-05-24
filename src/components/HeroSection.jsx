import HomePage from "./main/HomePage";
import ComputerSetup3D from "./main/ComputerSetup3D";
function HeroSection() {
  return (
    <div className="min-h-screen mx-4">
      <div className="absolute inset-0 w-full">
        <ComputerSetup3D />
        {/* Optional dark overlay */}
      </div>

      {/* Homepage content */}
      <div className="relative bg-black dark:opacity-100 dark:bg-transparent opacity-50 text-white  rounded-2xl w-[70%] pt-20 z-10 flex items-center justify-center px-4">
        <HomePage />
      </div>
    </div>
  );
}

export default HeroSection;
