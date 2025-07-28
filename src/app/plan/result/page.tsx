"use client";
import { usePlan } from "../PlanContext";
import { useRouter } from "next/navigation";

export default function PlanResultPage() {
  const { plan } = usePlan();
  const router = useRouter();

  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="bg-white/80 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">No Plan Found</h2>
          <p className="mb-4">Please create a plan first.</p>
          <button onClick={() => router.push('/plan')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go to Plan</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      >
        <source src="/beach-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-lg w-full mx-4 border-2 border-blue-200">
          <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center">Your Travel Plan</h2>
          <div className="mb-4 flex flex-col gap-2 text-lg">
            <div><span className="font-semibold">Destination:</span> {plan.destination}</div>
            <div><span className="font-semibold">Dates:</span> {plan.startDate} to {plan.endDate}</div>
            <div><span className="font-semibold">Travelers:</span> {plan.travelers}</div>
            {plan.preferences && (
              <div><span className="font-semibold">Preferences:</span> {plan.preferences}</div>
            )}
          </div>
          <button onClick={() => router.push('/plan')} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Edit Plan</button>
        </div>
      </div>
    </div>
  );
} 