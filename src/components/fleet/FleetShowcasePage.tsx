// src/components/Fleet/FleetShowcasePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { vehicleCategories } from '@/data/vehicleData';
import { Car, Users, Crown } from "lucide-react";

const iconMap = { Car, Users, Crown };
const colorMap = {
  Hatchback: 'bg-gradient-to-br from-green-50 to-blue-50',
  Sedan: 'bg-gradient-to-br from-blue-50 to-purple-50',
  SUV: 'bg-gradient-to-br from-orange-50 to-red-50',
  Luxury: 'bg-gradient-to-br from-purple-50 to-pink-50',
  'TempoTraveler': 'bg-gradient-to-br from-indigo-50 to-blue-50'
};

// Utility to handle slugs for links
function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

const FleetShowcasePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-2 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(vehicleCategories).map(([key, category]) => {
          const Icon = iconMap[category.icon];
          const vehicles = category.vehicles;
          const colorClass = colorMap[key] || 'bg-gradient-to-br from-gray-100 to-gray-200';
          const categorySlug = slugify(key);

          // Compute min/max price for display
          const minPrice = Math.min(...vehicles.map(
            v => Number((v.priceRange.match(/\d+/) || ["0"])[0])
          ));
          const maxPrice = Math.max(...vehicles.map(
            v => Number(
              (v.priceRange.match(/\d+/g) || ["0"])[1] ||
              (v.priceRange.match(/\d+/g) || ["0"])[0]
            )
          ));

          return (
            <div
              key={key}
              className={`rounded-xl ${colorClass} relative p-0 cursor-pointer shadow-md border hover:shadow-xl transition`}
              onClick={() => navigate(`/fleet/${categorySlug}`)}
            >
              {/* Badge for models */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs rounded-full z-10 shadow-sm font-medium text-slate-700">
                {vehicles.length} Models
              </div>
              {/* Icon */}
              <div className="flex items-center justify-center" style={{ minHeight: 110 }}>
                <div className="mt-8 w-14 h-14 rounded-2xl flex items-center justify-center"
                     style={{ background: "rgba(127,127,255,0.13)" }}>
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
              </div>
              {/* Card Content */}
              <div className="p-5 pt-2 flex flex-col min-h-[210px]">
                <div className="font-bold text-lg mb-1">{category.title}</div>
                <div className="text-sm text-slate-700 mb-3">{category.description}</div>
                {/* Vehicle avatars */}
                <div className="flex items-center mb-1">
                  {vehicles.slice(0, 3).map(vehicle => (
                    <img
                      key={vehicle.id}
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                    />
                  ))}
                </div>
                {/* Vehicle names */}
                <div className="text-xs text-gray-500 mb-1 truncate">
                  {vehicles.map(v => v.name).slice(0, 2).join(', ')}
                  {vehicles.length > 2 && ' & more'}
                </div>
                {/* Price and action */}
                <div className="flex items-end justify-between mt-auto pt-3">
                  <div className="text-sm">
                    <span className="text-xs text-slate-500 block">Starting from</span>
                    <span className="font-bold text-blue-700">
                      ₹{minPrice}-{maxPrice}/km
                    </span>
                  </div>
                  <button
                    className="text-sm font-bold bg-blue-900 text-white px-5 py-1.5 rounded-lg shadow hover:bg-blue-700 transition"
                    type="button"
                  >
                    Explore &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FleetShowcasePage;
