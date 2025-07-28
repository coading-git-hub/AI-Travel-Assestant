"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePlan } from "./PlanContext";

export default function PlanPage() {
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1, 
    preferences: "",
  });
  const { setPlan } = usePlan();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlan({
      destination: form.destination,
      startDate: form.startDate,
      endDate: form.endDate,
      travelers: Number(form.travelers),
      preferences: form.preferences,
    });
    router.push("/plan/result");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background GIF */}
      <img
        src="/airplane.webp"
        alt="plane Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      />
      {/* Overlay for form */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full ">
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 rounded-lg p-8 shadow-lg flex flex-col items-center max-w-md w-full mx-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Plan Your Trip</h2>
          <label className="block mb-2 w-full">Destination</label>
          <input type="text" name="destination" value={form.destination} onChange={handleChange} className="mb-4 w-full p-2 border rounded" required />
          <label className="block mb-2 w-full">Start Date</label>
          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="mb-4 w-full p-2 border rounded" required />
          <label className="block mb-2 w-full">End Date</label>
          <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="mb-4 w-full p-2 border rounded" required />
          <label className="block mb-2 w-full">Number of Travelers</label>
          <input type="number" name="travelers" value={form.travelers} onChange={handleChange} className="mb-4 w-full p-2 border rounded" min="1" required />
          <label className="block mb-2 w-full">Preferences</label>
          <select name="preferences" value={form.preferences} onChange={handleChange} className="mb-4 w-full p-2 border rounded">
            <option value="">Select preference</option>
            <option value="Culture">Culture</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Adventure">Adventure</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Generate Plan</button>
        </form>
      </div>
    </div>
  );
} 