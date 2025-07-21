"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/beach-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full ">
        <div className="bg-transparent rounded-lg p-8 flex flex-col items-center max-w-xl mx-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg hero-outline">
            Plan your Dream Trip with AI
          </h1>
          <p className="mb-6 text-center text-lg text-blue-700 font-semibold">Create personalized travel plans, chat with a virtual assistant, and explore the world effortlessly.</p>
          <Link href="/plan" className="mt-2">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition border-2 border-blue-700">Get Started</button>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .hero-outline {
          color: #000;
          -webkit-text-stroke: 3px #fff;
          text-stroke: 3px #fff;
          text-shadow:
            2px 2px 0 #fff,
            -2px 2px 0 #fff,
            2px -2px 0 #fff,
            -2px -2px 0 #fff;
        }
      `}</style>
    </div>
  );
}
