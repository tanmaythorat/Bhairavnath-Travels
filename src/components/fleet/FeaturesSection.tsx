// src/components/Fleet/FeaturesSection.tsx
import React from "react";
import { Star, Users, Snowflake, Wifi, Shield } from "lucide-react";

const features = [
  {
    icon: <Star className="w-8 h-8 text-yellow-400"/>,
    title: "Best-in-Class Fleet",
    description: "Latest models, high safety, premium comfort, and top reliability."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500"/>,
    title: "Professional Service",
    description: "Trained chauffeurs, verified drivers, and clean interiors."
  },
  {
    icon: <Snowflake className="w-8 h-8 text-cyan-500"/>,
    title: "AC & Amenities",
    description: "Chilled AC, music system, phone charging, and more in every trip."
  },
  {
    icon: <Wifi className="w-8 h-8 text-teal-500"/>,
    title: "Always Connected",
    description: "Free WiFi, real-time GPS tracking for your convenience."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600"/>,
    title: "Full Insurance",
    description: "All vehicles fully insured and sanitized for a safe experience."
  }
];

const FeaturesSection = () => (
  <div className="my-10">
    <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Fleet?</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center">
          <div className="mb-2">{f.icon}</div>
          <div className="font-bold mb-1 text-lg">{f.title}</div>
          <div className="text-gray-600">{f.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesSection;
