// import Spline from '@splinetool/react-spline';
import SplineScene from './SplineScene';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Model */}
      <SplineScene />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">Hi, I'm Catherine</h1>
        <p className="text-xl md:text-2xl mt-4 drop-shadow-md">Frontend Developer</p>
      </div>
    </div>
  );
}