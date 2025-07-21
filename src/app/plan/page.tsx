"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PlanPage() {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    budget: "",
    travellers: 1,
    interests: [] as string[],
  });
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background GIF */}
      <img
        src="/airplane.webp"
        alt="Beach Background"
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
          <label className="block mb-2 w-full">Start Date</label>
          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="mb-4 w-full p-2 border rounded" required />
          <label className="block mb-2 w-full">End Date</label>
          <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="mb-4 w-full p-2 border rounded" required />
          <label className="block mb-2 w-full">Budget</label>
          <input type="number" name="budget" value={form.budget} onChange={handleChange} className="mb-4 w-full p-2 border rounded" required />
          <label className="block mb-2 w-full">Number of Travellers</label>
          <input type="number" name="travellers" value={form.travellers} onChange={handleChange} className="mb-4 w-full p-2 border rounded" min="1" required />
          <label className="block mb-2 w-full">Interests</label>
          <div className="flex gap-4 mb-4 w-full">
            <label><input type="checkbox" name="interests" value="Culture" onChange={handleChange} /> Culture</label>
            <label><input type="checkbox" name="interests" value="Relaxation" onChange={handleChange} /> Relaxation</label>
            <label><input type="checkbox" name="interests" value="Adventure" onChange={handleChange} /> Adventure</label>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Generate Plan</button>
        </form>
      </div>
    </div>
  );
} 