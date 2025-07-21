"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function NavbarClient() {
  const [showMap, setShowMap] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex justify-center py-6 z-30" style={{background: 'transparent'}}>
        <div className="flex w-full max-w-4xl items-center justify-between px-4 rounded-3xl" style={{background: 'transparent'}}>
          {/* Logo */}
          <div className="bg-white/80 rounded-2xl px-6 py-2 shadow font-bold text-xl text-blue-700 tracking-wide" style={{fontFamily: 'inherit'}}>
            Travel Assistant
          </div>
          {/* Icons */}
          <div className="flex items-center bg-white/80 rounded-2xl px-4 py-2 gap-6 shadow-lg" style={{backdropFilter: 'blur(4px)'}}>
            {/* Home Icon */}
            <button onClick={() => router.push("/")} title="Home" className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 001.5 1.5H19.5a1.5 1.5 0 001.5-1.5V10.5" />
              </svg>
            </button>
            {/* Map Icon */}
            <button onClick={() => setShowMap(true)} title="Map" className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40" fill="#5B3CC4">
                <path d="M20 36.25q-.292 0-.563-.104-.271-.104-.48-.354-2.875-3.333-4.781-6.25-1.906-2.917-2.927-5.406Q9.229 21.646 8.729 19.885 8.229 18.125 8.229 16.5q0-4.125 2.823-6.927Q13.875 6.771 18 6.771q4.125 0 6.948 2.802Q27.771 12.375 27.771 16.5q0 1.625-.5 3.385-.5 1.76-1.52 4.26-1.021 2.5-2.927 5.406-1.906 2.917-4.781 6.25-.209.25-.48.354-.271.104-.563.104Zm0-15.25q1.458 0 2.479-1.021Q23.5 19 23.5 17.542q0-1.459-1.021-2.48Q21.458 14.042 20 14.042q-1.458 0-2.479 1.02-1.021 1.021-1.021 2.48 0 1.458 1.021 2.479Q18.542 21 20 21Z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {showMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative flex flex-col items-center">
            <button onClick={() => setShowMap(false)} className="absolute top-2 right-2 text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4">Live World Map</h2>
            <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
              <MapComponent />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 