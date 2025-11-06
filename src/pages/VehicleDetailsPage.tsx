import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { vehicleCategories } from "@/data/vehicleData"; 

const VehicleDetailsPage = () => {
  const { vehicleId } = useParams();
  const navigate = useNavigate();

  // This finds the selected vehicle in the array
  let selectedVehicle = null, categoryName = "";
  for (const [key, category] of Object.entries(vehicleCategories)) {
    const found = category.vehicles.find(v => String(v.id) === vehicleId);
    if (found) {
      selectedVehicle = found;
      categoryName = key;
      break;
    }
  }

  if (!selectedVehicle) return <div>Vehicle not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-5 h-5" />Back to Fleet
          </button>
          <h1 className="text-4xl font-bold">{selectedVehicle.name}</h1>
          <p className="text-white/90 text-lg mt-2">{selectedVehicle.model}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <img src={selectedVehicle.images[0]} alt={selectedVehicle.name} className="w-full h-96 object-contain" />
        {/* Add more info/features/specs here */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <strong>Category:</strong> {categoryName} <br />
          <strong>Capacity:</strong> {selectedVehicle.capacity} <br />
          <strong>Luggage:</strong> {selectedVehicle.luggage} <br />
          <strong>Fuel:</strong> {selectedVehicle.fuelType} <br />
          <strong>Features:</strong> {selectedVehicle.features && selectedVehicle.features.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
