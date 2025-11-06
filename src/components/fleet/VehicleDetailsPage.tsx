import React, { useState } from "react";
import { findVehicleById } from "@/data/vehicleData";
import { ChevronLeft, ChevronRight, X, CheckCircle, Phone, Mail } from "lucide-react";

const TABS = ["Features", "Specifications", "Booking"];

const VehicleDetailsModal = ({ vehicleId, onClose }) => {
  const result = findVehicleById(Number(vehicleId));
  const vehicle = result?.vehicle;
  const [activeTab, setActiveTab] = useState("Features");
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur flex items-center justify-center">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Close / X button */}
        <button className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-blue-500 z-10" onClick={onClose}>
          <X />
        </button>
        {/* Name and model */}
        <div className="p-8 pt-10 pb-3 border-b">
          <h1 className="font-bold text-xl">{vehicle.name}</h1>
          <span className="text-xs text-gray-400">{vehicle.model}</span>
        </div>
        {/* Carousel with price badge */}
        <div className="relative w-full bg-gradient-to-r from-blue-50 to-purple-50">
          <img
            src={vehicle.images[currentImageIdx]}
            alt={vehicle.name}
            className="w-full h-64 object-contain"
          />
          {vehicle.images.length > 1 && (
            <>
              <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
                onClick={() => setCurrentImageIdx(idx => (idx === 0 ? vehicle.images.length - 1 : idx - 1))}
              >
                <ChevronLeft />
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
                onClick={() => setCurrentImageIdx(idx => (idx === vehicle.images.length - 1 ? 0 : idx + 1))}
              >
                <ChevronRight />
              </button>
            </>
          )}
          <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-1.5 rounded-lg font-bold text-base shadow-lg">
            {vehicle.priceRange}
          </div>
        </div>
        {/* Tabs */}
        <div className="flex border-b px-8 bg-white sticky top-0 z-10">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`py-4 px-5 font-semibold transition capitalize ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-500 hover:text-blue-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-8">
          {activeTab === "Features" && (
            <div>
              <h2 className="font-semibold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicle.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Specifications" && (
            <div>
              <h2 className="font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(vehicle.specifications).map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2 border-b">
                    <span className="capitalize text-gray-600">{label.replace(/([A-Z])/g, " $1")}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Booking" && (
            <div>
              <h2 className="font-semibold mb-4">Book Your Ride</h2>
              <input type="text" placeholder="Pickup Location" className="w-full border mb-3 p-2 rounded" />
              <input type="text" placeholder="Drop Location" className="w-full border mb-3 p-2 rounded" />
              <input type="date" className="w-full border mb-3 p-2 rounded" />
              <input type="time" className="w-full border mb-3 p-2 rounded" />
              <textarea rows={3} placeholder="Any special requirements..." className="w-full border p-2 rounded mb-2" />
            </div>
          )}
        </div>
        {/* Sticky action bar */}
        <div className="bg-gray-50 border-t px-8 py-6 flex gap-3 items-center sticky bottom-0">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold flex-1 hover:bg-blue-700 flex items-center justify-center gap-2">
            Book Now
          </button>
          <button className="bg-white border rounded-lg px-5 py-2 hover:bg-gray-100 flex items-center gap-2">
            <Phone className="w-5 h-5" /> Call
          </button>
          <button className="bg-white border rounded-lg px-5 py-2 hover:bg-gray-100 flex items-center gap-2">
            <Mail className="w-5 h-5" /> Email
          </button>
        </div>
      </div>
    </div>
  );
};
export default VehicleDetailsModal;
